import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white px-6 py-4">
      <div className="flex justify-between items-center mx-auto">
   

        <Link to="/" >
             <div className="flex text-2xl font-bold">
          <img src={logo} alt="My Logo" className="h-10" />
          <span className="ml-2">Elephant Guard</span>
        </div>
        
        </Link>

        {/* desktop menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/about" className="hover:text-gray-200">เกี่ยวกับเรา</Link></li>
          <li><Link to="/vision" className="hover:text-gray-200">วิสัยทัศน์</Link></li>
          <li><Link to="/community-role" className="hover:text-gray-200">นวัตกรรม</Link></li>
          <li><Link to="/orbit-map" className="hover:text-gray-200">เชื่อมกับเทคโนโลยี</Link></li>
        </ul>

        {/* mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2">
    

          <li><Link to="/" className="block px-4 py-2 bg-blue-700 rounded hover:bg-blue-500">หน้าแรก</Link></li>
          <li><Link to="/about" className="block px-4 py-2 bg-blue-700 rounded hover:bg-blue-500">เกี่ยวกับเรา</Link></li>
          <li><Link to="/vision" className="block px-4 py-2 bg-blue-700 rounded hover:bg-blue-500">วิสัยทัศน์</Link></li>
          <li><Link to="/community-role" className="block px-4 py-2 bg-blue-700 rounded hover:bg-blue-500">นวัตกรรม</Link></li>
          <li><Link to="/orbit-map" className="block px-4 py-2 bg-blue-700 rounded hover:bg-blue-500">เชื่อมกับเทคโนโลยี</Link></li>

        </ul>
      )}
    </nav>
  );
}
