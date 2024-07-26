import axios from "axios";
import { useState, useEffect } from "react";

function AroundParisFrance() {
  const [tripsData, setTripsData] = useState([]);

  const getTripsData = async () => {
    const showTripsData = await axios.get(
      "http://localhost:4001/trips?keywords="
    );
    setTripsData(showTripsData.data.data[8]);
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
              alt="paris"
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
                  title = "Jardin des Tuileries";
                  caption = "Signature ที่นี่ต้องต้นไม้เลยค่ะ";
                  detail =
                    "ที่นี่ก็จะเป็นสวนค่ะ อยู่ไม่ไกลจาก “พิพิธภัณฑ์ลูฟวร์” มากนัก จุดขายที่นักท่องเที่ยวชอบไปถ่ายรูปก็คือมุมที่ต้นไม้ถูกตัดให้ยอดมันเท่ากันหมดเลย ซึ่งก็มีหลายจุดเลยค่ะที่เป็นแบบนี้ มุกก็ไม่แน่ใจว่าเขาถ่ายกันตรงไหน ก็เลยเดินไปเรื่อย ๆ แล้วก็ถ่ายมันทุกที่เลยค่า ฮ่าาา";
                } else if (index === 1) {
                  caption = "บรรยากาศดีมากกก";
                } else if (index === 2) {
                  title = "พิพิธภัณฑ์ลูฟวร์";
                  caption =
                    "Feel กลางวันก็จะประมาณค่ะ ถ้ามากลางคืนก็จะสวยไปอีกแบบ";
                  detail =
                    'พิพิธภัณฑ์ชื่อดังที่มีรูปโมนาลิซาอยู่ จุดขายของที่นี่ก็คือพีระมิดแก้วด้านหน้า สำหรับที่นี่มุกไม่ได้เข้าไปด้านในตัวพิพิธภัณฑ์ค่ะ เพราะว่าไม่ค่อยอินกับพิพิธภัณฑ์เท่าไหร่ ก็เลยหมดเวลาไปกับการถ่ายรูปด้านนอกค่ะ พอถ่ายเสร็จแล้วก็แวะไปทานน้ำทานขนมที่ “Le Café Marly" ซึ่งอยู่ตรงพีระมิดเลยค่ะ Design ของร้านจะออกแบบมาเป็นแนวยาวและหันโต๊ะออกมาทางพีระมิดค่ะ';
                }
                return (
                  <div key={index}>
                    <h2 className="lg:text-3xl text-2xl font-extrabold mt-5 mb-10 text-blue-500">
                      {index === 0 ? index + 1 + "." : null}
                      {index === 2 ? index + "." : null} {title}
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
export default AroundParisFrance;
