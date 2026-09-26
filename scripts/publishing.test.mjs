import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';

test('Obsidian editing, publication selection, links, and removal work together',()=>{
 const temp=fs.mkdtempSync(path.join(os.tmpdir(),'math-site-'));
 try{
  const vault=path.join(temp,'vault'),output=path.join(temp,'site');
  fs.mkdirSync(path.join(vault,'Writing/Nested'),{recursive:true});fs.mkdirSync(path.join(vault,'Attachments'));
  fs.writeFileSync(path.join(vault,'Home.md'),'---\nname: Test Author\ntitle: Test site\n---\nHello.\n');
  fs.writeFileSync(path.join(vault,'About.md'),'This About paragraph was edited in Obsidian.');
  fs.writeFileSync(path.join(vault,'Attachments','example.svg'),'<svg xmlns="http://www.w3.org/2000/svg"/>');
  fs.writeFileSync(path.join(vault,'Attachments','unused.png'),'unused attachment');
  const alpha=path.join(vault,'Writing/Alpha.md');
  fs.writeFileSync(alpha,'---\npublish: true\nslug: stable-address\n---\n# Definition\n$x^2$\n\n$$\\begin{aligned}a&=b\\\\c&=d\\end{aligned}$$\n\n[[Beta#Details|Read Beta]] and [Beta](Nested/Beta.md#Details). [[Draft]]\n\n![[example.svg]]\n\n> [!note] A callout\n> Precise explanation.\n\nA footnote.[^1]\n\n[^1]: More detail.\n');
  fs.writeFileSync(path.join(vault,'Writing/Nested/Beta.md'),'---\npublish: true\n---\n# Details\n[[Alpha|Return]]\n');
  fs.writeFileSync(path.join(vault,'Writing/Draft.md'),'---\npublish: false\n---\nPRIVATE_DRAFT_TEXT');
  fs.writeFileSync(path.join(vault,'Writing/Unmarked.md'),'UNMARKED_TEXT');
  const env={...process.env,CONTENT_DIR:vault,OUTPUT_DIR:output,BASE_PATH:'/math'};
  const build=()=>spawnSync(process.execPath,['build.mjs'],{env,encoding:'utf8'});
  let result=build();assert.equal(result.status,0,result.stdout+result.stderr);
  const page=fs.readFileSync(path.join(output,'writing/stable-address/index.html'),'utf8');
  assert.match(page,/href="\/math\/writing\/beta\/#details"/);
  assert.match(page,/class="callout"/);assert.match(page,/class="footnotes"/);assert.match(page,/class="katex"/);
  assert.match(page,/src="\/math\/assets\/Attachments\/example.svg"/);
  assert.ok(!fs.existsSync(path.join(output,'writing/draft')));assert.ok(!fs.existsSync(path.join(output,'writing/unmarked')));
  assert.ok(!fs.existsSync(path.join(output,'assets/Attachments/unused.png')));
  assert.match(fs.readFileSync(path.join(output,'index.html'),'utf8'),/This About paragraph was edited in Obsidian/);
  const check=spawnSync(process.execPath,['scripts/check.mjs'],{env,encoding:'utf8'});assert.equal(check.status,0,check.stdout+check.stderr);
  // Removing a published note removes its output on the next successful build.
  fs.writeFileSync(alpha,fs.readFileSync(alpha,'utf8').replace('publish: true','publish: false'));
  result=build();assert.equal(result.status,0,result.stderr);assert.ok(!fs.existsSync(path.join(output,'writing/stable-address')));
  // Duplicate URLs and unsupported math must fail before replacing a good build.
  fs.writeFileSync(path.join(vault,'Writing/Collision.md'),'---\npublish: true\nslug: beta\n---\nCollision');
  assert.notEqual(build().status,0);fs.unlinkSync(path.join(vault,'Writing/Collision.md'));
  const previous=fs.readFileSync(path.join(output,'index.html'),'utf8');
  fs.writeFileSync(path.join(vault,'Writing/Bad math.md'),'---\npublish: true\n---\n$\\unknowncommand{x}$');
  assert.notEqual(build().status,0);assert.equal(fs.readFileSync(path.join(output,'index.html'),'utf8'),previous);
 }finally{fs.rmSync(temp,{recursive:true,force:true});}
});

test('portfolio pages, Markdown links, and CV PDF follow edits at a project base path',()=>{
 const temp=fs.mkdtempSync(path.join(os.tmpdir(),'portfolio-'));
 try{
  const vault=path.join(temp,'vault'),output=path.join(temp,'site');fs.mkdirSync(vault);
  fs.writeFileSync(path.join(vault,'Home.md'),'---\nname: Portfolio Author\n---\n[[CV]] and [Projects](Projects.md).');
  fs.writeFileSync(path.join(vault,'About.md'),'Original about.');
  fs.writeFileSync(path.join(vault,'CV.md'),'## Education\nPhysics 2026');
  fs.writeFileSync(path.join(vault,'Projects.md'),'## Raytracing\n[[CV#Education]]');
  const env={...process.env,CONTENT_DIR:vault,OUTPUT_DIR:output,BASE_PATH:'/Professional-Writing'};
  const build=()=>spawnSync(process.execPath,['build.mjs'],{env,encoding:'utf8'});
  let r=build();assert.equal(r.status,0,r.stdout+r.stderr);
  const pdf=path.join(output,'Matthew-Burger-CV.pdf'),previous=fs.readFileSync(pdf);
  assert.equal(previous.subarray(0,5).toString(),'%PDF-');
  assert.match(fs.readFileSync(path.join(output,'cv/index.html'),'utf8'),/Physics 2026/);
  assert.match(fs.readFileSync(path.join(output,'index.html'),'utf8'),/href="\/Professional-Writing\/projects\/"/);
  const check=spawnSync(process.execPath,['scripts/check.mjs'],{env,encoding:'utf8'});assert.equal(check.status,0,check.stdout+check.stderr);
  fs.writeFileSync(path.join(vault,'CV.md'),'## Education\nUpdated qualification');
  r=build();assert.equal(r.status,0,r.stderr);
  assert.match(fs.readFileSync(path.join(output,'cv/index.html'),'utf8'),/Updated qualification/);
  assert.notDeepEqual(fs.readFileSync(pdf),previous);
 }finally{fs.rmSync(temp,{recursive:true,force:true});}
});
