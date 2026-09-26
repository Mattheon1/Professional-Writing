"""Export only portable site source, never Site identity or credentials."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
root = Path(__file__).resolve().parents[1]
out = root / 'exports' / 'mathematical-writing-site.zip'
out.parent.mkdir(exist_ok=True)
files = [root / name for name in ('README.md', 'package.json', 'package-lock.json', 'build.mjs', 'style.css')]
for directory in ('scripts', '.github/workflows', 'vault'):
    for file in (root / directory).rglob('*'):
        if not file.is_file() or file.is_symlink():
            continue
        relative = file.relative_to(root).as_posix()
        if '/.obsidian/' in relative and relative not in ('vault/.obsidian/app.json','vault/.obsidian/templates.json'):
            continue
        if file.suffix.lower() in ('.md','.png','.jpg','.jpeg','.gif','.svg','.webp','.avif','.pdf','.mjs','.py','.yml','.json','.ttf','.txt'):
            files.append(file)
export_ignore = '''node_modules/
dist/
exports/
.openai/
.sites-runtime/
.env
.env.*
vault/.obsidian/*
!vault/.obsidian/app.json
!vault/.obsidian/templates.json
vault/.trash/
.DS_Store
'''
with ZipFile(out, 'w', ZIP_DEFLATED) as archive:
    prefix = 'mathematical-writing-site/'
    for file in sorted(set(files)):
        archive.write(file, prefix + file.relative_to(root).as_posix())
    archive.writestr(prefix + '.gitignore', export_ignore)
print(out)
