import { config } from "../../../config"
import SectionTitle from "../SectionTitle"
import { Float } from "@react-three/drei"
import { Center } from "@react-three/drei"
import PalmTree from "../../ModelsComponents/PalmTree"
import Star from "../../ModelsComponents/Star"
import MacBookPro from "../../ModelsComponents/MacBookPro"
import * as THREE from "three"
import { useMobile } from "../../../hooks/useMobile"

export const HomeSection = () => {
  const {isMobile} = useMobile();
  return (
    <>
       {/* HOME */}
            <group>
            <SectionTitle 
            position-x={isMobile ? -0.6 : 0.5}
            position-y={isMobile ? 1 : 0.5}>HOME</SectionTitle>
            
            <Star position-z={0} position-y={2.2} scale={0.3} />
          <Float floatIntensity={2} speed={2}>
            <MacBookPro
              position-x={isMobile ? -0.5 : -1}
              position-y={isMobile ? 1 : 0.5}
              position-z={isMobile ? -2 : 0}
              scale={0.3}
              rotation-y={Math.PI / 4}
            />
          </Float>
          <PalmTree
            scale={0.018}
            rotation-y={THREE.MathUtils.degToRad(140)}
            position={[4, 0, -5]}
          />
          <Float floatIntensity={0.6}>
            <Center disableY disableZ>
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
            </Center>
          </Float>
          <Center disableY disableZ>
            <SectionTitle
              size={isMobile ? 0 : 1.2}
              position-x={isMobile ? 1.5 : -2.6}
              position-z={isMobile ? -3 : -3}
              bevelEnabled
              bevelThickness={0.3}
              rotation-y={Math.PI / 10}
            >
              {config.home.subtitle}
            </SectionTitle>
          </Center>            
          </group>
    </>
  )
}
