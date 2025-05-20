import SectionTitle from "../SectionTitle"
import ParkBench from "../../ModelsComponents/ParkBench"
import Mailbox from "../../ModelsComponents/Mailbox"
import { Cloud, Float, PresentationControls } from "@react-three/drei"
import { useMobile } from "../../../hooks/useMobile"
import { Balloon } from "../../ModelsComponents/Balloon"
import * as THREE from "three"

export const ContactSection = ({SECTIONS_DISTANCE}: {SECTIONS_DISTANCE: number}) => {
  const {isMobile} = useMobile();
  return (
    <>
    {/* CONTACT */}
    <group position-z={3 * SECTIONS_DISTANCE}>
      <PresentationControls>

          <SectionTitle position-x={isMobile?-1:-3} position-z={isMobile?-2:0.6} position-y={isMobile?1.8:0}>
            CONTACT
          </SectionTitle>
          </PresentationControls>

          <group position-x={-2}>
            <Cloud 
            position={[-3, 0, -5]} 
            segments={10} 
            speed={0.5} 
            opacity={0.4}        // opacityを上げる
            seed={3}             // 形状の種（変更すると形が変わる）
          />
            <PresentationControls>

            <ParkBench
              scale={0.5}
              position-x={-0.5}
              position-z={-2.5}
              rotation-y={-Math.PI / 4}
            />
            </PresentationControls>

          </group>
          <group position={[-2, 1, -6]} scale={2.5}>
          <PresentationControls>

          <Balloon color={new THREE.Color("red")} position-x={-0.2} position-z={0.3}/>
          <Balloon color={new THREE.Color("blue")} position-x={0} position-y={0.3}/>
          <Balloon color={new THREE.Color("green")} position-x={0.1}  position-y={-0.1}/>
          <Balloon color={new THREE.Color("yellow")} position-x={-0.4} position-y={0.3} position-z={-0.3}/>

          </PresentationControls>
          </group>

          <PresentationControls>
          <Mailbox
            scale={0.25}
            rotation-y={1.25 * Math.PI}
            position-x={1}
            position-y={0.25}
            position-z={0.5}
          />
          </PresentationControls>

          <Float floatIntensity={1.5} speed={3}>
    

          </Float>
        </group>
    </>
  )
}
