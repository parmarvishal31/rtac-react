import { Carousel } from "flowbite-react";
import React, { useRef, useEffect } from "react";
import CoverOne from "../assets/cover1.jpg";

function NewSlider() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const calculateCarouselHeight = () => {
      const images = carouselRef.current.querySelectorAll(".carousel-image");
      let maxHeight = 0;
      images.forEach((image) => {
        maxHeight = Math.max(maxHeight, image.offsetHeight);
      });
      carouselRef.current.style.height = `${maxHeight}px`;
    };

    calculateCarouselHeight();
    window.addEventListener("resize", calculateCarouselHeight);
    return () => window.removeEventListener("resize", calculateCarouselHeight);
  }, []);

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <Carousel showIndicators={false}>
        <div>
          <img className="w-full carousel-image" src={CoverOne} alt="cover1" />
        </div>
        <div>
          <img className="w-full carousel-image" src={CoverOne} alt="cover1" />
        </div>
        <div>
          <img className="w-full carousel-image" src={CoverOne} alt="cover1" />
        </div>
        <div>
          <img className="w-full carousel-image" src={CoverOne} alt="cover1" />
        </div>
      </Carousel>
    </div>
  );
}

export default NewSlider;
