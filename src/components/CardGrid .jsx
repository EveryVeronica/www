import React from 'react';
import _01 from '../assets/images/innovation/01.jpg';
import _02 from '../assets/images/innovation/02.jpg';
import _03 from '../assets/images/innovation/03.jpg';
import _04 from '../assets/images/innovation/04.jpg';
import _05 from '../assets/images/innovation/05.jpg';
import _06 from '../assets/images/innovation/06.jpg';
import _07 from '../assets/images/innovation/07.jpg';
import _08 from '../assets/images/innovation/08.jpg';
import _09 from '../assets/images/innovation/09.jpg';
import _10 from '../assets/images/innovation/10.jpg';
import _11 from '../assets/images/innovation/11.jpg';





const cards = [
  { id: 1, title: _01, date: "2025-01-05", description: "ปัญหาและความจำเป็น" },
  { id: 2, title: _02, date: "2025-01-05", description: "แนะนำระบบแจ้งเตือนอัจฉริยะ" },
  { id: 3, title: _03, date: "2025-01-05", description: "ระบบแจ้งเตือนเสาเชือกอัจฉริยะ ( EG )" },
  { id: 4, title: _04, date: "2025-01-05", description: "ตัวรับสัญญาน Server ( EG-01 )" },
  { id: 5, title: _05, date: "2025-01-05", description: "ระบบเตือนภัยช้างอัจฉริยะ ( EG-02 )" },
  { id: 6, title: _06, date: "2025-01-05", description: "ตัวรับสัญญาน Server ( EG-02 )" },
  { id: 7, title: _07, date: "2025-01-05", description: "ระบบเตือนภัยช้างอัจฉริยะ ( EG-02 )" },
  { id: 8, title: _08, date: "2025-01-05", description: "ระบบส่ง sms" },
  { id: 9, title: _09, date: "2025-01-05", description: "ระบบเตือนภัยช้างอัจฉริยะ ( node )" },
  { id: 10, title: _10, date: "2025-01-05", description: "ระบบ orbit-map" },
  { id: 11, title: _11, date: "2025-01-05", description: "ทีมอาสา" },


 
];

const CardGrid = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-row flex-wrap -mx-2">
        {cards.map(card => (
          <div key={card.id} className="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
            <div className="relative bg-white rounded border">
              <picture className="block bg-gray-200 border-b">
                <img
                  className="block"
                  src={card.title}
                  alt={card.title}
                />
              </picture>
              <div className="p-4">
                <h3 className="text-lg font-bold">
{/*                   <a className="stretched-link" href="#" title={card.title}>
                    {card.title}
                  </a> */}
                </h3>
                <time className="block mb-2 text-sm text-gray-600" dateTime={card.date}>
                  {new Date(card.date).toLocaleDateString()}
                </time>
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
