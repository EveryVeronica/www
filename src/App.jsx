import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Vision from './components/Vision';
import CommunityRole from './components/CommunityRole';
import OrbitMap from './components/OrbitMap';
import Home from './components/Home';
import "./App.css"; // ✅ นำเข้าไฟล์ CSS ที่นี่





const App = () => {
  return (
    <Router>
      <div className="app flex flex-col min-h-screen bg-green-600">
        <Header />

        {/* Main Content Area */}
        <main className="flex items-center justify-center bg-green-600 h-full">
          <div className='w-[1400px] '>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/community-role" element={<CommunityRole />} />
            <Route path="/orbit-map" element={<OrbitMap />} />
          </Routes>
           <Footer />
           </div>
        </main>

       
      </div>
    </Router>
  );
};

const Header = () => (
  <header>
    <Navbar />
  </header>
);

const Footer = () => (
  <footer className='container bg-black w-full text-white text-center py-4 mt-4 mb-4'>



   
  </footer>
);

export default App;
