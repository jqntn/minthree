# minthree

Minimal three.js sample scene: one rotating cube on WebGPU, no build step.

## Run

```sh
npm install
npm start
```

Then open the printed `http://localhost:...` address. The import map in
`index.html` loads the `three/webgpu` build from jsDelivr, so the page also
runs on any static host. `npm install` gives Biome, TypeScript, the local
server and the three.js types. Keep the version in the import map equal to the
one in `package.json`.

WebGPU needs a secure context, so `localhost` over HTTP or any HTTPS origin
works. `WebGPURenderer` starts a WebGL2 backend when the browser gives no
WebGPU adapter.

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
| `main.js`    | Renderer, scene, camera, cube, frame loop.     |
