import { config } from "../../../config"
import SectionTitle from "../SectionTitle"
import { Cloud, Float, PresentationControls } from "@react-three/drei"
import { Center } from "@react-three/drei"
import PalmTree from "../../ModelsComponents/PalmTree"
import Star from "../../ModelsComponents/Star"
import MacBookPro from "../../ModelsComponents/MacBookPro"
import * as THREE from "three"
import { useMobile } from "../../../hooks/useMobile"
import Seagulls from "../../ModelsComponents/Seagulls"
// import Birds from "../../ModelsComponents/Birds"

export const HomeSection = () => {
  const {isMobile} = useMobile();
  return (
    <>
       {/* HOME */}

                 <Cloud
                   position={[-7, 2, -10]} 
                   segments={30} 
                   speed={1} 
                   opacity={0.3}        // opacityを上げる
                   seed={2}             // 形状の種（変更すると形が変わる）
                 />
                      <Cloud
                   position={[-14, -5, 0]} 
                   segments={30} 
                   speed={1} 
                   opacity={0.3}        // opacityを上げる
                   seed={2}             // 形状の種（変更すると形が変わる）
                 />
            <group>
            <PresentationControls>
            <SectionTitle 
            position-x={isMobile ? -0.6 : 0.5}
            position-y={isMobile ? 1 : 0.5}>HOME</SectionTitle>
            </PresentationControls>

            <Star position-z={0} position-y={2.2} scale={0.3} />
            <Seagulls position={[-20, -5, -15]}/>
          <Float floatIntensity={2} speed={2}>
            <PresentationControls>
            <MacBookPro
              position-x={isMobile ? -0.5 : -1}
              position-y={isMobile ? 1 : 0.5}
              position-z={isMobile ? -2 : 0}
              scale={0.3}
              rotation-y={Math.PI / 4}
            />
            </PresentationControls>

          </Float>
          {/* <Birds /> */}
          <PalmTree
            scale={0.018}
            rotation-y={THREE.MathUtils.degToRad(140)}
            position={[4, 0, -5]}
          />
          <Float floatIntensity={0.3} speed={0.5}>
            <Center disableY disableZ>
              <PresentationControls>
              <SectionTitle
                size={isMobile ? 0: 0.8}
                position-x={isMobile ? 2 : 0.8}
                position-y={isMobile ? 2 : 1.6}
                position-z={isMobile ? -5 : -3}
                bevelEnabled
                bevelThickness={0.3}
              >
                {config.home.title}
              </SectionTitle>
              </PresentationControls>
            </Center>
          </Float>
    
          </group>
    </>
  )
}
