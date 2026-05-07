import { Routes, Route, Navigate } from "react-router"
import About from "../pages/About"
import PackingList from "../pages/PackingList"
import Registration from "../pages/Registration"
import Directions from "../pages/Directions"


const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<About />} />
      <Route exact path="/registration" element={<Registration />} />
      <Route exact path="/packing-list" element={<PackingList />} />
      <Route exact path="/directions" element={<Directions />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRoutes
