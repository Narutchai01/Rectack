import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import StackPage from "./pages/StackPage"
import CommuPage from "./pages/CommuPage"
import Chatbot from "./pages/Chatbot"
import ArticlePage from "./pages/ArticlePage"

function App() {
  return (
    <>
      <CommuPage/>
      {/* <Navbar />


      <Routes>
        <Route path="/" element={<StackPage />} />
        <Route path="/community" element={<CommuPage/>} />
        <Route path="/chatbot" element={<Chatbot/>} />
        <Route path="/articles" element={<ArticlePage/>} />
        <Route path="*" element={<h1>Not Found</h1>} />

      </Routes> */}
    </>
  )
}

export default App