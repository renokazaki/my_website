import SectionTitle from "../SectionTitle"
import ParkBench from "../../ModelsComponents/ParkBench"
import Mailbox from "../../ModelsComponents/Mailbox"
import Pigeon from "../../ModelsComponents/Pigeon"
import { Float } from "@react-three/drei"
import { useMobile } from "../../../hooks/useMobile"

export const ContactSection = ({SECTIONS_DISTANCE}: {SECTIONS_DISTANCE: number}) => {
  const {isMobile} = useMobile();
  return (
    <>
    {/* CONTACT */}
    <group position-z={3 * SECTIONS_DISTANCE}>
          <SectionTitle position-x={isMobile?-1:-3} position-z={isMobile?-2:0.6} position-y={isMobile?1.8:0}>
            CONTACT
          </SectionTitle>
          <group position-x={-2}>
            <ParkBench
              scale={0.5}
              position-x={-0.5}
              position-z={-2.5}
              rotation-y={-Math.PI / 4}
            />
        
          </group>

          <Mailbox
            scale={0.25}
            rotation-y={1.25 * Math.PI}
            position-x={1}
            position-y={0.25}
            position-z={0.5}
          />
          <Float floatIntensity={1.5} speed={3}>
            <Pigeon
              position-x={2}
              position-y={1.5}
              position-z={-0.5}
              scale={0.3}
            />
          </Float>
        </group>
    </>
  )
}
