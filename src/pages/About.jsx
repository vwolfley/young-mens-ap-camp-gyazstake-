import HomeHero from "../components/Sections/HomeHero"
import WhatSection from "../components/Sections/WhatSection"
import ThemeQuote from "../components/Sections/ThemeQuote"
import Timer from "../components/Sections/TimerSection"
import InfoSection from "../components/Sections/InfoSection"

function About() {
  return (
    <div tag="main-body" className="flex grow flex-col">
      <HomeHero />
      <ThemeQuote />
      <Timer />
      <WhatSection />
      <InfoSection />
    </div>
  )
}

export default About
