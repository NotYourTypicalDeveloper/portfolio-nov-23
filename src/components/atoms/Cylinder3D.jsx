import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Cylinder3d = (props) => {
  // This reference gives us direct access to the THREE.Mesh object
  const meshRef = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += 0.01));

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={clicked ? 0.8 : 0.6}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <cylinderGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        wireframe={props.wireframe}
        color={hovered ? "hotpink" : "orange"}
      />
    </mesh>
  );
};

export default Cylinder3d;
