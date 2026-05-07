import PackingListHero from "../components/Sections/PackingListHero"
import PackingListSection from "../components/Sections/PackingListSection"

function PackingList() {
  return (
    <div tag="main-body" className="flex grow flex-col">
      <PackingListHero />
      <PackingListSection />
    </div>
  )
}

export default PackingList
