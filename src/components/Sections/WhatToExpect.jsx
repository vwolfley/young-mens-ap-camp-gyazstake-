import React from "react"
import MoroniPrayer from "../../images/moroni-prayer.png"
import { BsClouds } from "react-icons/bs";
import { IoChatbubblesOutline } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { DiAtom } from "react-icons/di";

function WhatToExpect() {
  return (
    <section className="text-blue-950 body-font border-t border-gray-200">
      <div className="container px-5 py-12 mx-auto flex flex-wrap">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-2xl text-blue-800 tracking-widest font-medium title-font mb-1">
            What to Expect
          </h2>
          <h1 className="sm:text-3xl text-4xl font-bold title-font text-blue-950">
            So Much Stuff to Do!
          </h1>
        </div>
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="Moroni Praying"
            className="object-cover object-center h-full w-full"
            src={MoroniPrayer}
          />
        </div>

        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-800 text-yellow-400 mb-5">
                <DiAtom className="w-6 h-6" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                EXCITING GAMES & ACTIVITIES
              </h2>
              <p className="leading-relaxed text-base">
                Defend your tribe in epic re-enacted battles! Use your team’s wits to overcome
                clever challenges!
              </p>
            </div>
          </div>

          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-800 text-yellow-400 mb-5">
              <IoChatbubblesOutline className="w-6 h-6" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                MEMORABLE FRIENDSHIPS
              </h2>
              <p className="leading-relaxed text-base">
                Build lasting friendships and meaningful connections during the many activities and
                adventures.
              </p>
            </div>
          </div>

          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-800 text-yellow-400 mb-5">
              <BsStars className="w-6 h-6" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                IMMERSIVE RE-ENACTMENTS
              </h2>
              <p className="leading-relaxed text-base">
                Participate in live re-enactments to bring new perspective to key moments in Book of
                Mormon times.
              </p>
            </div>
          </div>

          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-800 text-yellow-400 mb-5">
              <BsClouds className="w-6 h-6" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              SPIRITUAL EXPERIENCES
              </h2>
              <p className="leading-relaxed text-base">
              Discover meaningful, testimony-building moments to cherish and share for years to come.
              </p>
            </div>
          </div>


        </div>

      </div>
    </section>
  )
}

export default WhatToExpect
