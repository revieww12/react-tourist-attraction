import axios from "axios";
import { useState, useEffect } from "react";

function AroundTaiwanFreeVisa() {
  const [tripsData, setTripsData] = useState([]);

  const getTripsData = async () => {
    const showTripsData = await axios.get(
      "http://localhost:4001/trips?keywords="
    );
    setTripsData(showTripsData.data.data[6]);
  };

  useEffect(() => {
    getTripsData();
  }, []);

  return (
    <section className="w-full h-full">
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
                alt="taiwan"
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
                    title = " Xiangshan (เขาช้าง)";
                    caption = "แวะชมวิวข้างทาง";
                    detail =
                      'สถานที่ท่องเที่ยวไต้หวันที่เป็นแลนด์มาร์กวันนี้ที่ต้องมาประจำวัน ก็คือ "Xiangshan" หรือ "เขาช้าง" นั่นเอง MRT Xiangshan Station Exit 2 แล้วเดินตรงตามเส้นทางไปประมาณ 500 เมตร จะเจอแยกให้เลี้ยวซ้ายไปทางขึ้นเขาค่ะ';
                  } else if (index === 1) {
                    title = "เข้าอุทยานเย่หลิว เที่ยวจิ่วเฟิ่น ซื่อหลิน";
                    caption = "แค่วิวข้างทางก็สวยมากแล้ว คุ้มสุด ๆ";
                    detail =
                      "ระหว่างทางที่เรานั่งบัสไปเที่ยวนั้น ไกด์ก็จะอธิบายที่มาของที่เที่ยวต่าง ๆ ให้ฟัง วันนี้มานอกเมืองซึ่งเพิ่งเคย เห็นบรรยากาศนอกเมืองไต้หวันเป็นครั้งแรก ธรรมชาติที่นี่สมบูรณ์แบบยังเขียวอยู่ มองไปทางไหนยังร่มรื่น น่าเที่ยวมาก";
                  } else if (index === 2) {
                    title = "อุทยานเย่หลิว (Yehliu Geopark)";
                    caption = "หินทรงประหลาด ลองแวะมาดูสักครั้งน้า";
                    detail =
                      '"อุทยานเย่หลิว" (Yehliu Geopark) เป็นที่ที่เที่ยวไต้หวันแนวธรรมชาติและจุดชมวิวที่สำคัญที่หนึ่งของไต้หวันเลยก็ว่าได้ อยู่ทางตอนเหนือของประเทศ ซึ่งที่นี่จะมีหินรูปทรงแปลกประหลาด ที่เค้าบอกว่าเกิดจากการกัดเซาะทางธรรมชาติ ค่าเข้า 80 NT';
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
export default AroundTaiwanFreeVisa;
