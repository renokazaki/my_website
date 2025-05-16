import SectionTitle from "../SectionTitle"

export const ProjectSection = ({SECTIONS_DISTANCE}: {SECTIONS_DISTANCE: number}) => {
  return (
    <>
     {/* PROJECTS */}
            <group position-z={2 * SECTIONS_DISTANCE}>
              <SectionTitle position-x={0.5}>PROJECTS</SectionTitle>
            </group></>
  )
}
