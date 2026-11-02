# BPMN layout

A small web page that turns a logic-only BPMN 2.0 file into a laid-out diagram, including pools, lanes and message flows. It previews the result and lets you download it as BPMN or SVG.

Everything runs in the browser. Files are never uploaded to a server.

## Files

- `index.html`: the page and all of its logic.
- `vendor.js`: the layout engine ([bpmn-auto-layout](https://github.com/bpmn-io/bpmn-auto-layout) 2.0.0-alpha.2) and the diagram viewer ([bpmn-js](https://github.com/bpmn-io/bpmn-js) 18.31.0), bundled into one file.
- `vendor.css`: the viewer's styles.
- `build/`: what's needed to rebuild `vendor.js` and `vendor.css`. You only need this to update the libraries.

## Run it locally

Opening `index.html` directly from your file system works in most browsers. If it doesn't, start a small local server in this folder:

```
npx serve .
```

## Host it on GitHub Pages (free)

1. Push this folder to a GitHub repository.
2. In the repository, go to Settings, then Pages.
3. Under "Build and deployment", choose "Deploy from a branch", select `main` and `/ (root)`, and save.
4. After a minute, the page is live at `https://<your-username>.github.io/<repository-name>/`.

## Update the libraries

```
cd build
npm install
npm run build
```

To use newer versions, change the version numbers in `build/package.json` first, then run the two commands above. Test the page with a few of your own files before pushing.

## Notes

- The layout engine is an alpha version. Expect occasional overlapping lines that need a quick manual fix in a modeler.
- The bpmn.io logo in the corner of the preview is required by the bpmn-js license and must stay visible.
