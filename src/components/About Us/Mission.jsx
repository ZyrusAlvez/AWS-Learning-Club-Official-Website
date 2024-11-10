import { useState } from "react";
import Arrow_Left from "../UI/Arrow_Left";
import Arrow_Right from "../UI/Arrow_Right";
import { IoEyeSharp } from "react-icons/io5";
import Pagination from "../UI/Pagination";

const Mission = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : prev - 1));
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-white flex justify-between items-center mt-20 mx-4 sm:mx-8">
        <Arrow_Left onClick={prevSlide}/>
        <div className="overflow-hidden w-full">
          <div
            className="flex w-full"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div className="flex flex-col items-center justify-center gap-8 w-full flex-shrink-0 pt-16">
              <IoEyeSharp size={22} className="absolute top-9"/>
              <div className="w-[22px] h-0 rounded-full absolute top-12" style={{ boxShadow: "0 0 30px 20px rgba(255, 20, 147, 0.15)" }}></div>
              <h1 className="text-lg font-semibold mt-8">MISSION</h1>
              <h2 className="font-bold text-center max-w-[50rem] sm:text-2xl mx-4">
                "The team at AWS transformed our cloud strategy, making it seamless
                and efficient. Their expertise and support have been invaluable to our
                growth."
              </h2>
            </div>

            <div className="flex flex-col items-center justify-center gap-8 w-full flex-shrink-0 pt-16">
              <IoEyeSharp size={22} className="absolute top-9"/>
              <div className="w-[22px] h-0 rounded-full absolute top-12" style={{ boxShadow: "0 0 30px 20px rgba(255, 20, 147, 0.15)" }}></div>
              <h1 className="text-lg font-semibold mt-8">VISION</h1>
              <h2 className="font-bold text-center max-w-[50rem] sm:text-2xl mx-4">
                "Our vision is to continue pioneering innovative solutions, driving
                growth and making a positive impact through technology."
              </h2>
            </div>
          </div>
        </div>
        <Arrow_Right onClick={nextSlide}/>

      </div>

      <Pagination count={2} currentPage={currentSlide} onPageChange={() => nextSlide()}/>
    </div>
   
  );
};

export default Mission;
