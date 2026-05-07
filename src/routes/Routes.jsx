import { Routes, Route, Navigate } from "react-router"
import About from "../pages/About"
import PackingList from "../pages/PackingList"
import Registration from "../pages/Registration"


const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<About />} />
      <Route exact path="/registration" element={<Registration />} />
      <Route exact path="/packing-list" element={<PackingList />} />
    </Routes>
  )
}

export default AppRoutes
