import THREE from "three";
import { useRef, useState } from "react";
import { useFrame, ThreeElements } from "@react-three/fiber";

export function Cube(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovering, setHovering] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((_state, _deltaTime) => {
    // console.log("FPS:", Math.floor(1000 / _deltaTime));
    // console.log(ref.current);
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 2 : 1}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovering(true)}
      onPointerOut={() => setHovering(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovering ? "hotpink" : "orange"} />
    </mesh>
  );
}
