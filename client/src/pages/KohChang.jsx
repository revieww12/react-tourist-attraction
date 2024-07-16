import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

function KohChang() {
  const [tripsData, setTripsData] = useState([]);

  const getTripsData = async () => {
    const showTripsData = await axios.get(
      "http://localhost:4001/trips?keywords="
    );
    setTripsData(showTripsData.data.data[0]);
  };

  useEffect(() => {
    getTripsData();
  }, []);

  return (
    <section className="w-full h-full">
      <Header />
      <main className="max-w-full md:max-w-[1200px] max-h-full md:max-h-fit pt-3 md:pt-5 pr-5 md:pr-10 pb-3 md:pb-5 pl-5 md:pl-10 mb-5 bg-cyan-50 shadow-md shadow-slate-200 rounded-xl mx-auto font-kanit text-left">
        <div className="flex flex-col md:flex-col md:gap-5">
          <h1 className="md:w-3/4 text-3xl text-[#3D4245] font-bold mt-5 mb-5">
            {tripsData.title}
          </h1>

          {tripsData.photos && tripsData.photos.length > 0 && (
            <img
              src={tripsData.photos[0]}
              className="w-full md:w-2/3 rounded-xl mx-auto"
              alt="koh-chang"
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
                  title = "หาดทรายขาว";
                  caption =
                    "บรรยากาศหาดทรายขาว ที่เที่ยวเกาะช้างที่คึกคักไปด้วยนักท่องเที่ยว";
                  detail =
                    "เริ่มต้นปักหมุดเที่ยวทะเลเกาะช้างกันที่ หาดทรายขาว เหมาะสำหรับลงเล่นน้ำดับร้อน นั่งพักผ่อนหลังจากเดินทางมาเหนื่อย ๆ และยังมีโรงแรม รีสอร์ต ร้านค้า ร้านอาหาร เรียกว่าเป็นสถานที่ท่องเที่ยวเกาะช้างยอดนิยมเลยละ ซึ่งใครอยากได้ที่พักเกาะช้างในบรรยากาศคึกคัก สัมผัสแสงสียามค่ำคืน และกิจกรรมต่าง ๆ ก็เลือกพักที่หาดทรายขาวได้เลย หรือไปลอยคอชมฝูงปลาและปะการังใต้ทะเลเกาะช้างกับจุดดำน้ำตื้น เช่น เกาะยักษ์ เกาะรัง ซึ่งไฮไลต์สุดตื่นตาก็คือ ปะการังจาน ปะการังสมอง ปะการังเขากวางและฝูงปลานานาชนิด ใครสนใจติดต่อซื้อแพ็คเกจดำน้ำแบบไปเช้าเย็นกลับจากบริษัทนำเที่ยวบนเกาะช้างได้เลย";
                } else if (index === 1) {
                  title = "น้ำตกธารมะยม";
                  caption = "น้ำตกธารมะยม ธารน้ำใส ๆ ที่มีให้เล่นกันตลอดทั้งปี";
                  detail =
                    "แวะไปเล่นน้ำกันต่อที่ น้ำตกธารมะยม มีน้ำให้เล่นกันอย่างชุ่มฉ่ำกันถึง 4 ชั้น เลือกเล่นได้ตามกำลังขาว่าเดินขึ้นไหวแค่ไหน";
                } else if (index === 2) {
                  title = "จุดชมวิวไก่แบ้";
                  caption = "วิวทิวทัศน์สวย ๆ บริเวณจุดชมวิวไก่แบ้";
                  detail =
                    "เที่ยวทะเลเกาะช้างก็ขอชมวิวพระอาทิตย์สวย ๆ สักหน่อย แต่ให้ตื่นเช้ามานั่งรอก็คงไม่ไหว แนะนำเป็นชมพระอาทิตย์ตกแทนก็แล้วกันกับ จุดชมวิวไก่แบ้ ที่เที่ยวเกาะช้างสามารถมองเห็นทิวทัศน์ของเกาะมันนอก เกาะมันใน เกาะหยวกได้";
                }
                return (
                  <div key={index}>
                    <h2 className="text-3xl font-bold mt-5 mb-10 text-[#3D4245]">
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
            <p className="text-right text-sky-500">ที่มาจาก: {tripsData.url}</p>
          </div>
        </div>
      </main>

      <Footer />
    </section>
  );
}
export default KohChang;
