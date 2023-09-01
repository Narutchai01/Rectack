import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import { Route, Routes } from "react-router-dom"
import AboutPage from "./pages/AboutPage"

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
      </div>



      <Routes>
        <Route path="/about" element={<AboutPage/>} />
      </Routes>

    </>

  )
}

export default App
