import { Canvas } from "@react-three/fiber";
import Cube3D from "../atoms/Cube3D.jsx";
import Cylinder3d from "../atoms/Cylinder3D.jsx";

const GeometricCanvas = () => {
  return (
    <Canvas width="100%" height="100%">
      <pointLight position={[10, 10, 10]} />
      <ambientLight />
      {/* bonbon full */}
      <Cylinder3d color="#5c68e6" position={[3, -2, 0]} />
      <ambientLight color="pink" intensity={1.5} />
      <pointLight position={[10, 10, 10]} />
      <Cylinder3d color="#0c8181" position={[-2.2, 3, 0]} wireframe={true} />
      <Cylinder3d position={[2.5, 1, 0]} wireframe={true} />
      <ambientLight color="#6200ff" />
      <pointLight position={[0, 20, 10]} intensity={1.5} />
      <Cylinder3d position={[-1.2, -2, 0]} color="aqua" wireframe={true} />
      <Cylinder3d position={[-4.6, -5, 0]} wireframe={true} />
      {/* Barebone cube */}
      <Cube3D position={[0, 0.5, 0]} wireframe={true} />
    </Canvas>
  );
};

export default GeometricCanvas;
