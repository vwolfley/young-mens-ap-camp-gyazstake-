import React from "react"
import CampLogo from "../../images/campLogo-white.png"

function HomeHero() {
  return (
    <section
      className="flex flex-col items-center bg-center justify-center">
      <div className="px-4 mx-auto max-w-3xl lg:max-w-7xl text-center py-10">
        <img src={CampLogo} alt="Camp Logo" className="mx-auto mb-8 w-48" />
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-main md:text-5xl lg:text-6xl">
          2026 Young Men's AP Camp
        </h1>
        <h2 className="mb-8 text-2xl font-normal text-main lg:text-3xl sm:px-16 lg:px-48">Walk with Me</h2>
        <p className="mb-8 text-lg font-normal text-main lg:text-xl sm:px-16 lg:px-48">
          We are excited for the opportunity we have to strengthen our faith in Jesus Christ and build the bonds of brotherhood and friendship while having some fun this summer at Camp Heber.
        </p>
        <button className="bg-accent-green text-white text-lg font-bold py-4 px-8 border border-accent-green rounded shadow">
          June 10-13, 2026
        </button>
      </div>
    </section>
  )
}

export default HomeHero
