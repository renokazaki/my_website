import { Environment ,useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { HomeSection, SkillSection, ProjectSection, ContactSection } from "./Section/index";
import { config } from "../config";

const SECTIONS_DISTANCE = 10;


export default function Experience() {
  const sceneContainer = useRef<THREE.Group | null>(null);
  const scrollData = useScroll();

  useEffect(() => {
    const handleHashChange = () => {
      const sectionIndex = config.sections.indexOf(
        window.location.hash.replace("#", "")
      );
      if (sectionIndex !== -1) {
        scrollData.el.scrollTo(
          0,
          (sectionIndex / (config.sections.length - 1)) *
            (scrollData.el.scrollHeight - scrollData.el.clientHeight)
        );
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);


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
        </mesh>

        {/* Section */}
        <group ref={sceneContainer}>
       <HomeSection/>
       <SkillSection SECTIONS_DISTANCE={SECTIONS_DISTANCE}/>
       <ProjectSection SECTIONS_DISTANCE={SECTIONS_DISTANCE}/>
       <ContactSection SECTIONS_DISTANCE={SECTIONS_DISTANCE}/>
      </group>
    </>
  );
};
