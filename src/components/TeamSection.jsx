import React from "react";
import net from '../assets/images/team/net.jpg';
import uti from '../assets/images/team/uti.jpg';

import chomporn from '../assets/images/team/chomporn.jpg';
import damrongrit from '../assets/images/team/damrongrit.jpg';
import sittichai from '../assets/images/team/sittichai.jpg';
import thanapon from '../assets/images/team/thanapon.jpg';
import lak from '../assets/images/team/lak.jpg';
import nopic from '../assets/images/team/nopic.png';

import pyb from '../assets/images/team/pyb.jpg';
import tom from '../assets/images/team/tom.jpg';
import sak from '../assets/images/team/sak.jpg';
import kn from '../assets/images/team/kn.jpg';

import mt from '../assets/images/team/mt.jpg';
import hk from '../assets/images/team/hk.jpg';
import mb from '../assets/images/team/mb.jpg';









const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#718096"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-github"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#718096"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-twitter"
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#718096"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-instagram"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);



const TeamSection = () => {
  return (
    <div className="mb-16 ">
      <div className="container flex justify-center mx-auto p-10">
   
          <p className="text-white text-lg text-center font-normal pb-3">ทีม : Elephant Guard ร่วมแก้ปัญหาช้างกับคน เพื่ออนาคตที่ยั่งยืน</p>
  
    
      </div>
      <div className="w-full bg-gray-100 px-10 pt-10">



        
        <div className="container mx-auto ">
          <div
            role="list"
            aria-label="Behind the scenes People"
            className="flex flex-wrap justify-around items-center"
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                role="listitem"
                className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 p-2"
              >
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src={member.image}
                        alt={`Display Picture of ${member.name}`}
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <h1 className="font-bold text-center mb-1">{member.name}</h1>
                    <p className="text-gray-800 text-sm text-center">{member.role}</p>
                    <p className="text-gray-800 text-xs text-center">
                      {member.description}
                    </p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      {member.social.map((icon, i) => (
                

                        <a key={i} href="#" className="mx-5" aria-label={icon.label}>
  {React.createElement(icon.svg)}
</a>


                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
















      </div>


      <div className="h-fit p-4">



  {/* ข้อมูลพื้นฐาน */}
  <div className="mb-8 text-white ">
    <p className="text-lg leading-relaxed">
      ก่อตั้งขึ้นจากการรวมตัวของ <strong>นักพัฒนาอิสระ, อาสาสมัคร และผู้นำชุมชน</strong> ในพื้นที่ <strong>บ้านเขาไม้นวล หมู่ 18 ต.ระบำ อ.ลานสัก จ.อุทัยธานี</strong> ซึ่งเป็นพื้นที่ที่ประสบปัญหาความขัดแย้งระหว่างคนกับช้างป่าอย่างต่อเนื่อง
    </p>
  </div>

  {/* ช่องทางการติดต่อ */}

    <h2 className="text-2xl font-bold text-white mb-4">ช่องทางการติดต่อ</h2>
    <ul className="space-y-2 text-white">
      <li>
        <span className="font-semibold">ที่อยู่ :</span> บ้านเขาไม้นวล ม.18 ต.ระบำ อ.ลานสัก จ.อุทัยธานี 61160
      </li>
      <li>
        <span className="font-semibold">โทรศัพท์ :</span> 084-1754724
      </li>
      <li>
        <span className="font-semibold">อีเมล :</span> veronica.in.th@gmail.com
      </li>
      <li>
        <span className="font-semibold">Facebook Page :</span>{" "}
        <a
          href="https://www.facebook.com/profile.php?id=61577859430483"
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          ร่วมแก้ปัญหาช้างกับคน Elephant Guard
        </a>
      </li>
    </ul>
  </div>


      </div>
    
  );
};

const teamMembers = [


        {
    name: "นายอนุพันธ์ สารสุวรรณ์",
    role: "ที่ปรึกษากิตติมศักดิ์",
    description:
      "( กำนันตำบลระบำ )",
    image:
      kn,
    social: [

    ],
  },






        {
    name: "นายเพื่มศักดิ์ กนิษฐ์ชาติ",
    role: "ที่ปรึกษากิตติมศักดิ์",
    description:
      "( เขตุอนุรักษ์พันธุ์สัตว์ป่าห้วยขาแข้ง )",
    image:
      hk,
    social: [

    ],
  },

        {
    name: "นางจันจิรา พิลึก",
    role: "ที่ปรึกษากิตติมศักดิ์",
    description:
      "( รองนายก อบต.ระบำ )",
    image:
      mb,
    social: [

    ],
  },



          {
    name: "นายอุดม กลับสว่าง",
    role: "ที่ปรึกษากิตติมศักดิ์",
    description:
      "( มูลนิธิสืบนาคะเสถียร )",
    image:
      mt,
    social: [

    ],
  },









          {
    name: "นายสุชาติ อาภัสโรสกุล",
    role: "ที่ปรึกษากิตติมศักดิ์",
    description:
      "( - )",
    image:
      nopic,
    social: [

    ],
  },

      {
    name: "นายอติวุฒิ ทับทิมไทย",
    role: "ที่ปรึกษา",
    description:
      "( UTI )",
    image:
      uti,
    social: [

    ],
  },
        {
    name: "นายประสพโชค  จรูญพันธ์เกษม",
    role: "ที่ปรึกษา",
    description:
      "( - )",
    image:
      tom,
    social: [

    ],
  },



        {
    name: "null",
    role: "ฝ่ายอบรม & ถ่ายทอดความรู้",
    description:
      "( - )",
    image:
      nopic,
    social: [

    ],
  },

    {
    name: "นายชาตรี เนียมหอม",
    role: "ฝ่ายประสานงานชุมชน",
    description:
      "( ผู้ใหญ่บ้าน )",
    image:
      pyb,
    social: [

    ],
  },
      {
    name: "นายลา ศรีสวัสดิ์",
    role: "ฝ่ายประสานงานชุมชน",
    description:
      "( อ.บ.ต )",
    image:
      nopic,
    social: [

    ],
  },

      {
    name: "นายปรีชา แหวนประดับ",
    role: "ฝ่ายประสานงานชุมชน",
    description:
      "( - )",
    image:
      nopic,
    social: [

    ],
  },

      {
    name: "นายพนอ อ่อนน้อม",
    role: "ฝ่ายประสานงานชุมชน",
    description:
      "( - )",
    image:
      nopic,
    social: [

    ],
  },
      {
    name: "นายธเนศ เนียมหอม",
    role: "หัวหน้าทีม",
    description:
      "( หมู่ 18 )",
    image:
      net,
    social: [

    ],
  },
    {
    name: "นายดำรงค์ฤทธิ์ สิงโตทอง",
    role: "ทีมภาคสนาม",
    description:
      "( หมู่ 18 )",
    image:
      damrongrit,
    social: [

    ],
  },

    {
    name: "นายสิทธิชัย กุลเดช",
    role: "ทีมภาคสนาม",
    description:
      "( หมู่ 15 )",
    image:
      sittichai,
    social: [

    ],
  },
    {
    name: "นายชมพร เอี่ยมชม",
    role: "ทีมภาคสนาม",
    description:
      "( หมู่ 18 )",
    image:
      chomporn,
    social: [

    ],
  },
      {
    name: "นายธนพล อินทุพันธ์",
    role: "ทีมภาคสนาม",
    description:
      "( หมู่ 18 )",
    image:
     thanapon,
    social: [
  
    ],
  },
        {
    name: "นายวีรยุทธ นิคมทัศน์",
    role: "ทีมภาคสนาม",
    description:
      "( หมู่ 15 )",
    image:
     nopic,
    social: [
  
    ],
  },

      {
    name: "นายเศรษฐกานต์ แสนสีมนต์",
    role: "ทีมภาคสนาม",
    description:
      "( หมู่ 18 )",
    image:
      lak,
    social: [

    ],
  },
        {
    name: "นายวรากร อ่อนน้ำเที่ยง",
    role: "ทีมภาคสนาม",
    description:
      "( หมู่ 18 )",
    image:
      nopic,
    social: [

    ],
  },

        {
    name: "นายปรีชา ปานน้อย",
    role: "ทีมภาคสนาม",
    description:
      "( หมู่ 18 )",
    image:
      nopic,
    social: [

    ],
  },

          {
    name: "นายสัมฤทธิ์ สงชุมแสง",
    role: "ทีมภาคสนาม",
    description:
      "( หมู่ 18 )",
    image:
      nopic,
    social: [

    ],
  },

            {
    name: "นายประจิม วงค์คิรี",
    role: "ทีมภาคสนาม",
    description:
      "( หมู่ 18 )",
    image:
      nopic,
    social: [

    ],
  },

              {
    name: "นายคำพัน บุตรตะมะ",
    role: "ทีมภาคสนาม",
    description:
      "( หมู่ 18 )",
    image:
      nopic,
    social: [

    ],
  },

{
    name: "นายสมรักษ์  เปลี่ยนพิทักษ์",
    role: "ทีมภาคสนาม",
    description:
      "( หมู่ 18 )",
    image:
      nopic,
    social: [

    ],
  },

  
{
    name: "นายแสนศักดิ์ เนียมหอม",
    role: "ทีมภาคสนาม",
    description:
      "( หมู่ 3 )",
    image:
      sak,
    social: [

    ],
  },

  {
    name: "นายวันชัย ทองคำ",
    role: "ทีมภาคสนาม",
    description:
      "( หมู่ 3 )",
    image:
      nopic,
    social: [

    ],
  },

  
  {
    name: "นายแสวง จันทร์หอม",
    role: "ทีมภาคสนาม",
    description:
      "( หมู่ 3 )",
    image:
      nopic,
    social: [

    ],
  },

  
  {
    name: "นายประมาณ แหยมน้อย",
    role: "ทีมภาคสนาม",
    description:
      "( หมู่ 3)",
    image:
      nopic,
    social: [

    ],
  },

  
  {
    name: "นายสนธยา โกสุมสวรรค์",
    role: "ทีมภาคสนาม",
    description:
      "( หมู่ 3 )",
    image:
      nopic,
    social: [

    ],
  },

  
  {
    name: "นายธงชัย รงค์ทอง",
    role: "ทีมภาคสนาม",
    description:
      "( หมู่ 3 )",
    image:
      nopic,
    social: [

    ],
  },
  
  // เพิ่มสมาชิกอื่น ๆ ตามรูปแบบนี้
];


export default TeamSection;
