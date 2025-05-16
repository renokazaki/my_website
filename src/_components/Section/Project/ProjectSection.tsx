import SectionTitle from "../SectionTitle"
import Monitor from "../../ModelsComponents/Monitor"
import { RoundedBox } from "@react-three/drei"
export const ProjectSection = ({SECTIONS_DISTANCE}: {SECTIONS_DISTANCE: number}) => {
  return (
    <>
   {/* PROJECTS */}
   <group position-z={2 * SECTIONS_DISTANCE}>
          <group position-x={1}>
            <SectionTitle
              position-x={-0.5}
              position-z={0}
              rotation-y={-Math.PI / 6}
            >
              PROJECTS
            </SectionTitle>

            <group
              position-x={0.5}
              position-z={0}
              rotation-y={-Math.PI / 6}
              scale={0.8}
            >
              <Monitor
                scale={0.02}
                position-y={1}
                rotation-y={-Math.PI / 2}
                position-z={-1}
              />
              <RoundedBox scale-x={2} position-y={0.5} position-z={-1}>
                <meshStandardMaterial color="white" />
              </RoundedBox>
            </group>
          </group>
        </group>
        </>
  )
}
