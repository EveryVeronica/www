import { useState } from "react";
import _01 from '../assets/images/activity/01.jpg';
import _02 from '../assets/images/activity/02.jpg';
import _03 from '../assets/images/activity/03.jpg';
import _04 from '../assets/images/activity/04.jpg';
import _05 from '../assets/images/activity/05.jpg';
import _06 from '../assets/images/activity/06.jpg';
import _07 from '../assets/images/activity/07.jpg';
import _08 from '../assets/images/activity/08.jpg';
import _09 from '../assets/images/activity/09.jpg';
import _10 from '../assets/images/activity/10.jpg';
import _11 from '../assets/images/activity/11.jpg';
import _12 from '../assets/images/activity/12.jpg';
import _13 from '../assets/images/activity/13.jpg';
import _14 from '../assets/images/activity/14.jpg';
import _15 from '../assets/images/activity/15.jpg';
import _16 from '../assets/images/activity/16.jpg';
import _17 from '../assets/images/activity/17.jpg';
import _18 from '../assets/images/activity/18.jpg';
import _19 from '../assets/images/activity/19.jpg';
import _20 from '../assets/images/activity/20.jpg';
import _21 from '../assets/images/activity/21.jpg';
import _22 from '../assets/images/activity/22.jpg';
import _23 from '../assets/images/activity/23.jpg';
import _24 from '../assets/images/activity/24.jpg';
import _25 from '../assets/images/activity/25.jpg';
import _26 from '../assets/images/activity/26.jpg';





const images = [
  { src: _01, caption: "Caption 1" },
  { src: _02, caption: "Caption 2" },
  { src: _03, caption: "Caption 3" },
  { src: _04, caption: "Caption 4" },
  { src: _05, caption: "Caption 5" },
  { src: _06, caption: "Caption 6" },
  
/*   { src: _07, caption: "Caption 7" },
  { src: _08, caption: "Caption 8" },
  { src: _09, caption: "Caption 9" },
  { src: _10, caption: "Caption 10" },
  { src: _11, caption: "Caption 11" },
  { src: _12, caption: "Caption 12" },
  { src: _13, caption: "Caption 13" },
  { src: _14, caption: "Caption 14" },
  { src: _15, caption: "Caption 15" },
  { src: _16, caption: "Caption 16" },
  { src: _17, caption: "Caption 17" },
  { src: _18, caption: "Caption 18" },
  { src: _19, caption: "Caption 19" },
  { src: _20, caption: "Caption 20" },
  { src: _21, caption: "Caption 21" },
  { src: _22, caption: "Caption 22" },
  { src: _23, caption: "Caption 23" },
  { src: _24, caption: "Caption 24" },
  { src: _25, caption: "Caption 25" },
  { src: _26, caption: "Caption 26" }, */
];


export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  const goToSlide = (index) => setCurrent(index);

  return (
    <div className="relative w-full mx-auto">
      {/* Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`${
            index === current ? "block" : "hidden"
          } transition-opacity duration-1000 ease-in-out h-[400px]` }
        >
          <img
            src={image.src}
            alt={`Slide ${index}`}
            className="w-full object-cover h-full"
          />
          <div className="absolute bottom-0 left-0 w-full text-left text-white text-sm bg-black bg-opacity-40 p-2">
            {image.caption}
          </div>
        </div>
      ))}




      {/* Prev & Next buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 hover:bg-opacity-30"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 hover:bg-opacity-30"
      >
        ❯
      </button>


    </div>
  );
}
