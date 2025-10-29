import React from 'react'


import _private from '../assets/images/organization/private.jpg';
import _community from '../assets/images/organization/community.jpg';


function MyBlog() {
  return (
 
  <div className="container mx-auto bg-emerald-950 mt-4">
    <div >
      <h1 className="text-2xl font-black text-white p-4 md:px-12">
    
Elephant Guard : ร่วมแก้ปัญหาช้างกับคน
เพื่ออนาคตที่ยั่งยืน  เราเป็นกลุ่มอาสาภาคเอกชน ทำกิจกรรมเพื่อสร้างประโยชน์ให้ชุมชน พร้อมนำนวัตกรรมและเทคโนโลยีมาทดลองใช้ เพื่อแก้ปัญหาต่าง ๆ อย่างสร้างสรรค์


      </h1>
    </div>
    <div className="flex flex-wrap px-6">
      <div className="w-full lg:w-1/2 md:px-4 lg:px-6 py-5">
        <div className="bg-white hover:shadow-xl">
          <div>
            <img
              src={_private}
              alt=""
              className="h-56 w-full border-white border-8 hover:opacity-25"
            />
          </div>
          <div className="px-4 py-4 md:px-10">
            <h1 className="font-bold text-lg">องค์กรเอกชนอิสระ</h1>
            <p className="py-4">
            เทคโนโลยี IoT ( Internet of Things ):จะเข้ามาช่วยในเรื่องของการ ตรวจจับและแจ้งเตือนช้างป่าได้อย่างรวดเร็วและ แม่นยำ ซึ่งจะช่วยแก้ไขข้อจำกัดของระบบเดิม ได้แก่ การแจ้งเตือนล่าช้า และการเฝ้าระวังที่ไม่ครอบคลุม ตลอด 24 ชั่วโมง ทำให้เจ้าหน้าที่และชุมชนมีเวลาเตรียมรับมือและผลักดันช้างได้อย่างทันท่วงที ลดความเสียหายต่อพืชผล ทรัพย์สิน และอันตรายต่อชีวิต
            </p>




            <div className="flex flex-wrap pt-8">
              <div className="w-full md:w-1/3 text-sm font-medium">JULY 1 ,2025</div>
              <div className="w-2/3">

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 md:px-4 lg:px-6 py-5">
        <div className="bg-white hover:shadow-xl">
          <div>
            <img
              src={_community}
              alt=""
              className="h-56 w-full border-white border-8 hover:opacity-25"
            />
          </div>
          <div className="px-4 py-4 md:px-10">
            <h1 className="font-bold text-lg">เครือข่ายชุมชน</h1>
            <p className="py-4">
               โครงการ Elephant Guard  ไม่เพียงใช้เทคโนโลยี แต่เน้นการบูรณาการความร่วมมือจากชุมชนเป็นสำคัญ โดยการมีส่วนร่วมของชาวบ้านจะช่วยในด้านต่าง ๆ ดังนี้:.
                  
            </p>
         <div className="max-w-3xl mx-auto p-4">
  <h2 className=" font-semibold mb-4">1. การสำรวจและวางแผนอย่างแม่นยำ:</h2>
  <p className="mb-6  leading-relaxed">
    ชุมชนมีความรู้และประสบการณ์เชิงพื้นที่ รู้จักเส้นทางที่ช้างมักใช้ และจุดเสี่ยงต่าง ๆ ซึ่งจะช่วยให้การติดตั้งระบบมีประสิทธิภาพสูงสุด
  </p>
</div>


<div className="max-w-3xl mx-auto p-4">
  <h2 className=" font-semibold mb-4">2. การติดตั้งและบำรุงรักษาระบบในพื้นที่:</h2>
  <p className="mb-6  leading-relaxed">
    อาสาสมัครชุมชนสามารถร่วมในการติดตั้งอุปกรณ์ และดูแลรักษาระบบเบื้องต้น ลดภาระการพึ่งพาหน่วยงานภายนอก
  </p>
</div>


<div className="max-w-3xl mx-auto p-4">
  <h2 className=" font-semibold mb-4">3. การรับมืออย่างมีประสิทธิภาพ:</h2>
  <p className="mb-6 leading-relaxed">
   ชาวบ้านที่ผ่านการฝึกอบรมจะสามารถรับแจ้งเตือนและปฏิบัติการผลักดันช้างในพื้นที่ของตนได้อย่างปลอดภัย ทันท่วงที และลดความเสี่ยงของการเผชิญหน้าโดยไม่พร้อม
  </p>
</div>


<div className="max-w-3xl mx-auto p-4">
  <h2 className=" font-semibold mb-4">4. ความยั่งยืนของโครงการ:</h2>
  <p className="mb-6  leading-relaxed">
   การถ่ายทอดองค์ความรู้และเทคนิคให้กับชุมชนในระยะยาว จะทำให้ชุมชนสามารถดูแลระบบได้ด้วยตนเอง ลดการพึ่งพาภายนอก และขยายผลสู่หมู่บ้านใกล้เคียงได้ในอนาคต
  </p>
</div>


            <div className="flex flex-wrap pt-8">
              <div className="w-full md:w-1/3 text-sm font-medium">JULY 1 ,2025</div>
              <div className="w-2/3">
   
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  )
}

export default MyBlog
