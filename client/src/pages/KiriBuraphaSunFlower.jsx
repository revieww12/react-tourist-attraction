import axios from "axios";
import { useState, useEffect } from "react";

function KiriBuraphaSunFlower() {
  const [tripsData, setTripsData] = useState([]);

  const getTripsData = async () => {
    const showTripsData = await axios.get(
      "http://localhost:4001/trips?keywords="
    );
    setTripsData(showTripsData.data.data[2]);
  };

  useEffect(() => {
    getTripsData();
  }, []);

  return (
    <main className="w-full h-full flex flex-col items-center font-kanit">
      <section className="w-full lg:w-[1200px] h-full mt-5 pt-3 lg:pt-5 pr-5 lg:pr-10 pb-3 lg:pb-5 pl-5 lg:pl-10 mb-5 bg-cyan-50 drop-shadow-md rounded-xl text-left">
        <article className="flex flex-col lg:flex-col lg:gap-5">
          <h1 className="lg:w-3/4 lg:text-3xl text-2xl text-blue-500 font-extrabold mt-5 mb-5">
            {tripsData.title} &#128525;
          </h1>

          {tripsData.photos && tripsData.photos.length > 0 && (
            <img
              src={tripsData.photos[0]}
              className="w-full lg:w-2/4 rounded-xl mx-auto drop-shadow-lg"
              alt="kiri-burapha-sunflower"
            />
          )}
          <div className="flex flex-col items-center justify-center gap-5">
            <p className="mt-5 text-[#4f4f50]">{tripsData.description}</p>
            <div className="collapse bg-sky-100 collapse-arrow">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-bold text-indigo-500">
                การเดินทางไปเที่ยวไร่คีรีบูรพา &#128652;
              </div>
              <div className="collapse-content text-[#3D4245]">
                <p>
                  <li>
                    “ไร่คีรีบูรพา” :{" "}
                    <span>
                      ตั้งอยู่ที่ ต.หนองรี อ.เมือง จ.ชลบุรี แนะนำให้เปิด Map
                      ดีกว่าจ้า ถึงแน่นอน
                    </span>
                  </li>
                  <li>เวลาเปิด-ปิด : เปิดทุกวัน 07.00-18.00 น.</li>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {tripsData.photos &&
              tripsData.photos.length > 0 &&
              tripsData.photos.slice(1).map((image, index) => {
                let title = "";
                let caption = "";
                let detail = "";
                if (index === 0) {
                  title = "ไร่คีรีบูรพา";
                  caption = 'ทุ่งทานตะวันบานสะพรั่งที่ "ไร่คีรีบูรพา"';
                  detail =
                    "หมอเป้งคึกคัก น่ารักคุกคิก ทะลุมาดูเลยอิอิ คิคิขุคะ ~ ร้องเพลงแบบนี้ไม่ได้อินละครแต่อย่างใดจ้า แต่วันนี้เราจะพาทุกคนทะลุไปเที่ยวทุ่งทานตะวันชลบุรีกันจ้า แบบที่ว่าจะพาไปแนบชิด ถ่ายรูปคู่กันแบบสนิทสนม และออกมากิ๋บเก๋จนยอดไลก์พุ่ง คอมเมนต์เพียบ!";
                } else if (index === 1) {
                  caption = "บานสะพรั่ง หันหน้ารับแดด";
                } else if (index === 2) {
                  caption = "เต็นท์แบบชนเผาก็มาจ้า";
                }
                return (
                  <div key={index}>
                    <h2 className="lg:text-3xl text-2xl font-extrabold mt-5 mb-10 text-blue-500">
                      {index === 0 ? index + 1 + "." : null} {title}
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
        </article>
      </section>
    </main>
  );
}
export default KiriBuraphaSunFlower;
