import axios from "axios";
import { useState, useEffect } from "react";

function GreenLineBTS() {
  const [tripsData, setTripsData] = useState([]);

  const getTripsData = async () => {
    try {
      const showTripsData = await axios.get(
        "https://react-tourist-attraction-production-576e.up.railway.app/trips?keywords="
      );
      setTripsData(showTripsData.data.data[1]);
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
      <section className="w-full h-full mt-5 pt-3 pr-5 pl-5 mb-5 bg-cyan-50 drop-shadow-md rounded-xl text-left lg:w-[1200px] lg:pt-5 lg:pr-10 pb-3 lg:pb-5 lg:pl-10">
        <article className="flex flex-col lg:flex-col lg:gap-5">
          <h1 className="text-2xl text-blue-500 font-extrabold mt-5 mb-5 lg:w-3/4 lg:text-3xl">
            {tripsData.title} &#128525;
          </h1>

          {tripsData.photos && tripsData.photos.length > 0 && (
            <img
              src={tripsData.photos[0]}
              className="w-full rounded-xl mx-auto drop-shadow-lg lg:w-2/4"
              alt="greenline-bts"
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
                    <h2 className="text-2xl font-extrabold mt-5 mb-10 text-blue-500 lg:text-3xl">
                      {index === 0 ? index + 1 + "." : null}
                      {index === 2 ? index + "." : null} {title}
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
export default GreenLineBTS;
