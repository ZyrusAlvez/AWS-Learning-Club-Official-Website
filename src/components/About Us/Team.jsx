import React, { useState, useEffect, useCallback, useRef } from "react";
import Team_Card from "./Team_Card";
import Pagination from "../UI/Pagination";
import Arrow_Left from "../UI/Arrow_Left";
import Arrow_Right from "../UI/Arrow_Right";

import aws_logo from "../../assets/aws_logo.png"
import person1 from "../../assets/Team/lead.jpg";
import person2 from "../../assets/Team/mica.jpg"
import person3 from "../../assets/Team/Bermundo, Nicole B. - Associate Secretary.jpg"
import person4 from "../../assets/Team/lance.jpg"
import person5 from "../../assets/Team/larie.jpg"
import person6 from "../../assets/Team/keihla.jpg"
import person7 from "../../assets/Team/Andrew Velandrez - Head of Creatives.jpg"
import person8 from "../../assets/Team/Sherwin P. Limosnero (Head of Graphic Design).jpg"
import person10 from "../../assets/Team/christian.jpg"
import person13 from "../../assets/Team/mickz.jpg"
import person14 from "../../assets/Team/jerico.jpg"
import person15 from "../../assets/Team/tomas.jpg"
import person16 from "../../assets/Team/francis.jpg"


const Team = () => {
  const teamMembers = [
    {
      img: person1,
      name: "Mark Anthony Hernandez",
      title: "Lead",
      subtitle: "Guides strategy and inspires team success.",
    },
    {
      img: person2,
      name: "Mica Erispe",
      title: "Executive Secretary",
      subtitle: "Handles schedules, communications, and records.",
    },
    {
      img: person3,
      name: "Nicole B. Bermundo",
      title: "Associate Secretary",
      subtitle: "Supports admin tasks and meeting coordination.",
    },
    {
      img: person4,
      name: "Lance Barreno",
      title: "Head of Innovation",
      subtitle: "Drives creative projects and forward-thinking solutions.",
    },
    {
      img: person5,
      name: "Larie Amimirog",
      title: "Head of Membership",
      subtitle: "Strengthens member relationships and growth.",
    },
    {
      img: person6,
      name: "Keihla Ysabel Cardenas",
      title: "Head of Communications",
      subtitle: "Manages messaging and enhances organizational communication.",
    },
    {
      img: person7,
      name: "Andrew Velandrez",
      title: "Head of Creatives",
      subtitle: "Leads creative direction and brand visuals.",
    },
    {
      img: person8,
      name: "Sherwin Limosnero",
      title: "Head of Graphic Design",
      subtitle: "Leads visual design and branding efforts.",
    },
    {
      img: aws_logo,
      name: "Luis Tabaranza",
      title: "Head of Programs",
      subtitle: "Leads program development and impact.",
    },
    {
      img: person10,
      name: "Christian Mchail Dela Cruz",
      title: "Marketing Director",
      subtitle: "Develops and executes marketing strategies.",
    },
    {
      img: aws_logo,
      name: "Renzo Emmanuel Ramos",
      title: "Social Media Manager",
      subtitle: "Manages online presence and audience engagement.",
    },
    {
      img: aws_logo,
      name: "Zyrus Alvez",
      title: "Web Development Specialist",
      subtitle: "Builds and maintains websites for optimal performance.",
    },
    {
      img: person13,
      name: "Mickz Jornales",
      title: "Multimedia Specialist",
      subtitle: "Crafts engaging multimedia content.",
    },
    {
      img: person14,
      name: "Jerico Daygon",
      title: "Research Coordinator",
      subtitle: "Manages research and ensures data-driven results.",
    },
    {
      img: person15,
      name: "John Rey Tomas",
      title: "Training Coordinator",
      subtitle: "Designs and delivers impactful training programs.",
    },
    {
      img: person16,
      name: "Francis Concepcion",
      title: "Training Coordinator (Game Dev)",
      subtitle: "Designs and delivers game development training programs.",
    },
    {
      img: person16,
      name: "Francis Concepcion",
      title: "Training Coordinator (Game Dev)",
      subtitle: "Designs and delivers game development training programs.",
    },
    {
      img: aws_logo,
      name: "John Carlo R. Lugatiman",
      title: "Treasurer",
      subtitle: "Oversees finances and ensures budget compliance.",
    },
    {
      img: aws_logo,
      name: "Jumel Quinajon",
      title: "Technical Project Manager",
      subtitle: "Oversees project planning and delivery.",
    },
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
    <div className="w-full bg-black px-4 flex flex-col justify-center">
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
