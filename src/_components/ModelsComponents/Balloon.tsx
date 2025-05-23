/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/Balloon.glb -o src/components/Balloon.jsx -r public
Balloon by Poly by Google [CC-BY] (https://creativecommons.org/licenses/by/3.0/) via Poly Pizza (https://poly.pizza/m/d1gDDhM7pTf)
*/

import { useGLTF } from "@react-three/drei";
import type { JSX } from "react";
import * as THREE from "three";

export function Balloon(props: JSX.IntrinsicElements["group"] & { color?: THREE.Color }) {
  const { nodes, materials } = useGLTF("/models/Balloon.glb") as unknown as {
    nodes: {
      "Balloon007": THREE.Mesh;
    };
    materials: {
      phong1SG: THREE.Material;
    };
  };
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Balloon007.geometry} material={materials.phong1SG}>
        <meshStandardMaterial {...materials.phong1SG} color={props.color || "white"} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/Balloon.glb");
