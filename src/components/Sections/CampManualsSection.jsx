import docConfig from "../../config/DocConfig"

import CampManualAI from "../../images/camp-manual-ai.png"
import CampCaptainsManualAI from "../../images/camp-captains-manual-ai.png"
import ActivitiesScheduleImage from "../../images/activities-schedule-image.jpg"
import MasterScheduleImage from "../../images/master-schedule-image.jpg"
import CampMapImage from "../../images/camp-map-image.jpg"

function CampManualsSection() {
  return (
    <section className="bg-stone-100">
        <div className="text-center mt-8">
          <h2 className="text-foreground mb-4 text-xl font-bold sm:text-2xl lg:text-3xl lg:leading-tight">
            Camp Manuals and Information
          </h2>
          <h3 className="text-2xl">
            These manuals provide important information and resources for camp participants and
            leaders. Please check back often for updates.
          </h3>
        </div>
        <div className="relative mx-auto w-full max-w-7xl items-center px-5 py-12 text-blue-950 md:px-12 lg:px-24">
          <div className="mx-auto grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="shadow-secondary-1 block rounded-lg bg-white">
              <a href="#!">
                <img className="rounded-t-lg" src={CampManualAI} alt="Camp Manual" />
              </a>
              <div className="text-surface p-6">
                <h5 className="mb-2 text-xl leading-tight font-medium">Camp Manual</h5>
                <p className="mb-4 text-base">
                  Access the camp manual and guidelines. This manual provides important
                  information and resources for camp participants and leaders to ensure a successful
                  camp experience.
                </p>
                <a
                  href={docConfig.links.campManual}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent-green border-accent-green inline-block rounded border px-8 py-4 pt-2.5 pb-2 text-xs leading-normal font-medium text-white uppercase shadow transition duration-150 ease-in-out hover:bg-green-700">
                  View Camp Manual
                </a>
              </div>
            </div>

            <div className="shadow-secondary-1 block rounded-lg bg-white">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src={CampCaptainsManualAI}
                  alt="Camp Captains Manual"
                />
              </a>
              <div className="text-surface p-6">
                <h5 className="mb-2 text-xl leading-tight font-medium">Camp Captains Manual</h5>
                <p className="mb-4 text-base">
                  Access the camp captains manual and guidelines. This manual provides important
                  information and resources for camp captains to ensure a successful camp
                  experience.
                </p>
                <a
                  href={docConfig.links.campCaptainsManual}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent-green border-accent-green inline-block rounded border px-8 py-4 pt-2.5 pb-2 text-xs leading-normal font-medium text-white uppercase shadow transition duration-150 ease-in-out hover:bg-green-700">
                  View Camp Captains Manual
                </a>
              </div>
            </div>

            <div className="shadow-secondary-1 block rounded-lg bg-white">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src={MasterScheduleImage}
                  alt="Master Schedule"
                />
              </a>
              <div className="text-surface p-6">
                <h5 className="mb-2 text-xl leading-tight font-medium">Master Schedule</h5>
                <p className="mb-4 text-base">
                  Access the master schedule. This schedule provides an overview of the different activities and events happening at camp.
                </p>
                <a
                  href={docConfig.links.masterSchedule}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent-green border-accent-green inline-block rounded border px-8 py-4 pt-2.5 pb-2 text-xs leading-normal font-medium text-white uppercase shadow transition duration-150 ease-in-out hover:bg-green-700">
                  View Master Schedule
                </a>
              </div>
            </div>

            <div className="shadow-secondary-1 block rounded-lg bg-white">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src={ActivitiesScheduleImage}
                  alt="Activities Schedule"
                />
              </a>
              <div className="text-surface p-6">
                <h5 className="mb-2 text-xl leading-tight font-medium">Activities Schedule</h5>
                <p className="mb-4 text-base">
                  Access the activities schedule.
                </p>
                <a
                  href={docConfig.links.activitiesSchedule}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent-green border-accent-green inline-block rounded border px-8 py-4 pt-2.5 pb-2 text-xs leading-normal font-medium text-white uppercase shadow transition duration-150 ease-in-out hover:bg-green-700">
                  View Activities Schedule
                </a>
              </div>
            </div>

            <div className="shadow-secondary-1 block rounded-lg bg-white">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src={CampMapImage}
                  alt="Camp Map"
                />
              </a>
              <div className="text-surface p-6">
                <h5 className="mb-2 text-xl leading-tight font-medium">Camp Map</h5>
                <p className="mb-4 text-base">
                  Access the camp map. See where the different activities and locations are at camp.
                </p>
                <a
                  href={docConfig.links.activitiesMap}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent-green border-accent-green inline-block rounded border px-8 py-4 pt-2.5 pb-2 text-xs leading-normal font-medium text-white uppercase shadow transition duration-150 ease-in-out hover:bg-green-700">
                  Camp Activities Map
                </a>
              </div>
            </div>


          </div>
        </div>

    </section>
  )
}

export default CampManualsSection
