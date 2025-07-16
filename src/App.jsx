import AboutMe from "./components/aboutsection"
import Contact from "./components/contactsection"
import MainSection from "./components/mainSection"
import NavBar from "./components/navbar"
import Projects from "./components/projectssection"
import Skills from "./components/skillssection"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <MainSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </BrowserRouter>
  )
}

export default App
