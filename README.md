# minthree

Minimal three.js sample scene: one rotating cube, no build step.

## Run

```sh
npm install
npm start
```

Then open the printed `http://localhost:...` address. The import map in
`index.html` loads three.js from jsDelivr, so the page also runs on any static
host. `npm install` gives Biome, TypeScript, the local server and the three.js
types. Keep the version in the import map equal to the one in `package.json`.

## Check

```sh
npm run ci
```

Runs Biome (lint, format, import and key sorting) and TypeScript in `checkJs`
mode. There is no build: `index.html` and `main.js` are served as-is.

## Layout

| File         | Role                                          |
| ------------ | --------------------------------------------- |
| `index.html` | Full-viewport canvas, import map, entry point. |
| `main.js`    | Scene, camera, cube, resize, frame loop.       |
