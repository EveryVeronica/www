import React from 'react';
import _01 from '../assets/images/innovation/01.jpg';
import _02 from '../assets/images/innovation/02.jpg';
import _03 from '../assets/images/innovation/03.jpg';
import _04 from '../assets/images/innovation/04.jpg';




const cards = [
  { id: 1, title: _01, date: "2025-01-05", description: "ระบบเตือนภัยช้างอัจฉริยะ ( EG-01 )" },

 
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
