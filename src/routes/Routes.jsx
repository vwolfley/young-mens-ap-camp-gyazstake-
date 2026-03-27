import { Routes, Route, Navigate } from "react-router"
import About from "../pages/About"
import Checklist from "../pages/Checklist"
import Registration from "../pages/Registration"


const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<About />} />
      <Route exact path="/registration" element={<Registration />} />
      <Route exact path="/checklist" element={<Checklist />} />
    </Routes>
  )
}

export default AppRoutes
