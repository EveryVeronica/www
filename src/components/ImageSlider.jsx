import { useState } from "react";
import _01 from '../assets/images/activity/01.jpg';
import _02 from '../assets/images/activity/02.jpg';
import _03 from '../assets/images/activity/03.jpg';
import _04 from '../assets/images/activity/04.jpg';
import _05 from '../assets/images/activity/05.jpg';
import _06 from '../assets/images/activity/06.jpg';




const images = [
  { src: _01, caption: "ดร.ศุภกิจ วินิตพรสวรรค์ มาดูการสาธิตการทำงานของระบบ" },
  { src: _02, caption: "ดร.ศุภกิจ วินิตพรสวรรค์ มาดูการสาธิตการทำงานของระบบ"},
  { src: _03, caption: "การติดตั้ง node" },
  { src: _04, caption: "ผู้นำชุมชนกับชาวบ้านร่วมกันลาดตะเวนติดตามเหตุการณ์" },
  { src: _05, caption: "ชาวบ้านเฝ้าระวังช้างป่า" },
  { src: _06, caption: "กลางคืนที่แสนจะอันตราย" },


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
