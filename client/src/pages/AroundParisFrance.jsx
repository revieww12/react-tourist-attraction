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
                alt="paris"
              />
            )}
            <p className="mt-5 text-[#4f4f50]">{tripsData.description}</p>
            <a to={tripsData.url} className="text-sky-500 underline">
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
                      <h2 className="text-3xl font-bold mt-5 mb-10">
                        {index === 0 ? index + 1 + "." : null}
                        {index === 2 ? index + "." : null} {title}
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
export default AroundParisFrance;
