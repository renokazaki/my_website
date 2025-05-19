import SectionTitle from "../SectionTitle"
import CouchSmall from "../../ModelsComponents/CouchSmall"
import Lamp from "../../ModelsComponents/Lamp"
import { useMobile } from "../../../hooks/useMobile"
import { Cloud, PresentationControls } from "@react-three/drei"

export const SkillSection = ({SECTIONS_DISTANCE}: {SECTIONS_DISTANCE: number}) => {
  const {isMobile} = useMobile();
  return (
    <>
     {/* SKILLS */}
              <Cloud
                position={[8, 0, 0]} 
                segments={10} 
                speed={1} 
                opacity={0.3}        // opacityを上げる
                seed={10}   
              />
     <group position-z={SECTIONS_DISTANCE}>
          <group position-x={-2}>
          <PresentationControls>
            <SectionTitle position-x={isMobile ? 1.3 : 0.5}
            position-y={isMobile ? 0 : 0.5} rotation-y={isMobile ?0 :Math.PI / 6}>
              SKILLS
            </SectionTitle>
            </PresentationControls>
            <PresentationControls>
            <CouchSmall
              scale={0.4}
              position-z={0}
              position-x={-0.2}
              rotation-y={Math.PI / 3}
            />            
            </PresentationControls>
       
            <PresentationControls>
            <Lamp
              position-z={0.6}
              position-x={-0.4}
              position-y={-0.8}
              rotation-y={-Math.PI}
            />
            </PresentationControls>
          </group>
    
        </group>
    </>
  )
}
