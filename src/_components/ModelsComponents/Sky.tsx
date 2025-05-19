import { useGLTF } from "@react-three/drei";


// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function Sky() {
  const sky = useGLTF("/models/sky.glb");

  return (
    <mesh >
      <primitive object={sky.scene} />
    </mesh>
  );
}