# dig

Minimal three.js sample scene: one rotating cube, no build step.

## Run

```sh
npm install
npm start
```

Then open the printed `http://localhost:...` address. The import map in
`index.html` points at `node_modules/three/build/three.module.js`, so the
server must also serve `node_modules`. `npm start` does that.

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
