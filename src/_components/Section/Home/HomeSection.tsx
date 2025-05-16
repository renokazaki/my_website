import { config } from "../../../config"
import SectionTitle from "../SectionTitle"
import { Float } from "@react-three/drei"
import { Center } from "@react-three/drei"
import PalmTree from "../../ModelsComponents/PalmTree"
import Star from "../../ModelsComponents/Star"
import MacBookPro from "../../ModelsComponents/MacBookPro"
import * as THREE from "three"

export const HomeSection = () => {
  return (
    <>
       {/* HOME */}
            <group>
            <SectionTitle position-x={0.5}>HOME</SectionTitle>

            <Star position-z={0} position-y={2.2} scale={0.3} />
          <Float floatIntensity={2} speed={2}>
            <MacBookPro
              position-x={-1}
              position-y={0.5}
              position-z={0}
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
                size={0.8}
                position-y={1.6}
                position-z={-3}
                bevelEnabled
                bevelThickness={0.3}
              >
                {config.home.title}
              </SectionTitle>
            </Center>
          </Float>
          <Center disableY disableZ>
            <SectionTitle
              size={1.2}
              position-x={-2.6}
              position-z={-3}
              bevelEnabled
              bevelThickness={0.3}
              rotation-y={Math.PI / 10}
            >
              {config.home.subtitle}
            </SectionTitle>
          </Center>            </group>
    </>
  )
}
