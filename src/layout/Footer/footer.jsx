import React from "react"
import Facebook from "../../images/social/facebook-logo.webp"
import X from "../../images/social/x-logo-white.webp"
import Instagram from "../../images/social/instagram-logo-white.webp"
import YouTube from "../../images/social/youtube-logo-red.webp"
import DocConfig from "../../config/DocConfig"

export default function App() {
  return (
    <footer className="bg-main text-center lg:text-left pt-10 px-8">
      <div className="container p-6 text-cyan-50">
        <div className="grid gap-4 lg:grid-cols-3">
          <section className="mb-6 md:mb-0 flex flex-col content-center">
            <h5 className="mb-2 font-medium uppercase">Goodyear Arizona Stake</h5>

            <address className="">
              425 South Estrella Parkway
              <br />
              Goodyear, Arizona 85338
              <br />
              <a
                href="https://local.churchofjesuschrist.org/en/us/az/goodyear/425-south-estrella-parkway?utm_source=gmb&utm_medium=yext"
                className="underline text-green-500 hover:text-green-300 visited:text-purple-400">
                Goodyear Stake
              </a>
            </address>
          </section>

          <section className="mb-6 md:mb-0 flex justify-center flex-col items-center">
            <h5 className="mb-2 font-medium text-lg uppercase">You're Awesome</h5>
            <h3 className="mb-2 font-bold text-3xl">See you soon!</h3>
          </section>

          <section className="flex mb-6 md:mb-0 justify-center lg:justify-end gap-x-2 items-center">
            <a href="https://www.facebook.com/ChurchofJesusChrist/" role="button">
              <img src={Facebook} alt="Facebook Logo" width="25" height="auto" />
            </a>
            <a href="https://twitter.com/Ch_JesusChrist" role="button">
              <img src={X} alt="X or Twitter Logo" width="25" height="auto" />
            </a>
            <a href="https://www.instagram.com/churchofjesuschrist/" role="button">
              <img src={Instagram} alt="Instagram Logo" width="25" height="auto" />
            </a>
            <a href="https://www.youtube.com/churchofjesuschrist" role="button">
              <img src={YouTube} alt="Youtube Logo" width="25" height="auto" />
            </a>
          </section>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-main p-4 text-center text-cyan-50 text-xs">
        <p>
          This is not an official website of The Church of Jesus Christ of Latter-day Saints. For
          the official Church website, please visit{" "}
          <a
            href="https://www.churchofjesuschrist.org/"
            className="underline text-green-500 hover:text-green-300 visited:text-purple-400">
            churchofjesuschrist.org
          </a>
        </p>
        <p>Goodyear Arizona Stake © 2026 Copyright</p>
        <ul className="flex list-none justify-center divide-x md:order-2">
          <li className="px-2">{DocConfig.version}</li>
          <li className="px-2">{DocConfig.date}</li>
        </ul>
      </div>
    </footer>
  )
}
