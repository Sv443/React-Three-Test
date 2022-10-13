import THREE, { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { Canvas } from "@react-three/fiber";
import { Cube } from "./components/Cube";

export function App() {
  // const scene = new Scene();
  // const camera = new PerspectiveCamera(
  //   75,
  //   window.innerWidth / window.innerHeight,
  //   0.1,
  //   1000
  // );

  return (
    <>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Cube position={[-3, 0, 0]} />
        <Cube position={[3, 0, 0]} />
      </Canvas>
    </>
  );
}
