import { useState } from "react"
import { NavLink, useMatch } from "react-router-dom"
import CampLogo from "../../images/campLogo-white.png"
import LogoFinal from "../../images/logoFinal-white.png"
import NavLinks from "./links"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  const links = NavLinks()

  return (
    <header className="sticky top-0 z-10 flex h-24 bg-main text-blue-50">
      <section className="flex items-center p-6 flex-1 justify-between">
        <div className="flex flex-row items-center gap-1 shrink-0">
          <img className="h-auto w-8 lg:w-16" src={LogoFinal} alt="Camp Logo" />
          <h1 className="font-semibold text-lg md:text-2xl lg:text-3xl tracking-tight">Young Men's AP Camp 2026</h1>
        </div>
        <div className="flex">
          <button
            id="hamburger-button"
            className="relative h-8 w-8 cursor-pointer text-3xl md:hidden"
            onClick={toggleMobileMenu}>
            <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-green-500 transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-green-500 before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-green-500 after:transition-all after:duration-500 after:content-['']"></div>
          </button>
          <nav id="nav-menu" className="hidden space-x-2 text-xl w-full md:block lg:flex lg:items-center lg:w-auto" aria-label="nav-menu">
            <ul className="mt-0 flex flex-row items-center justify-center p-2 text-sm font-semibold md:space-x-2 lg:space-x-3 text-nowrap">
              {links.map((link, index) => {
                const match = useMatch(link.link)
                return (
                  <li key={index} className="text-center">
                    <NavLink
                      id={link.id}
                      to={link.link}
                      target={link.internal ? "_self" : "_blank"}
                      rel="noreferrer"
                      className="flex rounded p-0 py-2 hover:text-green-500 cursor-pointer">
                      {link.name}
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </section>
      <section
        id="mobile-menu"
        className={`${
          mobileMenuOpen ? "animate-open-menu" : "hidden"
        } fixed w-48 top-0 mt-16 right-0 flex-col bg-blue-900 text-lg text-blue-50 md:hidden`}>
        <nav className="flex flex-col px-4 py-6" aria-label="mobile-menu">
          {links.map((link, index) => {
            return (
              <NavLink
                id={link.id}
                key={index}
                to={link.link}
                target={link.internal ? "_self" : "_blank"}
                rel="noreferrer"
                className="block rounded p-0 py-2 hover:text-green-500">
                {link.name}
              </NavLink>
            )
          })}
        </nav>
      </section>
    </header>
  )
}
