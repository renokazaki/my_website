import BookCase from "../../ModelsComponents/BookCase"
import SectionTitle from "../SectionTitle"
import CouchSmall from "../../ModelsComponents/CouchSmall"
import Lamp from "../../ModelsComponents/Lamp"
import { MeshDistortMaterial } from "@react-three/drei"
import { useMobile } from "../../../hooks/useMobile"

export const SkillSection = ({SECTIONS_DISTANCE}: {SECTIONS_DISTANCE: number}) => {
  const {isMobile} = useMobile();
  return (
    <>
     {/* SKILLS */}
     <group position-z={SECTIONS_DISTANCE}>
          <group position-x={-2}>
            <SectionTitle position-x={isMobile ? 1.3 : 0.5}
            position-y={isMobile ? 0 : 0.5} rotation-y={isMobile ?0 :Math.PI / 6}>
              SKILLS
            </SectionTitle>
            <BookCase position-z={-2} />
            <CouchSmall
              scale={0.4}
              position-z={0}
              position-x={-0.2}
              rotation-y={Math.PI / 3}
            />
            <Lamp
              position-z={0.6}
              position-x={-0.4}
              position-y={-0.8}
              rotation-y={-Math.PI}
            />
          </group>
          <mesh position-y={2} position-z={-4} position-x={2}>
            <sphereGeometry args={[1, 64, 64]} />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color="yellow"
            />
          </mesh>
        </group>
    </>
  )
}
