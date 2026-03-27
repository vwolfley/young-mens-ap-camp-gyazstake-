import CampImage from "../../images/ai-camp-image.png"

function WhatSection() {
  return (
    <section className="body-font text-blue-950">
      <div className="container mx-auto flex flex-col items-center px-5 py-16 md:flex-row">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h1 className="title-font mb-4 text-3xl font-medium sm:text-4xl">
            What is Young Mens Camp?
          </h1>
          <p className="mb-8 leading-relaxed">
            Stake Aaronic Priesthood Camp will be held this summer! All young men turning 12-18 in
            2026 are invited to attend. AP Camp will be held at Camp Heber in Heber, Arizona. All
            Young Men & Leaders who would like to attend will need to register, fill out the medical
            form, and complete the photo release form.
          </p>

          <p className="mb-8 leading-relaxed">
            Information will be updated during the coming weeks and months. Please check back often
            for the most up-to-date information.
          </p>
        </div>
        <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          <img className="rounded object-cover object-center" alt="camp image" src={CampImage} />
        </div>
      </div>
    </section>
  )
}

export default WhatSection
