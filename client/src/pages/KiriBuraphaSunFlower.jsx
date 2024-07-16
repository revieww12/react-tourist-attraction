import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

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
                alt="kiri-burapha-sunflower"
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
                      <h2 className="text-3xl text-[#3D4245] font-bold mt-5 mb-10">
                        {index === 0 ? index + 1 + "." : null} {title}
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
export default KiriBuraphaSunFlower;
