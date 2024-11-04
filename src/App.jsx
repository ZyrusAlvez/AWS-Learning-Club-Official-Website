import Header from "./components/Home/Header.jsx"
import Title from "./components/Home/Title.jsx"
import Particle from "./components/Home/Particle.jsx"
import Officers from "./components/About Us/Officers.jsx"

export default function App() {
  return (
    <div>
      <div className="bg-black h-screen w-full">
        <Particle />
        <Header />
        <Title />
      </div>
      <div className="bg-black h-screen w-full">
        <Officers />
      </div>
    </div>
  )
}