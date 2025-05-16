import { Environment } from "@react-three/drei";
import Star from "./Star";

export default function Experience() {
  return (
    <>
      <Environment preset="sunset" />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="white" />
        <Star position={[1, 1, 1]} />
      </mesh>
    </>
  );
};
