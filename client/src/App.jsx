import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import StackPage from "./pages/StackPage"
import CommuPage from "./pages/CommuPage"
import Chatbot from "./pages/Chatbot"
import ArticlePage from "./pages/ArticlePage"
import SelectStackPage from "./pages/SelectStackPage"
import StackInformationPage from "./pages/StackInformationPage"

function App() {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<StackPage />} />
        <Route path="/community" element={<CommuPage/>} />
        <Route path="/chatbot" element={<Chatbot/>} />
        <Route path="/articles" element={<ArticlePage/>} />
        <Route path="/stack" element={<SelectStackPage/>} />
        <Route path="/information" element={<StackInformationPage/>} />
        <Route path="*" element={<h1>Not Found</h1>} />

      </Routes>
    </>
  )
}

export default App