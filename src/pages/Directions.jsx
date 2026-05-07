import DirectionsHero from "../components/Sections/DirectionsHero"
import DirectionsSection from "../components/Sections/DirectionsSection"

function Directions() {
  return (
    <div tag="main-body" className="flex grow flex-col">
      <DirectionsHero />
      <DirectionsSection />
    </div>
  )
}

export default Directions