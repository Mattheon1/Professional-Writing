import fs from 'node:fs';
import path from 'node:path';
import MarkdownIt from 'markdown-it';
import footnote from 'markdown-it-footnote';
import katex from 'katex';
import YAML from 'yaml';

const vault = path.resolve(process.env.CONTENT_DIR || 'vault');
const output = path.resolve(process.env.OUTPUT_DIR || 'dist');
const rawBase = process.env.BASE_PATH || '';
if (rawBase && (!rawBase.startsWith('/') || /[?#\\]/.test(rawBase) || rawBase.split('/').includes('..'))) throw Error('BASE_PATH must be a URL path such as /mathematical-writing.');
const base = rawBase.replace(/\/$/, '');
const url = route => base + route;
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slugify = s => s.normalize('NFKD').replace(/\p{M}/gu,'').toLowerCase().replace(/[^\p{L}\p{N}]+/gu,'-').replace(/^-|-$/g,'');
const encodePath = s => s.split('/').map(encodeURIComponent).join('/');
const relative = p => path.relative(vault, p).split(path.sep).join('/');
function walk(dir) {
 if (!fs.existsSync(dir)) return [];
 return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e => {
  if(e.name.startsWith('.') || e.isSymbolicLink()) return [];
  const p=path.join(dir,e.name);return e.isDirectory()?walk(p):[p];
 });
}
function readNote(file) {
 const source=fs.readFileSync(file,'utf8').replace(/^\uFEFF/,'');
 const m=source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
 const data=m?YAML.parse(m[1]):{};
 if(data && (typeof data!=='object'||Array.isArray(data))) throw Error(`Invalid properties in ${file}`);
 return {data:data||{},body:m?source.slice(m[0].length):source};
}
const home=readNote(path.join(vault,'Home.md'));
const about=readNote(path.join(vault,'About.md'));
const config={name:home.data.name||'Matthew Burger',role:home.data.role||'Physics student & recreational mathematician',title:home.data.title||'Mathematical writing',description:home.data.description||''};
const notes=walk(path.join(vault,'Writing')).filter(f=>f.endsWith('.md')).map(file=>{
 const {data,body}=readNote(file);if(data.publish!==true)return null;
 const title=data.title||path.basename(file,'.md');const slug=data.slug||slugify(path.basename(file,'.md'));
 if(!/^[\p{L}\p{N}]+(?:-[\p{L}\p{N}]+)*$/u.test(slug))throw Error(`Invalid slug in ${relative(file)}. Use words separated by hyphens.`);
 return {file,body,title:String(title),slug,subject:String(data.subject||'Mathematics'),status:String(data.status||'Working note'),description:String(data.description||''),order:Number.isFinite(Number(data.order))?Number(data.order):100,aliases:Array.isArray(data.aliases)?data.aliases:(data.aliases?[data.aliases]:[])};
}).filter(Boolean).sort((a,b)=>a.order-b.order||a.title.localeCompare(b.title));
const usedSlugs=new Set();for(const n of notes){if(usedSlugs.has(n.slug))throw Error(`Two published notes use the slug “${n.slug}”. Give each note its own slug property.`);usedSlugs.add(n.slug);}
const noteUrl=n=>url('/writing/'+encodeURIComponent(n.slug)+'/');
const reports={mathCount:0,mathErrors:[],missingNotes:new Set(),missingImages:new Set()};
const assets=walk(vault).filter(f=>/\.(png|jpe?g|gif|webp|avif|svg|pdf)$/i.test(f));
const usedAssets=new Set();
function assetFile(name,sourceFile) {
 let clean;try{clean=decodeURIComponent(name.split('#')[0]);}catch{clean=name;}
 const candidates=[path.resolve(path.dirname(sourceFile),clean),path.resolve(vault,clean),path.resolve(vault,'Attachments',clean)];
 for(const candidate of candidates)if(assets.includes(candidate))return candidate;
 const matches=assets.filter(a=>path.basename(a)===path.basename(clean));return matches.length===1?matches[0]:null;
}
function assetUrl(file){usedAssets.add(file);return url('/assets/'+encodePath(relative(file)));}
function findNote(name,sourceFile){
 let clean;try{clean=decodeURIComponent(name).replace(/\.md$/i,'');}catch{clean=name;}
 if(!clean)return notes.find(n=>n.file===sourceFile);
 const candidates=[path.resolve(path.dirname(sourceFile),clean+'.md'),path.resolve(vault,clean+'.md')];
 const exact=notes.find(n=>candidates.includes(n.file));if(exact)return exact;
 const matches=notes.filter(n=>[relative(n.file).replace(/\.md$/,''),path.basename(n.file,'.md'),n.title,...n.aliases].includes(clean));
 return matches.length===1?matches[0]:null;
}
function renderMath(source,display,file){
 reports.mathCount++;
 try{return katex.renderToString(source,{displayMode:display,throwOnError:true,strict:'ignore',trust:false,output:'htmlAndMathml'});}
 catch(e){reports.mathErrors.push({file:relative(file),source,error:e.message});return `<code class="math-error">${esc(source)}</code>`;}
}
const md=new MarkdownIt({html:false,typographer:false,linkify:false}).use(footnote);
md.inline.ruler.before('escape','obsidian_math',(state,silent)=>{
 const start=state.pos;if(state.src[start]!=='$')return false;
 const display=state.src[start+1]==='$',delimiter=display?'$$':'$',begin=start+delimiter.length;
 let end=state.src.indexOf(delimiter,begin);
 while(end!==-1&&state.src[end-1]==='\\')end=state.src.indexOf(delimiter,end+delimiter.length);
 if(end===-1)return false;
 if(!silent){const t=state.push('math_inline','',0);t.content=state.src.slice(begin,end);t.meta={display};}
 state.pos=end+delimiter.length;return true;
});
md.renderer.rules.math_inline=(tokens,i,options,env)=>`<span class="${tokens[i].meta.display?'display-equation':'inline-equation'}">${renderMath(tokens[i].content,tokens[i].meta.display,env.file)}</span>`;
md.inline.ruler.before('link','wikilink',(state,silent)=>{
 const start=state.pos,embedded=state.src.startsWith('![[',start);if(!embedded&&!state.src.startsWith('[[',start))return false;
 const end=state.src.indexOf(']]',start+(embedded?3:2));if(end===-1)return false;
 const [target,alias]=state.src.slice(start+(embedded?3:2),end).split('|');
 if(!silent){const t=state.push('wikilink','',0);t.meta={embedded,target,alias};}
 state.pos=end+2;return true;
});
md.renderer.rules.wikilink=(tokens,i,options,env)=>{
 const {embedded,target,alias}=tokens[i].meta;
 if(embedded){const asset=assetFile(target,env.file);
  if(asset){if(/\.pdf$/i.test(asset))return `<a href="${esc(assetUrl(asset))}">${esc(alias||path.basename(asset))} (PDF)</a>`;
   const size=/^\d+(x\d+)?$/.test(alias||'')?Number(alias.split('x')[0]):null;
   const label=size?path.basename(target,path.extname(target)):(alias||path.basename(target,path.extname(target)));
   const alt=target==='Screenshot from 2025-08-25 02-43-58.png'?'Illustration pairing Euclid, Galileo, and Einstein with geometric ideas.':label;
   return `<img class="note-image" src="${esc(assetUrl(asset))}" alt="${esc(alt)}" ${size?`style="max-width:${Math.min(size,4096)}px"`:''} loading="lazy">`;
  }
  reports.missingImages.add(target);return `<span class="omitted-figure" title="${esc(target)}">${/\.md$/.test(target)||!path.extname(target)?'Embedded note':'Diagram'} not included in this copy.</span>`;
 }
 const [name,heading]=target.split('#');let href;
 if(name==='About')href=url('/#about');else if(name==='Home')href=url('/');else{const found=findNote(name,env.file);if(found)href=noteUrl(found)+(heading?'#'+slugify(heading):'');}
 if(href)return `<a href="${esc(href)}">${esc(alias||target)}</a>`;
 const asset=assetFile(target,env.file);if(asset)return `<a href="${esc(assetUrl(asset))}">${esc(alias||target)}</a>`;
 reports.missingNotes.add(target);return `<span class="unavailable-note" title="This linked note is not included in this collection.">${esc(alias||target)}</span>`;
};
const imageRule=md.renderer.rules.image;
md.renderer.rules.image=(tokens,i,options,env,renderer)=>{
 const t=tokens[i],src=t.attrGet('src');
 if(!/^https?:\/\//i.test(src)){
  const asset=assetFile(src,env.file);
  if(!asset){reports.missingImages.add(src);return '<span class="omitted-figure">Image not included in this copy.</span>';}
  t.attrSet('src',assetUrl(asset));
 }
 t.attrJoin('class','note-image');t.attrSet('loading','lazy');return imageRule(tokens,i,options,env,renderer);
};
function fixLinks(tokens,file){
 const linkStack=[];
 for(const t of tokens){
  if(t.children)fixLinks(t.children,file);
  if(t.type==='link_open'){
   const href=t.attrGet('href');let missing=false;
   if(href&&!/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(href)){
    const [name,anchor]=href.split('#');
    if(/\.md$/i.test(name)){
     let found=findNote(name,file);
     if(found)t.attrSet('href',noteUrl(found)+(anchor?'#'+slugify(decodeURIComponent(anchor)):''));
     else if(/(?:^|\/)About\.md$/i.test(name))t.attrSet('href',url('/#about'));
     else if(/(?:^|\/)Home\.md$/i.test(name))t.attrSet('href',url('/'));
     else {missing=true;reports.missingNotes.add(name);}
    }else if(name){const asset=assetFile(name,file);if(asset)t.attrSet('href',assetUrl(asset)+(anchor?'#'+anchor:''));}
   }
   if(missing){t.tag='span';t.attrs=[['class','unavailable-note'],['title','This linked note is not included in this collection.']];}
   linkStack.push(missing);
  }else if(t.type==='link_close'&&linkStack.pop())t.tag='span';
 }
}
function render(source,file,{headings:trueHeadings=true}={}){
 const env={file};const tokens=md.parse(source,env),headings=[],seen=new Map();
 const levels=tokens.filter(t=>t.type==='heading_open').map(t=>Number(t.tag.slice(1))),baseline=Math.min(...levels);
 for(let i=0;i<tokens.length;i++){
  const t=tokens[i];
  if(t.type==='heading_open'){
   const inline=tokens[i+1],baseId=slugify(inline.content)||'section',count=seen.get(baseId)||0;seen.set(baseId,count+1);const id=baseId+(count?'-'+count:'');
   t.attrSet('id',id);const level=Number(t.tag.slice(1));t.tag='h'+Math.min(6,2+level-baseline);headings.push({title:inline.content.replace(/[*_]/g,''),id,depth:level-baseline});
  }else if(t.type==='heading_close')t.tag='h'+Math.min(6,2+Number(t.tag.slice(1))-baseline);
  if(t.type==='blockquote_open'){
   const inline=tokens[i+2],first=inline?.children?.[0];
   if(first?.type==='text'){
    const callout=first.content.match(/^\[!([a-zA-Z-]+)\][+-]?(?:[ \t]+([^\n]*))?(?:\n|$)/);
    if(callout){t.attrSet('class','callout');first.content=first.content.slice(callout[0].length);const label=new stateToken('html_inline','',0);label.content='<strong class="callout-title">'+esc(callout[2]||callout[1][0].toUpperCase()+callout[1].slice(1))+'</strong>';inline.children.unshift(label);}
   }
  }
 }
 fixLinks(tokens,file);
 return {html:md.renderer.render(tokens,md.options,env),headings:trueHeadings?headings:[]};
}
// Token construction uses the parser's own token type rather than a second parser.
const stateToken=md.parse('x',{})[0].constructor;
const favicon='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" rx="8" fill="#173c68"/><text x="24" y="33" font-family="Georgia,serif" font-size="31" fill="white" text-anchor="middle">M</text></svg>');
function page({title,description,body}){return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} — ${esc(config.name)}</title><meta name="description" content="${esc(description)}"><meta name="color-scheme" content="light"><link rel="icon" href="${favicon}"><link rel="stylesheet" href="${url('/style.css')}"><link rel="stylesheet" href="${url('/assets/katex/katex.min.css')}"></head><body><a class="skip" href="#main">Skip to content</a><header class="site-header"><a class="brand" href="${url('/')}">${esc(config.name)}</a><nav aria-label="Main navigation"><a href="${url('/#writing')}">Writing</a><a href="${url('/#about')}">About</a></nav></header>${body}<footer class="site-footer"><span>${esc(config.name)}</span><span>Mathematical writing</span></footer></body></html>`;}
const groups=[];for(const n of notes){let g=groups.find(g=>g.title===n.subject);if(!g){g={title:n.subject,notes:[]};groups.push(g);}g.notes.push(n);}
const rows=groups.map(g=>{
 const subtitle=g.notes.every(n=>n.status.startsWith('Earlier'))?'Earlier writing':g.notes.every(n=>n.status==='Working note')?'Working notes':'';
 return `<section class="writing-group" aria-label="${esc(g.title)}"><div class="group-label"><h3>${esc(g.title)}</h3>${subtitle?`<span>${esc(subtitle)}</span>`:''}</div><div class="note-list">${g.notes.map(n=>`<a class="note-row" href="${noteUrl(n)}"><div><h4>${esc(n.title)}</h4>${n.description?`<p>${esc(n.description)}</p>`:''}</div><span class="read-label" aria-hidden="true">Read <span>↗</span></span></a>`).join('')}</div></section>`;
}).join('');
const pages=new Map();
pages.set('index.html',page({title:config.title,description:config.description,body:`<main id="main" class="home"><section class="introduction"><p class="eyebrow">${esc(config.role)}</p><h1>${esc(config.title)}</h1><div class="lede">${render(home.body,path.join(vault,'Home.md')).html}</div></section><section id="writing" aria-labelledby="writing-heading"><div class="section-title"><h2 id="writing-heading">The collection</h2><span>${notes.length} ${notes.length===1?'piece':'pieces'}</span></div>${rows||'<p>No writing has been published yet.</p>'}</section><section class="about" id="about"><h2>About</h2><div>${render(about.body,path.join(vault,'About.md')).html}</div></section></main>`}));
for(const n of notes){
 const rendered=render(n.body,n.file),related=notes.filter(r=>r.subject===n.subject&&r.slug!==n.slug);
 const toc=rendered.headings.length?`<aside class="toc"><nav aria-label="On this page"><p>On this page</p><ol>${rendered.headings.map(h=>`<li class="${h.depth?'subheading':''}"><a href="#${h.id}">${esc(h.title)}</a></li>`).join('')}</ol></nav></aside>`:'';
 const body=`<main id="main" class="reading"><div class="article-top"><a class="back-link" href="${url('/#writing')}">← All writing</a><div class="article-meta"><span>${esc(n.subject)}</span><span>${esc(n.status)}</span></div><h1>${esc(n.title)}</h1>${n.description?`<p class="article-summary">${esc(n.description)}</p>`:''}</div><div class="reading-grid"><article class="prose">${rendered.html}${related.length?`<div class="related"><p>Also in ${esc(n.subject.toLowerCase())}</p>${related.map(r=>`<a href="${noteUrl(r)}">${esc(r.title)} <span aria-hidden="true">→</span></a>`).join('')}</div>`:''}</article>${toc}</div></main>`;
 pages.set('writing/'+n.slug+'/index.html',page({title:n.title,description:n.description,body}));
}
pages.set('404.html',page({title:'Page not found',description:'This page could not be found.',body:`<main id="main" class="home"><h1>Page not found</h1><p>This page isn’t part of the collection.</p><p><a href="${url('/')}">Return to the writing</a></p></main>`}));
console.log(JSON.stringify({...reports,published:notes.map(n=>relative(n.file)),missingNotes:[...reports.missingNotes],missingImages:[...reports.missingImages]},null,2));
if(reports.mathErrors.length)throw Error('Math rendering failed. Fix the reported equations before publishing; the previous build has been preserved.');
// Regenerate the output completely so renamed or unpublished notes cannot linger.
if(output===path.parse(output).root||output===process.cwd()||output===vault||vault.startsWith(output+path.sep))throw Error('Unsafe output directory.');
fs.rmSync(output,{recursive:true,force:true});fs.mkdirSync(output,{recursive:true});
for(const [file,html]of pages){const target=path.join(output,file);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,html);}
for(const file of usedAssets){const target=path.join(output,'assets',relative(file));fs.mkdirSync(path.dirname(target),{recursive:true});fs.copyFileSync(file,target);}
fs.mkdirSync(path.join(output,'assets/katex'),{recursive:true});
fs.copyFileSync('node_modules/katex/dist/katex.min.css',path.join(output,'assets/katex/katex.min.css'));
fs.cpSync('node_modules/katex/dist/fonts',path.join(output,'assets/katex/fonts'),{recursive:true});
fs.copyFileSync('style.css',path.join(output,'style.css'));
fs.writeFileSync(path.join(output,'.nojekyll'),'');
