import { Carousel } from "flowbite-react";
import React from "react";
import CoverOne from "../assets/cover-367-224.jpg";
function NewSlider() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {/* <div>
          <img className="w-full" src={CoverOne} />
        </div> */}
        <div>
          <img className="w-full" src={CoverOne} />
        </div>
        <div>
          <img className="w-full" src="https://placehold.jp/367x224.png" />
        </div>
        <div>
          <img className="w-full" src="https://placehold.jp/367x224.png" />
        </div>
        {/* <div>
          <img className="w-full" src={CoverOne} />
        </div>
        <div>
          <img className="w-full" src={CoverOne} />
        </div> */}
      </Carousel>
    </div>
  );
}

export default NewSlider;
