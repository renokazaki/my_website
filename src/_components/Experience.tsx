import { Environment } from "@react-three/drei";

export default function Experience() {
  return (
    <>
      <Environment preset="sunset" />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="white" />
      </mesh>
    </>
  );
};
