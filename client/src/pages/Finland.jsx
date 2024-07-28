import axios from "axios";
import { useState, useEffect } from "react";

function Finland() {
  const [tripsData, setTripsData] = useState([]);

  const getTripsData = async () => {
    try {
      const showTripsData = await axios.get(
        "https://react-tourist-attraction-production-576e.up.railway.app/trips?keywords="
      );
      setTripsData(showTripsData.data.data[9]);
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
      <section className="w-full h-full mt-5 pt-3 pr-5 pb-3 pl-5 mb-5 bg-cyan-50 drop-shadow-md rounded-xl text-left lg:w-[1200px] lg:pt-5 lg:pr-10 lg:pb-5 lg:pl-10">
        <article className="flex flex-col lg:flex-col lg:gap-5">
          <h1 className="text-2xl text-blue-500 font-extrabold mt-5 mb-5 lg:w-3/4 lg:text-3xl">
            {tripsData.title} &#128525;
          </h1>
          {tripsData.photos && tripsData.photos.length > 0 && (
            <img
              src={tripsData.photos[0]}
              className="w-full rounded-xl mx-auto lg:w-2/3"
              alt="finland"
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
                    <h2 className="text-2xl font-extrabold mt-5 mb-10 text-blue-500 lg:text-3xl">
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
export default Finland;
