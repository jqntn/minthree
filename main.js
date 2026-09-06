import {
  BoxGeometry,
  Mesh,
  MeshNormalMaterial,
  PerspectiveCamera,
  Scene,
  WebGPURenderer,
} from "three/webgpu";

const FIELD_OF_VIEW = 70;
const NEAR_PLANE = 0.1;
const FAR_PLANE = 100;
const CAMERA_DISTANCE = 3;
const TURNS_PER_SECOND = 0.1;
const MILLISECONDS_PER_SECOND = 1000;

const canvas = document.querySelector("canvas");
if (!(canvas instanceof HTMLCanvasElement)) {
  throw new Error("missing canvas element");
}

const scene = new Scene();

const camera = new PerspectiveCamera(FIELD_OF_VIEW, 1, NEAR_PLANE, FAR_PLANE);
camera.position.z = CAMERA_DISTANCE;

const cube = new Mesh(new BoxGeometry(), new MeshNormalMaterial());
scene.add(cube);

const renderer = new WebGPURenderer({ alpha: false, antialias: true, canvas });
await renderer.init();

const resize = () => {
  const { clientHeight, clientWidth } = canvas;
  renderer.setPixelRatio(devicePixelRatio);
  renderer.setSize(clientWidth, clientHeight, false);
  camera.aspect = clientWidth / clientHeight;
  camera.updateProjectionMatrix();
};

const observer = new ResizeObserver(resize);
observer.observe(canvas);

renderer.setAnimationLoop((time) => {
  const turns = (time / MILLISECONDS_PER_SECOND) * TURNS_PER_SECOND;
  cube.rotation.set(turns * Math.PI, turns * 2 * Math.PI, 0);
  renderer.render(scene, camera);
});
