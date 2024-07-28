import axios from "axios";
import { useState, useEffect } from "react";

function AroundTaiwanFreeVisa() {
  const [tripsData, setTripsData] = useState([]);

  const getTripsData = async () => {
    try {
      const showTripsData = await axios.get(
        "https://react-tourist-attraction-production-576e.up.railway.app/trips?keywords="
      );
      setTripsData(showTripsData.data.data[6]);
      console.log("Success fetching data.");
    } catch (error) {
      console.error("An error occurred while fetching data.", error);
    }
  };

  useEffect(() => {
    getTripsData();
  }, []);

  return (
    <main className="w-full h-full flex flex-col items-center font-kanit">
      <section className="w-full h-full mt-5 pt-3 pr-5 pl-5 pb-3 mb-5 bg-cyan-50 drop-shadow-md rounded-xl text-left lg:w-[1200px] lg:pt-5 lg:pr-10 lg:pb-5 lg:pl-10">
        <article className="flex flex-col lg:flex-col lg:gap-5">
          <h1 className="text-2xl text-blue-500 font-extrabold mt-5 mb-5 lg:w-3/4 lg:text-3xl">
            {tripsData.title} &#128525;
          </h1>

          {tripsData.photos && tripsData.photos.length > 0 && (
            <img
              src={tripsData.photos[0]}
              className="w-full rounded-xl mx-auto lg:w-2/3"
              alt="taiwan"
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
                    <h2 className="lg:text-3xl text-2xl font-extrabold mt-5 mb-10 text-blue-500">
                      {index + 1 + "."} {title}
                    </h2>
                    <img
                      src={image}
                      className="w-full rounded-xl mx-auto drop-shadow-lg lg:w-2/4"
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
              className="w-[120px] h-[40px] mt-[15px] mb-[15px] pl-[20px] pr-[5px] pt-[8px] inline-block px-2 py-1 rounded-lg bg-white hover:bg-sky-200 transition duration-300 animate-bounce mx-auto shadow-lg shadow-cyan-500/50 text-sky-500"
            >
              อ่านต่อได้ที่นี่...
            </a>
            <p className="text-right text-sky-500">ที่มาจาก: {tripsData.url}</p>
          </div>
        </article>
      </section>
    </main>
  );
}
export default AroundTaiwanFreeVisa;
