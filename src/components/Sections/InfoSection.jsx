import React from "react"
import docConfig from "../../config/DocConfig"
import MedicalRelease from "../../docs/ym-camp-medical-forms-church-release.pdf"
import PhotoReleaseDoc from "../../docs/photo-participant-release.pdf"

import RegistrationImage from "../../images/registration-image.png"
import MedicalReleaseImage from "../../images/medical-image.jpg"
import PhotoReleaseImage from "../../images/photo-release-image.png"

function InfoSection() {
  return (
    <section className="bg-stone-100">
      <div className="relative mx-auto w-full max-w-7xl items-center px-5 py-12 text-blue-950 md:px-12 lg:px-24">
        <div className="mx-auto grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="shadow-secondary-1 block rounded-lg bg-white">
            <a href="#!">
              <img
                className="rounded-t-lg"
                src={RegistrationImage}
                alt="Registration"
              />
            </a>
            <div className="text-surface p-6">
              <h5 className="mb-2 text-xl leading-tight font-medium">Registration</h5>
              <p className="mb-4 text-base">
                Click here to register for the 2026 Young Men's AP Camp.
              </p>
              <a
                href={docConfig.links.registration}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-green border-accent-green inline-block rounded border px-8 py-4 pt-2.5 pb-2 text-xs leading-normal font-medium text-white uppercase shadow transition duration-150 ease-in-out hover:bg-green-700">
                Registration
              </a>
              <p className="m-4 text-base">
                Adult leaders must complete youth protection training before camp.
              </p>
              <a
                href={docConfig.links.youthProtectionTraining}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-400 border-accent-orange inline-block rounded border px-8 py-4 pt-2.5 pb-2 text-xs leading-normal font-medium text-white uppercase shadow transition duration-150 ease-in-out hover:bg-orange-500">
                Youth Protection Training
              </a>
            </div>
          </div>

          <div className="shadow-secondary-1 block rounded-lg bg-white">
            <a href="#!">
              <img
                className="rounded-t-lg"
                src={MedicalReleaseImage}
                alt="Medical Release"
              />
            </a>
            <div className="text-surface p-6">
              <h5 className="mb-2 text-xl leading-tight font-medium">
                Permission and Medical Release Form
              </h5>
              <p className="mb-4 text-base">
                All participants should fill out and sign this form before they participate in any
                activity.
              </p>
              <a
                href={MedicalRelease}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-green border-accent-green inline-block rounded border px-8 py-4 pt-2.5 pb-2 text-xs leading-normal font-medium text-white uppercase shadow transition duration-150 ease-in-out hover:bg-green-700">
                Medical Release Form
              </a>
            </div>
          </div>

          <div className="shadow-secondary-1 block rounded-lg bg-white">
            <a href="#!">
              <img
                className="rounded-t-lg"
                src={PhotoReleaseImage}
                alt="Photo Release"
              />
            </a>
            <div className="text-surface p-6">
              <h5 className="mb-2 text-xl leading-tight font-medium">Photo Release Form</h5>
              <p className="mb-4 text-base">
                All participants should fill out and sign this form before they participate in the
                activity. By signing the photo release form, participants and their guardians
                acknowledge and agree to the use of their images and videos in accordance with
                church policies.
              </p>
              <a
                href={PhotoReleaseDoc}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-green border-accent-green inline-block rounded border px-8 py-4 pt-2.5 pb-2 text-xs leading-normal font-medium text-white uppercase shadow transition duration-150 ease-in-out hover:bg-green-700">
                Photo Release Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoSection
