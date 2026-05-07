
import PackingListImage from "../../images/packing-list.jpg"

function PackingListHero() {
  return (
    <section
      className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
      <img
        src={PackingListImage}
        alt="Packing List"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 px-4 mx-auto max-w-3xl lg:max-w-7xl text-center py-20 bg-black/40 rounded-xl">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Camp Packing List
        </h1>
      </div>
    </section>
  )
}

export default PackingListHero
