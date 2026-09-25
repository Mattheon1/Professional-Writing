import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(process.env.OUTPUT_DIR||'dist'),base=(process.env.BASE_PATH||'').replace(/\/$/,'');
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
const htmlFiles=walk(root).filter(f=>f.endsWith('.html'));
const documents=new Map(htmlFiles.map(f=>[f,fs.readFileSync(f,'utf8')]));
let checked=0;const failures=[];
for(const [file,html] of documents){
 if((html.match(/<h1(?:>|\s)/g)||[]).length!==1)failures.push(`${file}: expected one page title.`);
 for(const match of html.matchAll(/(?:href|src)="([^"<>]+)"/g)){
  const link=match[1].replace(/&amp;/g,'&');if(/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(link))continue;
  const [raw,anchor]=link.split('#');let target;
  if(!raw)target=file;
  else if(raw.startsWith('/')){
   if(base&&raw!==base&&!raw.startsWith(base+'/')){failures.push(`${file}: link missing base path: ${link}`);continue;}
   target=path.join(root,decodeURIComponent(base?raw.slice(base.length):raw));
  }else target=path.resolve(path.dirname(file),decodeURIComponent(raw));
  if(fs.existsSync(target)&&fs.statSync(target).isDirectory())target=path.join(target,'index.html');
  if(!fs.existsSync(target)){failures.push(`${file}: missing target ${link}`);continue;}
  if(anchor&&documents.has(target)&&!documents.get(target).includes(`id="${decodeURIComponent(anchor)}"`))failures.push(`${file}: missing anchor ${link}`);
  checked++;
 }
}
if(failures.length){console.error(failures.join('\n'));process.exit(1);}
console.log(`Checked ${htmlFiles.length} pages and ${checked} local links/assets.`);
