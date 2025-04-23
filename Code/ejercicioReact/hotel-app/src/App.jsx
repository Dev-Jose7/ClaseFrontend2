import React from "react"
import About from "./components/about.jsx"
import Banner from "./components/banner.jsx"
import Contacto from "./components/contacto.jsx"
import Footer from "./components/footer.jsx"
import Habitaciones from "./components/habitaciones.jsx"
import Menu from "./components/menu.jsx"
import Ours from "./components/ours.jsx"

function App() {
  return(
    <>
      <Menu />
      <Banner />
      <div class="w3-content" style={{"max-width":"1532px"}}>
        <Habitaciones />
        <About />
        <Ours />
      </div>
      <Contacto />
      <Footer />
    </>
  )
}

export default App
