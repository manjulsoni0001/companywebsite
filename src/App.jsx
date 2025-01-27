import { BrowserRouter, Route, Routes } from "react-router-dom"
import ScrollToTop from "./Components/ScrollToTop"

import Header from "./Components/Header"
import Footer from "./Components/Footer"

import Home from "./Pages/Home"
import Services from "./Pages/Services"
import ContactUs from "./Pages/Contact"
import Team from "./Pages/Team"
import About from "./Pages/About"


function App() {

  return (
      <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
