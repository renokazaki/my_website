import SectionTitle from "../SectionTitle"

export const ContactSection = ({SECTIONS_DISTANCE}: {SECTIONS_DISTANCE: number}) => {
  return (
    <>
     {/* CONTACT */}
     <group position-z={3 * SECTIONS_DISTANCE}>
          <SectionTitle position-x={0.5}>CONTACT</SectionTitle>
        </group>
    </>
  )
}
