import Header from "./Header"
import Particle from "./Particle"
import Title from "./Title"

const Home = () => {
  return (
    <div className="bg-black h-screen w-full">
      <Particle />
      <Header />
      <Title />
    </div>
  )
}

export default Home