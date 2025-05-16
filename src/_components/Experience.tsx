import { Environment ,useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Star from "./Star";
import { useRef } from "react";
import * as THREE from "three";
import SectionTitle from "./SectionTitle/SectionTitle";

const SECTIONS_DISTANCE = 10;


export default function Experience() {
  const sceneContainer = useRef<THREE.Group | null>(null);
  const scrollData = useScroll();
  useFrame(() => {
    if (sceneContainer.current) {
      sceneContainer.current.position.z =
        -scrollData.offset * SECTIONS_DISTANCE * (scrollData.pages - 1);
    }
  });
    return (
    <>
      <Environment preset="sunset" />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="white" />
        <Star position={[1, 1, 1]} />
        <group ref={sceneContainer}>
        {/* HOME */}
        <group>
          <SectionTitle position-x={0.5}>HOME</SectionTitle>
        </group>
        {/* SKILLS */}
        <group position-z={SECTIONS_DISTANCE}>
          <SectionTitle position-x={0.5}>SKILLS</SectionTitle>
        </group>
        {/* PROJECTS */}
        <group position-z={2 * SECTIONS_DISTANCE}>
          <SectionTitle position-x={0.5}>PROJECTS</SectionTitle>
        </group>
        {/* CONTACT */}
        <group position-z={3 * SECTIONS_DISTANCE}>
          <SectionTitle position-x={0.5}>CONTACT</SectionTitle>
        </group>
      </group>
      </mesh>
    </>
  );
};
