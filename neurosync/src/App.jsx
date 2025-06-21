import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import Workflow from "./components/Workflow"

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Features />
    <Workflow />
    <Pricing />
    <Testimonials />
    <Footer />
    </>
  )
}

export default App