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
  <footer className='container bg-black w-full text-white text-left py-4 mt-4 mb-4'>
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
   
  </footer>
);

export default App;
