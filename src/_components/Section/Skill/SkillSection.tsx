import SectionTitle from "../SectionTitle"

export const SkillSection = ({SECTIONS_DISTANCE}: {SECTIONS_DISTANCE: number}) => {
  return (
    <>
     {/* SKILLS */}
            <group position-z={SECTIONS_DISTANCE}>
              <SectionTitle position-x={0.5}>SKILLS</SectionTitle>
            </group>
    </>
  )
}
