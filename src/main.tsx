import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { WebGLRenderer, Scene, PerspectiveCamera } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { App } from "./App";
import { AppDecorator } from "./AppDecorator";
import { createTheme } from "./theme";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <AppDecorator {...{ createTheme }}>
      <App />
    </AppDecorator>
  </StrictMode>
);

const renderer = new WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
window.addEventListener("resize", () =>
  renderer.setSize(window.innerWidth, window.innerHeight)
);

// document.body.appendChild(renderer.domElement);

// const scene = new Scene();

// const camera = new PerspectiveCamera(
//   45,
//   window.innerWidth / window.innerHeight,
//   1,
//   10000
// );

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.addEventListener("change", animate);

// //controls.update() must be called after any manual changes to the camera's transform
// camera.position.set(0, 20, 100);
// controls.update();

// function animate() {
//   requestAnimationFrame(animate);

//   // required if controls.enableDamping or controls.autoRotate are set to true
//   controls.update();

//   renderer.render(scene, camera);
// }
