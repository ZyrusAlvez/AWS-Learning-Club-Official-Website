import Header from "./components/Header.jsx"
import Title from "./components/Title.jsx"
import Particle from "./components/Particle.jsx"
import Officers from "./components/Officers.jsx"

export default function App() {
  return (
    <div className="bg-black h-screen w-full">
      <Particle />
      <Header />
      <Title />
      <Officers />
    </div>
  )
}