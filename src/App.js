import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Experience from "./components/experience/Experience"
import Footer from "./components/Footer/Footer"
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import Projects from "./components/projects/Projects"

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
