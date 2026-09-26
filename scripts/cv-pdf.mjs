import PDFDocument from 'pdfkit';
import MarkdownIt from 'markdown-it';

// The same Markdown drives the web CV and the downloadable PDF.
export function cvPdf(source, name) {
 return new Promise((resolve,reject)=>{
  const doc=new PDFDocument({size:'A4',margins:{top:36,bottom:36,left:44,right:44},info:{Title:`${name} — Curriculum vitae`,Author:name},bufferPages:true});
  doc.registerFont('Body',new URL('./fonts/DejaVuSans.ttf',import.meta.url).pathname);
  doc.registerFont('Bold',new URL('./fonts/DejaVuSans-Bold.ttf',import.meta.url).pathname);
  const chunks=[];doc.on('data',c=>chunks.push(c));doc.on('error',reject);doc.on('end',()=>resolve(Buffer.concat(chunks)));
  const plain=inline=>(inline.children||[]).map(t=>['text','code_inline'].includes(t.type)?t.content:['softbreak','hardbreak'].includes(t.type)?'\n':'').join('').replace(/[–—]/g,'-').replace(/’/g,"'").replace(/·/g,' | ');
  const tokens=new MarkdownIt().parse(source,{});
  doc.font('Bold').fontSize(23).fillColor('#173c68').text(name);
  doc.font('Body').fontSize(9).fillColor('#5c6876').text('CURRICULUM VITAE');doc.moveDown(.6);
  for(let i=0;i<tokens.length;i++){
   const t=tokens[i];if(!['heading_open','paragraph_open'].includes(t.type))continue;
   const inline=tokens[i+1];if(inline?.type!=='inline')continue;
   const text=plain(inline),heading=t.type==='heading_open',major=heading&&Number(t.tag.slice(1))<=2;
   const size=major?11:heading?10:9.5;
   doc.font(heading?'Bold':'Body').fontSize(size).fillColor(major?'#173c68':'#202934');
   const h=doc.heightOfString(text,{lineGap:1.2});
   if(doc.y+h+(heading?40:0)>doc.page.height-40)doc.addPage();
   if(heading)doc.moveDown(major?.6:.25);
   doc.text(text,{lineGap:1.2});doc.moveDown(heading?.25:.4);
  }
  const range=doc.bufferedPageRange();
  for(let p=0;p<range.count;p++){doc.switchToPage(p);doc.font('Body').fontSize(8).fillColor('#5c6876').text(`${name}  /  ${p+1}`,44,doc.page.height-27,{lineBreak:false});}
  doc.end();
 });
}
