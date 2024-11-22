import { useState } from "react";
import Arrow_Left from "../UI/Arrow_Left";
import Arrow_Right from "../UI/Arrow_Right";
import { IoEyeSharp } from "react-icons/io5";
import { SlTarget } from "react-icons/sl";
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
        <Arrow_Left onClick={prevSlide} />
        <div className="overflow-hidden w-full">
          <div
            className="flex w-full"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div className="flex flex-col items-center justify-center gap-8 w-full flex-shrink-0 pt-16">
              <SlTarget size={22} className="absolute top-9"/>
              <div
                className="w-[22px] h-0 rounded-full absolute top-12"
                style={{ boxShadow: "0 0 30px 20px rgba(255, 20, 147, 0.15)" }}
              ></div>
              <h1 className="text-lg font-semibold mt-8">MISSION</h1>
              <h2 className="font-bold text-center max-w-[50rem] sm:text-2xl mx-4">
                "Our mission is to foster a friendly and collaborative
                environment where individuals interested in technology,
                especially AWS and cloud computing, can connect, learn, and
                grow. We aim to support members in developing their cloud
                skills, building meaningful connections, and exploring
                innovative solutions in the tech industry."
              </h2>
            </div>

            <div className="flex flex-col items-center justify-center gap-8 w-full flex-shrink-0 pt-16">
              <IoEyeSharp size={22} className="absolute top-9" />
              <div
                className="w-[22px] h-0 rounded-full absolute top-12"
                style={{ boxShadow: "0 0 30px 20px rgba(255, 20, 147, 0.15)" }}
              ></div>
              <h1 className="text-lg font-semibold mt-8">VISION</h1>
              <h2 className="font-bold text-center max-w-[50rem] sm:text-2xl mx-4">
                "To create a supportive space at the University of Perpetual
                Help System Laguna, where students and tech enthusiasts can come
                together to explore, learn, and share emerging technologies,
                with a focus on AWS and cloud computing."
              </h2>
            </div>
          </div>
        </div>
        <Arrow_Right onClick={nextSlide} />
      </div>

      <Pagination
        count={2}
        currentPage={currentSlide}
        onPageChange={() => nextSlide()}
      />
    </div>
  );
};

export default Mission;
