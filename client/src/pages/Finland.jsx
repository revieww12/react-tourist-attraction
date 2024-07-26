import axios from "axios";
import { useState, useEffect } from "react";

function Finland() {
  const [tripsData, setTripsData] = useState([]);

  const getTripsData = async () => {
    const showTripsData = await axios.get(
      "http://localhost:4001/trips?keywords="
    );
    setTripsData(showTripsData.data.data[9]);
  };

  useEffect(() => {
    getTripsData();
  }, []);

  return (
    <section className="w-full h-full">
      <main>
        <div className="max-w-full md:max-w-[1200px] max-h-full md:max-h-fit pt-3 md:pt-5 pr-5 md:pr-10 pb-3 md:pb-5 pl-5 md:pl-10 mb-5 bg-cyan-50 shadow-md shadow-slate-200 rounded-xl mx-auto font-kanit text-left">
          <div className="flex flex-col md:flex-col md:gap-5">
            <h2 className="text-3xl text-[#4f4f50] font-bold mt-5 mb-5">
              {tripsData.title}
            </h2>

            {tripsData.photos && tripsData.photos.length > 0 && (
              <img
                src={tripsData.photos[0]}
                className="w-full md:w-2/3 rounded-xl mx-auto"
                alt="finland"
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
                    title = "Lapland";
                    caption = "Lapland";
                    detail =
                      "Highlight ของทริปนี้จะมี 3 Snow activities คือ Snowmobile, ขี่ Husky และขี่ Reindeer สำหรับแต่ละ Activity ที่มุกเล่นคือจะจองและจ่ายเงินตั้งแต่จากที่ไทยเลยนะคะ แต่ถ้าใครสะดวก Walk-in ก็อาจจะพอได้อยู่ แต่เอาให้ชัวร์ ๆ ก็จองมาก่อนเลยดีกว่า โดยแต่ละกิจกรรมก็จะมีหลาย Option ให้เลือก และก็มีหลายบริษัทด้วย แต่เท่าที่เช็กมาเกือบทุกที่ก็จะคล้าย ๆ กันและราคาเท่า ๆ กันหมดค่ะ ใครสนใจก็ลองหาข้อมูลดูนะคะ เพราะโปรแกรมมีให้เลือกเยอะพอสมควร สำหรับบริษัทที่มุกใช้บริการมามี 2 ที่คือ Husky & Co และ Joiku-kotsamo (อ่านว่าไรหว่า)";
                  } else if (index === 1) {
                    title = "Northern light village";
                    caption = "เตรียมพร้อม รอเจอแสงเหนือ";
                    detail =
                      "และแล้วก็มาถึงโรงแรมที่พัก ถือเป็นอีกไฮไลท์ของทริปนี้ บอกเลยว่า มาเที่ยวฟินแลนด์ ไม่มานอน Igloo ก็เหมือนมาไม่ถึงฟินแลนด์ แต่ขอชี้แจงก่อนว่าเราไม่ได้นอนที่ Northern light village ทุกคืนนะคะ เพราะราคาแรงเหลือเกิน ตกประมาณคืนละ 2 หมื่นกว่าบาท (ราคาแต่ละช่วงไม่เท่ากันนะคะ) เพราะฉะนั้นก็พักแค่คืนเดียวพอเป็นพิธีเนอะ";
                  } else if (index === 2) {
                    title = "Joiku-Kotsamo Safaris";
                    caption = "ถ่ายรูปวนไปจ้า";
                    detail =
                      "Activity นี้ จัดว่าถ่ายรูปออกมาสวยสุด แต่สำหรับมุก มุกจัดอันดับความสนุกอยู่ในระดับน้อยสุดถ้าเทียบกับ Snowmobile และ Husky เพราะน้องเดินช้าา ช้าาา และหน้าตาเศร้าเหลือเกิน แถมตัวที่เราได้ดันเขาหัก ๆ อีก แต่ก็นะ ไหน ๆ มาเที่ยวฟินแลนด์ทั้งทีก็ต้องเล่นให้ครบเนอะ";
                  }
                  return (
                    <div key={index}>
                      <h2 className="text-3xl text-[#4f4f50] font-bold mt-5 mb-10">
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
    </section>
  );
}
export default Finland;
