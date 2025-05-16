import { Environment ,useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { ProjectSection } from "./Section/Project/ProjectSection";
import { HomeSection } from "./Section/Home/HomeSection";
import { SkillSection } from "./Section/Skill/SkillSection";
import { ContactSection } from "./Section/Contact/ContactSection";

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
        <group ref={sceneContainer}>
     <HomeSection/>
       <SkillSection SECTIONS_DISTANCE={SECTIONS_DISTANCE}/>
       <ProjectSection SECTIONS_DISTANCE={SECTIONS_DISTANCE}/>
       <ContactSection SECTIONS_DISTANCE={SECTIONS_DISTANCE}/>
      </group>
      </mesh>
    </>
  );
};
