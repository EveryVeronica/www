import React from "react";
import ImageGrid from "./ImageGrid";
import _00 from '../assets/images/about/00.jpg';
function About() {
  return (
    <div className="container mx-auto bg-emerald-950 mt-4">
      <div className="flex flex-col w-full bg-white shadow-lg">
        {/* Top Image */}
        <div
          className="w-full h-64 bg-top bg-cover "
          style={{ backgroundImage: `url(${_00})` }}
        ></div>

        {/* Bottom Content */}
        <div className="flex flex-col w-full md:flex-row">
          {/* Date/Time Box */}
          <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 md:flex-col md:items-center md:justify-center md:w-1/4">
            <div className="md:text-3xl">July</div>
            <div className="md:text-6xl">1</div>
      
          </div>

          {/* Text Content */}
          <div className="p-4 font-normal text-gray-800 md:w-3/4">
            <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">
              เกี่ยวกับเรา
            </h1>
            <p className="leading-normal">
              Elephant Guard
              ก่อตั้งขึ้นจากความตระหนักถึงปัญหาความขัดแย้งระหว่างคนกับช้างป่าที่ทวีความรุนแรงขึ้นในหลายพื้นที่
              เราเชื่อมั่นว่าด้วยนวัตกรรมและพลังของชุมชน
              เราสามารถสร้างสมดุลและทางออกที่ยั่งยืนให้กับการอยู่ร่วมกันของคนและสัตว์ป่าได้.
            </p>

  
          </div>
        </div>
      </div>

      <ImageGrid />
    </div>
  );
}

export default About;
