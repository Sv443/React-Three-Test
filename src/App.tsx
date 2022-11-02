import THREE, { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { Canvas } from "@react-three/fiber";
import { Cube } from "./components/Cube";
import { useState } from "react";
import { Box } from "@mui/system";

export function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading ? (
        <Box>Loading...</Box>
      ) : (
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Cube position={[-3, 0, 0]} />
          <Cube position={[3, 0, 0]} />
          <mesh>
            <sphereGeometry />
            <meshStandardMaterial color="red" />
          </mesh>
        </Canvas>
      )}
    </>
  );
}
