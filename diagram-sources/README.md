# Diagram sources

TikZ and tikz-cd sources for the SVGs in `vault/Attachments/`. Each `.tex` file is self-contained. To change a diagram, edit its source and rebuild the SVG:

```bash
pdflatex name.tex && pdftocairo -svg name.pdf ../vault/Attachments/name.svg
```

`_pre.tex` and `_precd.tex` are the shared preambles the figures were written with: the colors, point and arrow styles, and tikz-cd settings.
