import Header from "./layout/Header/Header.jsx"
import Home from "./components/Home/Home.jsx"
import About_Us from "./components/About Us/About_Us.jsx"
import Events from "./components/Events/Events.jsx"
import Contact_Us from "./components/Contact Us/Contact_Us.jsx"
import Footer from "./layout/Footer/Footer.jsx"

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <About_Us />
      <Events />
      <Contact_Us />
      <Footer />
    </div>
  )
}