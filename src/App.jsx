import { useState } from "react"
import { BrowserRouter } from "react-router-dom"
import Header from "./layout/Header/header"
import Footer from "./layout/Footer/footer"
import AppRoutes from "./routes/Routes"

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen w-screen flex-col overflow-x-hidden scroll-smooth">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
