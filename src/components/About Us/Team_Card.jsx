import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Team_Card = ({img, name, title, subtitle, className}) => {
  return (
    <div className={`w-64 flex flex-col text-white ${className}`}>
      <div className="w-64 h-52 overflow-hidden rounded-lg mb-6">
        <img className='w-full h-full object-cover' src={img}/>
      </div>
      <h1 className='font-bold text-xl mb-2'>{name}</h1>
      <h2 className='text-lg mb-4'>{title}</h2>
      <h3 className="mb-6">{subtitle}</h3>
      <div className="flex text-pink cursor-pointer text-2xl gap-4">
        <FaLinkedin className="hover:text-white"/>
        <FaFacebook className="hover:text-white"/>
      </div>
    </div>
  )
}

export default Team_Card