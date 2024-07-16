import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

function ChiangmaiKoreaStyle() {
  const [tripsData, setTripsData] = useState([]);

  const getTripsData = async () => {
    const showTripsData = await axios.get(
      "http://localhost:4001/trips?keywords="
    );
    setTripsData(showTripsData.data.data[4]);
  };

  useEffect(() => {
    getTripsData();
  }, []);

  return (
    <section className="w-full h-full">
      <Header />
      <main>
        <div className="max-w-full md:max-w-[1200px] max-h-full md:max-h-fit pt-3 md:pt-5 pr-5 md:pr-10 pb-3 md:pb-5 pl-5 md:pl-10 mb-5 bg-cyan-50 shadow-md shadow-slate-200 rounded-xl mx-auto font-kanit text-left">
          <div className="flex flex-col md:flex-col md:gap-5">
            <h2 className="text-3xl text-[#3D4245] font-bold mt-5 mb-5">
              {tripsData.title}
            </h2>

            {tripsData.photos && tripsData.photos.length > 0 && (
              <img
                src={tripsData.photos[0]}
                className="w-full md:w-2/3 rounded-xl mx-auto"
                alt="changmai"
              />
            )}
            <p className="mt-5 text-[#4f4f50]">{tripsData.description}</p>
            <a href={tripsData.url} className="text-sky-500 underline">
              อ่านต่อได้ที่...
            </a>
            <div className="flex flex-col gap-5">
              {tripsData.photos &&
                tripsData.photos.length > 0 &&
                tripsData.photos.slice(1).map((image, index) => {
                  let title = "";
                  let caption = "";
                  let detail = "";
                  if (index === 0) {
                    title = "One Nimman";
                    caption =
                      "ความอลังกาลของสถาปัตยกรรมยุโรปประยุกต์กับแบบล้านนา";
                    detail =
                      "จิบกาแฟร้อน ๆ รับยามเช้ากับร้านกาแฟเชียงใหม่ร้านแรกไปแล้ว เราก็มาเดินเล่นที่เที่ยวเชียงใหม่อย่าง One Nimman กันต่อ เป็นแลนด์มาร์กและที่เดินสุดฮิตของนักท่องเที่ยวที่มาเที่ยวเชียงใหม่เลยก็ว่าได้ เป็นตึกสูงใหญ่ตั้งอยู่ใกล้แยกรินคำ จะเห็นนาฬิกาเรือนใหญ่มาแต่ไกล เป็นสถาปัตยกรรมยุโรปประยุกต์กับแบบล้านนา ถือเป็นจุดถ่ายรูปเชียงใหม่ที่ใครมาแล้วต้องมาถ่ายรูปให้ได้เลยละ นอกจากจะมีมุมถ่ายรูปแล้ว ยังมีโซน One Street Food Market ที่รวบรวม Street Food ชื่อดังมาไว้รวมกันที่นี่ มากกว่า 50 ร้านอีกด้วย บอกเลยว่ามีทุกสัญชาติ ไทย ญี่ปุ่น อิตาเลียน มีให้เลือกกินเยอะมาก ด้านบนจะเป็นร้านขายของฝากของที่ระลึกมากมาย ของแฮนด์เมด ก็มีเยอะเหมือนกัน";
                  } else if (index === 1) {
                    title = "8 days a week";
                    caption = "มุมนี้เกาหลีสุด ๆ";
                    detail =
                      "เดินถ่ายรูปหาของกินเล่นกันแล้ว ก็มาแวะจิบชาที่ร้าน 8 days a week ต่อเลย ร้านมีทั้งโซนด้านนอกและด้านใน เพิ่งได้รับการปรับปรุงเป็นแบบโฉมใหม่ไม่นานนี้เอง บรรยากาศล้อมรอบไปด้วยกระจก ตกแต่งโทนน้ำตาลแบบเกาหลี มีที่ให้นั่งถ่ายรูปเยอะ มุมมหาชนก็ต้องเป็นบริเวณต้นไม้ใหญ่ ด้านหลังเป็นบานกระจกน้ำตาลเข้มกับผนังขาว นึกว่าหลุดไปอยู่เกาหลีจริง ๆ ค่ะ คาเฟ่เชียงใหม่ร้านนี้เป็นแนวโปร่ง โล่ง สบาย สดใส โทนสีขาว-น้ำตาล ด้านในบรรยากาศก็โล่งสบาย นั่งทำงานดูวิวผ่านกระจกได้ หรือจะนั่งบริเวณหน้าเคาน์เตอร์ เป็นโซฟาก็สบายไม่แพ้กัน ร้านนี้มีหลายเมนูให้เลือกสรร ทั้งเค้กและเครื่องดื่ม เราได้ลอง “Rosie” (70 บาท) เป็นเมนู Non Coffee สีชมพูสดใส รสชาติเป็นลิ้นจี่กับโซดาซ่า ๆ อร่อยเข้ากันดี ออกเปรี้ยวหวาน สดชื่น ๆ เสียดายมากเค้กที่อยากกินหมดแล้ว เพราะเค้กที่นี่ขายดีมาก ถือว่าเป็นร้านกาแฟเชียงใหม่อีกร้านที่มีมุมถ่ายรูปแบบเกา ๆ อีกร้านเลย";
                  } else if (index === 2) {
                    title = "TASTE ATELIER Weave Artisan Society";
                    caption = "ร้านกว้างขวางมาก";
                    detail =
                      'ร้านกาแฟเชียงใหม่ที่ตกแต่งเป็นคาเฟ่สไตล์เกาหลีอีกร้านนึงที่ห้ามพลาด ร้านนี้อยู่ในโครงการ Weave Artisan Society Chiangmai Thailand ตกแต่งแนวลอฟต์แบบโมเดิร์นอาร์ต จะเป็นแนวดิบ ๆ ผนังปูนเปลือยอิฐยังทาสีไม่ครบ มีร่องรอยการใช้งานจริง เพราะถูกดัดแปลงมาจาก โรงน้ำแข็งเก่า บริเวณร้านเปิดกว้าง มีที่จอดรถยนต์หน้าร้าน เคาน์เตอร์บาร์แบบโล่ง ๆ ที่นั่งเยอะ หลายมุมหลายแบบให้เลือกนั่ง เป็นร้านแบบไม่มีเครื่องปรับอากาศ แต่ไม่ร้อนเลยเมนูที่ได้ลองก็คือ "Starter Taste" (95 บาท) เป็นเมนูแนะนำของที่นี่ ดื่มด่ำไปกับกาแฟอเมริกาโน่เข้ม ๆ รสชาติหอม ตัดกับส้มแมนดาลินซีกที่เป็นซิกเนเจอร์ของทางร้าน รสชาติเข้ากันได้ดีแบบไม่น่าเชื่อ ทั้งเข้มทั้งสดช่ืนในเวลาเดียวกัน ไม่ผิดหวังเลยที่อยากมาร้านนี้มาก ๆ นอกจากมุมถ่ายรูปคาเฟ่แล้ว หน้าร้านก็มีร้านขายดอกไม้แบบแฮนด์เมด ทั้งฮิปทั้งเท่ ต้องให้ร้านนี้เลย';
                  }
                  return (
                    <div key={index}>
                      <h2 className="text-3xl text-[#3D4245] font-bold mt-5 mb-10">
                        {index + 1 + "."} {title}
                      </h2>
                      <img
                        src={image}
                        className="w-full md:w-2/3 rounded-xl mx-auto"
                        alt={`Image ${index}`}
                      />
                      <p className="text-center text-gray-600 italic">
                        {caption}
                      </p>
                      <p className="mt-5 text-[#4f4f50]">{detail}</p>
                    </div>
                  );
                })}
              <p className="text-right text-sky-500">
                ที่มาจาก: {tripsData.url}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}
export default ChiangmaiKoreaStyle;
