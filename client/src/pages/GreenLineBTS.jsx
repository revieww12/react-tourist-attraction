import axios from "axios";
import { useState, useEffect } from "react";

function GreenLineBTS() {
  const [tripsData, setTripsData] = useState([]);

  const getTripsData = async () => {
    const showTripsData = await axios.get(
      "http://localhost:4001/trips?keywords="
    );
    setTripsData(showTripsData.data.data[1]);
  };

  useEffect(() => {
    getTripsData();
  }, []);

  return (
    <section className="w-full h-full">
      <main>
        <div className="max-w-full md:max-w-[1200px] max-h-full md:max-h-fit pt-3 md:pt-5 pr-5 md:pr-10 pb-3 md:pb-5 pl-5 md:pl-10 mb-5 bg-cyan-50 shadow-md shadow-slate-200 rounded-xl mx-auto font-kanit text-left">
          <div className="flex flex-col md:flex-col md:gap-5">
            <h1 className="md:w-3/4 text-3xl text-[#3D4245] font-bold mt-5 mb-5">
              {tripsData.title}
            </h1>

            {tripsData.photos && tripsData.photos.length > 0 && (
              <img
                src={tripsData.photos[0]}
                className="w-full md:w-2/3 rounded-xl mx-auto"
                alt="greenline-bts"
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
                    title = "Motor Sports Land";
                    caption = "สนามแข่งกว้างมาก ๆ";
                    detail =
                      "พลาดไม่ได้สำหรับใครที่เป็นคอสายซิ่ง แนะนำให้มาเล่นโกคาร์ทที่ Motor Sports Land รับประกันความเร็วและแรง นอกจากจะเป็นสนามเปิดให้เข้ามาเล่นกันได้แล้ว ที่นี่ยังมีการสอนพื้นฐานขับรถโกคาร์ทอีกด้วย ถ้าใครสนใจเรียนการขับรถโกคาร์ท สามารถดูรายละเอียดเพิ่มเติมได้ที่เพจ motorsportsland บอกเลยว่าถ้าช้าอด คิวเต็มไม่รู้ด้วยนะ";
                  } else if (index === 1) {
                    caption = "มีรถแข่งให้เลือกหลากหลายแบบ";
                  } else if (index === 2) {
                    title = "K E Y I Cafe";
                    caption = "ร้านตกแต่งสไตล์น่ารัก มีมุมให้ถ่ายรูปเพียบ";
                    detail =
                      "แวะทานของหวานในคาเฟ่เล็ก ๆ แต่เต็มไปด้วยความน่ารักอบอุ่นที่อยู่ใต้โครงการศุภาลัยปาร์ค ด้วยทั้งบรรยากาศภายในร้านที่โล่งโปร่งสบาย ทำให้เหมาะแก่การนั่งพักผ่อน ในร้านเต็มไปด้วยขนมปังหลากหลายชนิดให้ได้ลองกัน และต้องไม่พลาดกับเมนู Signature อย่าง Almond Croissant (75 บาท) และ Peanut Butter Banana (95 บาท)";
                  }
                  return (
                    <div key={index}>
                      <h2 className="text-3xl text-[#3D4245] font-bold mt-5 mb-10">
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
export default GreenLineBTS;
