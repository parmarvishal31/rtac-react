// slider.js
import { Carousel } from "flowbite-react";
import CoverOne from "../assets/cover1.jpg";
function Slider() {
  const carouselTheme = {
    root: {
      base: "relative h-full w-full",
      leftControl: "hidden",
      rightControl: "hidden",
    },
    indicators: {
      // wrapper: "hidden", // Hide the indicators
    },
    item: {
      base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
      wrapper: {
        off: "w-full flex-shrink-0 transform cursor-default snap-center",
        on: "w-full flex-shrink-0 transform cursor-grab snap-center",
      },
    },
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
      snap: "snap-x",
    },
  };
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel theme={carouselTheme}>
        <img src={CoverOne} alt="..." />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
      </Carousel>
    </div>
  );
}

export default Slider;
