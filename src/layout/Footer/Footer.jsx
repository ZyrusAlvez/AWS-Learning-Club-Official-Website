import Title from "./Title.jsx"
import Navigation from "./Navigation.jsx"
import Bottom from "./Bottom.jsx"

const Footer = () => {
  return (
    <div className="mx-4 py-20 md:mx-8">
      <div className="sm:flex sm:justify-between sm:items-center">
        <Title/>
        <Navigation />
      </div>
      <Bottom />
    </div>
  )
}

export default Footer