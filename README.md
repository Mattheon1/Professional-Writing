# Matthew Burger — Mathematical Writing

A personal mathematics website whose content is edited in Obsidian. The approved design and four supplied pieces are included, along with an editable About note and a GitHub Pages workflow.

## Current status

The source and publishing workflow have been prepared and checked locally. A private preview is hosted separately through ChatGPT Sites. This package is not yet connected to a repository in your GitHub account, and it has not installed anything on your computer. Publishing from your Obsidian requires the one-time setup below. GitHub updates will publish to the GitHub Pages address; they do not update the separate ChatGPT preview.

## First: inspect the writing

Extract the project ZIP. In Obsidian, select **Open folder as vault** and choose the `vault` folder inside this project. Read **Start Here**. You can edit **About**, **Home**, and the notes in **Writing** immediately. This alone does not publish changes.

## One-time publishing setup

The guided setup will connect a GitHub repository and your local Obsidian folder. You need a GitHub account and Git on your desktop computer; the exact installation steps depend on your operating system.

1. Create a repository for this website in your GitHub account. Decide its visibility before uploading. GitHub Pages on GitHub Free uses a public repository; public repository contents and history are visible, including notes whose `publish` property is false. This package is a dedicated publishing vault, so do not replace it with your entire personal vault.
2. Put this package's source files at the repository root, including `.github/workflows/publish.yml`, and use `main` as the default branch. The downloadable archive excludes the private ChatGPT Site identity and Git history.
3. In the repository, choose **Settings → Pages → Build and deployment → Source → GitHub Actions**. The supplied workflow builds the site, checks its local links, and deploys only on success. The first push before Pages is enabled can fail; after enabling it, run **Actions → Publish mathematical writing → Run workflow**.
4. Clone that repository to your computer and open its `vault` subfolder in Obsidian. If you edited the downloaded vault before cloning, copy those edited notes into this clone. Use this connected clone for future edits.
5. Authenticate Git to GitHub on your computer and verify one successful push. The GitHub connection in ChatGPT does not authenticate Git on your computer. Do not paste account passwords or access tokens into a chat or into the repository.
6. In this Obsidian vault, install and enable the community plugin **Git**. Keep automatic publishing off initially. Ensure pushing is enabled for **Git: Commit-and-sync**. The desktop plugin supports a vault within a repository; mobile setup is different and not covered here.
7. Make a small change to **About**, run **Git: Commit-and-sync**, wait for a successful GitHub Actions run, and inspect the resulting Pages URL. This is the end-to-end check that completes setup.

No Node installation is required on your computer for the normal edit-and-publish routine: GitHub runs the builder. Git must be available locally for the Obsidian Git plugin.

## Everyday routine

1. Edit **About**, **Home**, or articles in **Writing**.
2. For a new article, use the template in `_Templates`, add its images to **Attachments**, and check its **publish** property when ready.
3. Run **Git: Commit-and-sync** to send the changes to GitHub.
4. Wait for the website build to succeed. The Pages URL remains the same.

There is no need to edit JSON or website code to add an article. Subjects, ordering, labels, and summaries are Obsidian properties. Existing articles have stable slugs so their addresses can survive filename changes. To remove an article from the website, uncheck **publish** and publish your changes. This does not erase GitHub history.

## Optional local website preview

With Node.js 22 or later installed, open a terminal in the project folder and run:

```bash
npm ci
npm run build
npm run preview
```

Open the local address printed by the preview command. Run `npm run build` again after changing notes to refresh this local preview. Stop the server with Ctrl+C. These commands do not publish anything.

## Technical maintenance

- `vault/Home.md`: identity properties and homepage introduction.
- `vault/About.md`: About body as ordinary Markdown.
- `vault/Writing/**/*.md`: automatically discovered articles; only `publish: true` is included.
- `vault/Attachments/`: static attachments; the website copies only those referenced by published content.
- `style.css`: visual design.
- `build.mjs`: Markdown-to-HTML generator.
- `.github/workflows/publish.yml`: GitHub Pages build and deploy workflow.

`BASE_PATH` supports a Pages project URL as well as a root domain. GitHub's configure-pages action supplies the path automatically. A full rebuild removes stale HTML when articles are unpublished or moved. Invalid math or duplicate slugs stop deployment, preserving the last published version. The build accepts `CONTENT_DIR` and `OUTPUT_DIR` for isolated checks.

Run `npm test` for the publishing integration checks and `npm run check` after a build to validate local links and assets. `npm run package` makes a clean distribution ZIP under `exports/`; it excludes Git metadata, the ChatGPT Site identity, credentials, installed plugins, dependencies, and generated HTML.

## Known content gaps

The four Excalidraw SVGs referenced by **Affine Spaces** were not supplied. Missing figures are marked in the article. Links to notes outside this collection appear as text. The uploaded article bodies are unchanged; the About copy remains a draft for the owner to personalize.

## Documentation

- GitHub Pages custom workflows: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- Obsidian Git setup: https://publish.obsidian.md/git-doc/Getting+Started
- Obsidian Git authentication: https://publish.obsidian.md/git-doc/Authentication
- KaTeX supported functions: https://katex.org/docs/supported.html

These links are guidance, not dependencies of the published website.
