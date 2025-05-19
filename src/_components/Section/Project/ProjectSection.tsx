import SectionTitle from "../SectionTitle"
import Monitor from "../../ModelsComponents/Monitor"
import { PresentationControls, RoundedBox } from "@react-three/drei"
import { useMobile } from "../../../hooks/useMobile"
import { Cloud } from "@react-three/drei"
export const ProjectSection = ({SECTIONS_DISTANCE}: {SECTIONS_DISTANCE: number}) => {
  const {isMobile} = useMobile();


  return (
    <>
   {/* PROJECTS */}
   <Cloud
                   position={[8, -5, 10]} 
                   segments={10} 
                   speed={1} 
                   opacity={0.3}        // opacityを上げる
                   seed={3}             // 形状の種（変更すると形が変わる）
                 />
   <group position-z={SECTIONS_DISTANCE - 2.5}>
          <group position-x={1.5}>
          <PresentationControls>
            <SectionTitle
              position-x={isMobile?-2.5:-0.5}
              rotation-y={isMobile?0:6}
              position-z={isMobile?-3:1}
            >
              PROJECTS
            </SectionTitle>
            </PresentationControls>
            <group
              position-x={0.5}
              position-z={0}
              rotation-y={-Math.PI / 6}
              scale={0.8}
            >
              <PresentationControls>
              <Monitor
                scale={0.02}
                position-y={1}
                rotation-y={-Math.PI / 2}
                position-z={-1}
              />
              <RoundedBox scale-x={2} position-y={0.5} position-z={-1}>
                <meshStandardMaterial color="white" />
              </RoundedBox>
              </PresentationControls>
            </group>
          </group>
        </group>
        </>
  )
}
