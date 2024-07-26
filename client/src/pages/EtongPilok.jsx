import axios from "axios";
import { useState, useEffect } from "react";

function EtongPilok() {
  const [tripsData, setTripsData] = useState([]);

  const getTripsData = async () => {
    const showTripsData = await axios.get(
      "http://localhost:4001/trips?keywords="
    );
    setTripsData(showTripsData.data.data[3]);
  };

  useEffect(() => {
    getTripsData();
  }, []);

  return (
    <main className="w-full h-full flex flex-col items-center font-kanit">
      <section className="w-full lg:w-[1200px] h-full mt-5 pt-3 lg:pt-5 pr-5 lg:pr-10 pb-3 lg:pb-5 pl-5 lg:pl-10 mb-5 bg-cyan-50 drop-shadow-md rounded-xl text-left">
        <div className="flex flex-col lg:flex-col md:gap-5">
          <h1 className="lg:w-3/4 lg:text-3xl text-2xl text-blue-500 font-extrabold mt-5 mb-5">
            {tripsData.title} &#128525;
          </h1>

          {tripsData.photos && tripsData.photos.length > 0 && (
            <img
              src={tripsData.photos[0]}
              className="w-full lg:w-2/4 rounded-xl mx-auto drop-shadow-lg"
              alt="etong-pilok"
            />
          )}
          <div className="flex flex-col items-center justify-center gap-5">
            <p className="mt-5 text-[#4f4f50]">{tripsData.description}</p>
          </div>
          <div className="flex flex-col gap-5">
            {tripsData.photos &&
              tripsData.photos.length > 0 &&
              tripsData.photos.slice(1).map((image, index) => {
                let title = "";
                let caption = "";
                let detail = "";
                if (index === 0) {
                  title = "สะพานไม้";
                  caption = "เดินเที่ยวสะพานไม้";
                  detail =
                    "หลังจากที่ผ่านมาได้ 399 โค้ง เราก็ได้เจอกับหมู่บ้านเล็ก ๆ น่ารักอย่าง “บ้านอีต่อง เหมืองปิล็อก” จุดหมายปลายทางของเราทริปนี้ ขอบอกเลยว่าบรรยากาศที่นี่เงียบสงบ แต่ก็ยังมีความน่ารักทักทายเราอยู่เป็นระยะ ๆ หลังจากเราที่ไปเก็บของในที่พักเรียบร้อย ก็มาเดินเล่นตรงสะพานที่มีป้ายไม้ห้อยอยู่ ที่ใครเห็นก็ต้องร้องอ๋อค่ะ เพราะถือเป็นอีกหนึ่งกิมมิกที่ทุกคนเห็นแล้วต้องรู้ว่าเป็น บ้านอีต่อง เหมืองปิล็อก";
                } else if (index === 1) {
                  title = "น้ำตกจ๊อกกระดิ่น";
                  caption = "บรรยากาศน้ำตกจ๊อกกระดิ่น";
                  detail =
                    '“น้ำตกจ๊อกกระดิ่น” ที่ตั้งอยู่ในอุทยานแห่งชาติทองผาภูมิ โดยชื่อจ๊อกกระดิ่นเพี้ยนเสียงมาจากคำว่า "ก๊อกกระด่าน” จ๊อก หรือ ก๊อก หมายถึง หิน และ กระดิ่น หรือกระด่าน หมายถึง น้ำตก มีความหมายรวมกันว่า เป็นน้ำตกที่ไหลผ่านซอกหินผา โดยคนไทยจะมีค่าเข้าคนละ 40 บาท เด็ก 20 บาท';
                } else if (index === 2) {
                  title = "เนินช้างศึก";
                  caption = "บรรยากาศบนเนินช้างศึก";
                  detail =
                    "เดินเล่นที่ตลาดบ้านอีต่องเสร็จ ท้องก็เริ่มร้องแล้ว พฤทเลยบอกว่าจะหาอะไรเบา ๆ กิน เราก็ตามใจ แต่อยากกินข้าวไปด้วยชมวิวไปด้วย เลยเรียกรถกระบะนำเที่ยวในหมู่บ้านอีต่อง เหมืองปิล็อก ถ้าใครที่เอารถมาก็สามารถขึ้นเนินช้างศึกได้เหมือนกันค่า แต่พฤทกับทีมงานอยากเปลี่ยนบรรยากาศ เลยโบกรถกระบะขึ้นเนินช้างศึกกัน (ราคา 50 บาท/คน) หรือจะเหมาแบบไป-กลับก็ประมาณ 300 บาท ใช้เวลาจากหมู่บ้านประมาณ 10 นาทีนิด ๆ ก็ถึงเนินช้างศึกแล้ว";
                }
                return (
                  <div key={index}>
                    <h2 className="lg:text-3xl text-2xl font-extrabold mt-5 mb-10 text-blue-500">
                      {index + 1 + "."} {title}
                    </h2>
                    <img
                      src={image}
                      className="w-full lg:w-2/4 rounded-xl mx-auto drop-shadow-lg"
                      alt={`Image ${index}`}
                    />
                    <p className="text-center text-gray-600 italic">
                      {caption}
                    </p>
                    <p className="mt-5 text-[#3D4245]">{detail}</p>
                  </div>
                );
              })}
            <a
              href={tripsData.url}
              className="animate-bounce mx-auto shadow-lg shadow-cyan-500/50 text-sky-500 w-[120px] h-[40px] mt-[15px] mb-[15px] pl-[20px] pr-[5px] pt-[8px] inline-block px-2 py-1 rounded-lg bg-white hover:bg-sky-200 transition duration-300"
            >
              อ่านต่อได้ที่นี่...
            </a>
            <p className="text-right text-sky-500">ที่มาจาก: {tripsData.url}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
export default EtongPilok;
