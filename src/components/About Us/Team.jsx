import React, { useState, useEffect, useCallback, useRef } from "react";
import Team_Card from "./Team_Card";
import Pagination from "../UI/Pagination";
import Arrow_Left from "../UI/Arrow_Left";
import Arrow_Right from "../UI/Arrow_Right";
import person1 from "../../assets/Team/person1.jpg";

const Team = () => {
  const teamMembers = [
    {
      img: person1,
      name: "1Mark Anthony Hernandez",
      title: "Lead",
      subtitle: "Expert in cloud solutions with over 5 years of experience.",
    },
    {
      img: person1,
      name: "2Mark Anthony Hernandez",
      title: "Lead",
      subtitle: "Expert in cloud solutions with over 5 years of experience.",
    },
    {
      img: person1,
      name: "3Mark Antho3ny Hernandez",
      title: "Lead",
      subtitle: "Expert in cloud solutions with over 5 years of experience.",
    },
    {
      img: person1,
      name: "4Mark Anthony Hernandez",
      title: "Lead",
      subtitle: "Expert in cloud solutions with over 5 years of experience.",
    },
    {
      img: person1,
      name: "5Mark Anthony Hernandez",
      title: "Lead",
      subtitle: "Expert in cloud solutions with over 5 years of experience.",
    },
    {
      img: person1,
      name: "6Mark Anthony Hernandez",
      title: "Lead",
      subtitle: "Expert in cloud solutions with over 5 years of experience.",
    },
    {
      img: person1,
      name: "7Mark Anthony Hernandez",
      title: "Lead",
      subtitle: "Expert in cloud solutions with over 5 years of experience.",
    },
    {
      img: person1,
      name: "8Madawdawdz",
      title: "Lead",
      subtitle: "Expert in cloud solutions with over 5 years of experience.",
    },
    {
      img: person1,
      name: "9Mark Anthony Hernandez",
      title: "Lead",
      subtitle: "Expert in cloud solutions with over 5 years of experience.",
    }
  ];
  

  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(1);
  const interval = useRef(null)

  // Function to update cards to show based on window width
  const updateCardsToShow = useCallback(() => {
    if (window.innerWidth >= 1280) {
      // xl
      setCardsToShow(4);
    } else if (window.innerWidth >= 1024) {
      // lg
      setCardsToShow(3);
    } else if (window.innerWidth >= 640) {
      // sm
      setCardsToShow(2);
    } else {
      setCardsToShow(1);
    }
  }, []);

  useEffect(() => {
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, [updateCardsToShow]);

  // to reset the interval of autoSlide
  function autoSlide(){
    clearInterval(interval.current)
    interval.current = setInterval(() => {
      nextSlide();
    }, 3000);

  }

  useEffect(() => {
    autoSlide()
    return () => clearInterval(interval.current);
  }, []);

  // to imitate a infinite loop of array
  const extendedMembers = [
    ...teamMembers.slice(-cardsToShow),
    ...teamMembers,
    ...teamMembers.slice(0, cardsToShow),
  ];

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (startIndex >= teamMembers.length) {
      setStartIndex(0);
    } else if (startIndex < 0) {
      setStartIndex(teamMembers.length - 1);
    }
  };

  const nextSlide = () => {
    autoSlide()
    setIsTransitioning(true);
    setStartIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    autoSlide()
    setIsTransitioning(true);
    setStartIndex((prev) => prev - 1);
  };

  // Modified to handle pagination clicks
  const handlePaginationClick = (newIndex) => {
    setIsTransitioning(true);
    setStartIndex(newIndex);
  };

  useEffect(() => {
    if (!isTransitioning) {
      if (startIndex >= teamMembers.length) {
        setStartIndex(0);
      } else if (startIndex < 0) {
        setStartIndex(teamMembers.length - 1);
      }
    }
  }, [startIndex, isTransitioning, teamMembers.length]);

  const getTranslateX = () => {
    const baseTranslate = (startIndex + cardsToShow) * (100 / cardsToShow);
    return baseTranslate;
  };
  return (
    <div className="w-full min-h-screen bg-black px-4 flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center gap-2 mb-8 sm:mb-12">
        <h1 className="text-pink text-3xl sm:text-4xl xl:text-5xl font-bold text-center">
          Meet Our Team
        </h1>
        <h2 className="text-white text-center max-w-[800px] sm:text-lg">
          Our team is made up of cloud experts, experienced trainers, and
          passionate community builders who are dedicated to helping you succeed
          in your AWS journey
        </h2>
      </div>

      <div className="relative w-full">
        <div className="overflow-hidden">
          <div
            className="flex"
            style={{
              transform: `translateX(-${getTranslateX()}%)`,
              transition: isTransitioning
                ? "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)"
                : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedMembers.map((member, index) => (
              <div
                key={index}
                className={`flex-shrink-0 px-2 sm:px-4 lg:px-6 flex items-start justify-center
                  ${
                    cardsToShow === 1
                      ? "w-full"
                      : cardsToShow === 2
                      ? "w-1/2"
                      : cardsToShow === 3
                      ? "w-1/3"
                      : "w-1/4"
                  }`}
              >
                <Team_Card
                  img={member.img}
                  name={member.name}
                  title={member.title}
                  subtitle={member.subtitle}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 px-4 sm:px-8">
        <Pagination
          count={teamMembers.length}
          currentPage={
            startIndex >= teamMembers.length
              ? 0
              : startIndex < 0
              ? teamMembers.length - 1
              : startIndex
          }
          onPageChange={handlePaginationClick}
        />
        <div className="flex gap-4">
          <button onClick={prevSlide} className="p-2">
            <Arrow_Left />
          </button>
          <button onClick={nextSlide} className="p-2">
            <Arrow_Right />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
