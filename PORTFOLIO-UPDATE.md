# Publish the portfolio update

Copy the contents of this update into your existing `mathematical-writing-site` folder, merging folders and replacing matching files. Keep using the existing Git repository and Obsidian vault.

The update adds:
- `vault/CV.md`: the web CV and the source for the downloadable PDF.
- `vault/Projects.md`: project descriptions.
- Projects and CV links in the site navigation.
- Automatic PDF generation during every website build.

Your existing Home, About, writing, Git history, and Obsidian settings are not included in this update and are not replaced.

From the existing project folder, run:

```bash
git add build.mjs style.css package.json package-lock.json scripts/cv-pdf.mjs scripts/fonts scripts/package.py scripts/publishing.test.mjs vault/CV.md vault/Projects.md PORTFOLIO-UPDATE.md
git commit -m "Add projects and CV pages"
git push
```

GitHub Actions installs the new PDF dependency automatically. Wait for the green check, then visit:
- https://mattheon1.github.io/Professional-Writing/projects/
- https://mattheon1.github.io/Professional-Writing/cv/

For future edits, change CV or Projects in Obsidian and commit-and-sync. The PDF is rebuilt from CV.md automatically. No separate PDF editing is necessary. The CV PDF supports headings, paragraphs, and simple inline text formatting; use the website for mathematical notation and figures.

Optional local checks: `npm ci`, `npm test`, `npm run build`, `npm run check`, then `npm run preview`.
