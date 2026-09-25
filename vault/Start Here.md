# Your publishing vault

This folder is for the writing you want to share on your website. It is separate from your personal Obsidian vault.

## What you edit

| Note or folder | What it controls |
| --- | --- |
| [[About]] | Your About section. Edit the paragraphs directly. |
| [[Home]] | The homepage introduction and your name, role, and site title. |
| Writing | Articles. Each Markdown file can become its own webpage. |
| Attachments | Images and PDFs used by your writing. |
| _Templates | A starting point for new articles. These files are never website articles. |

Your four existing pieces are already prepared. Their prose has not been rewritten.

## Editing an existing article

Open it from the Writing folder and edit normally. You can use `$...$` for inline mathematics, `$$...$$` for displayed mathematics, and `[[Note name|Link text]]` for links between published notes.

In the properties at the top:

- **publish:** checked means this article is included in the website the next time you publish changes.
- **title:** the displayed title; leave blank to use the filename.
- **slug:** the stable end of the webpage address, such as `affine-spaces`. Keep this unchanged when you rename a published article so existing links still work.
- **subject:** the homepage group it belongs to. New subject names create new groups automatically.
- **status:** a label such as “Working note”, “Essay”, or “Earlier writing”.
- **description:** the short explanation shown on the homepage and article page.
- **order:** smaller numbers appear first.

## Adding an article

1. Make a new note in Writing, or copy in a note from your other vault.
2. Use the New note template, or add a **publish** checkbox property yourself. New notes without `publish: true` do not appear on the website.
3. Fill in the title, subject, and short description if you want them.
4. Copy any images the note needs into Attachments. Ordinary image embeds like `![[my-diagram.png]]` work. Export Excalidraw diagrams to SVG or PNG before adding them.
5. Check **publish** when the note is ready to appear.
6. Run **Git: Commit-and-sync** after the one-time GitHub connection has been configured, with pushing enabled. GitHub then builds and publishes the site.

A note's **publish** checkbox controls its appearance on the website. It does not hide its source in GitHub. If the repository is public, all committed notes and history can be read there, including unchecked drafts. Keep private material in your personal vault.

## Reviewing updates

Obsidian’s reading view previews the note's Markdown. After publishing, use your website link to inspect its website layout. You can also preview the whole site locally using the optional instructions in the project README.

If a build fails, the last successful website remains live. Open the GitHub repository’s Actions tab for the explanation. A common cause is an unsupported LaTeX command; the report identifies the note and expression. Two published notes with the same slug also cause a clear error.

## What is supported

This custom site supports ordinary Markdown, tables, footnotes, mathematical notation supported by KaTeX, basic Obsidian wikilinks and aliases, heading links, static image/PDF attachments, and basic callout boxes. Obsidian plugins, Dataview queries, Canvas files, live Excalidraw documents, embedded notes, and block-reference embeds are not executed by the website. Some of these can be exported to a supported format.

## What is not connected yet

The files in this package are prepared, but opening them does not create a GitHub repository, install a plugin, or publish a website. The one-time account connection, repository setup, and local Git authentication still need to be completed. See the project README for the setup sequence.
