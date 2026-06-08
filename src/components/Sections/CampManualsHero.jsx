
import CampManualsImage from "../../images/camp-manual-image.jpg"

function CampManualsHero() {
  return (
    <section
      className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
      <img
        src={CampManualsImage}
        alt="Camp Manuals"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 px-4 mx-auto max-w-3xl lg:max-w-7xl text-center py-20 bg-black/40 rounded-xl">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Camp Manuals
        </h1>
      </div>
    </section>
  )
}

export default CampManualsHero
