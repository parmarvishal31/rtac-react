import React, { useState, useEffect } from 'react';
import One from '../assets/WEB_SIITE_TITLE_01.jpg';
import Two from '../assets/WEB_SIITE_TITLE_02.jpg';
import Three from '../assets/WEB_SIITE_TITLE_03.jpg';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

const slides = [
  <img src={One} alt="Slide 1" />,
  <img src={Two} alt="Slide 2" />,
  <img src={Three} alt="Slide 3" />,
];

function SliderTwo() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

 
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => clearInterval(intervalId); 
  }, [currentSlide]); 

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-md">
        <ul className="flex transition-transform duration-300 ease-in-out transform" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <li key={index} className="w-full flex-shrink-0">
              {slide}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={prevSlide} className="absolute text-2xl md:text-3xl left-0 top-1/2 transform -translate-y-1/2 bg-transparent">
        <FaChevronCircleLeft className=" opacity-50" />
      </button>
      <button onClick={nextSlide} className="absolute text-2xl md:text-3xl right-0 top-1/2 transform -translate-y-1/2 bg-transparent">
        <FaChevronCircleRight className="opacity-50" />
      </button>
    </div>
  );
}

export default SliderTwo;
