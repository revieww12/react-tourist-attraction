import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

function KohLipe() {
  const [tripsData, setTripsData] = useState([]);

  const getTripsData = async () => {
    const showTripsData = await axios.get(
      "http://localhost:4001/trips?keywords="
    );
    setTripsData(showTripsData.data.data[5]);
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
                alt="koh-lipe"
              />
            )}
            <p className="mt-5 text-[#3D4245]">{tripsData.description}</p>
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
                    title = "เกาะหินซ้อน";
                    caption = "เกาะหินซ้อน";
                    detail =
                      'นั่งเรือหางยาวไปตะลุยกันต่อกับเส้นทางโซนนอกและในเกาะหลีเป๊ะที่เก็บครบทุกจุดไฮไลต์สำคัญ ในราคาคนละ 850 บาท โดยมีจุดดำน้ำตื้นและเกาะต่าง ๆ เพิ่มเติมจากทริปซันเซ็ต คือ "เกาะหินซ้อน" ไปชมความมหัศจรรย์ของก้อนหินขนาดใหญ่ที่วางซ้อนทับกันอย่างสมดุลอยู่กลางทะเล';
                  } else if (index === 1) {
                    title = "ร่องน้ำจาบัง";
                    caption =
                      "ร่องน้ำจาบัง แค่ดำน้ำตื้นก็เจอปะการังหลากสีอยู่ใกล้แค่ปลายจมูก";
                    detail =
                      'เริ่มต้นด้วยทริปซันเซ็ต ราคาคนละ 450 บาท โดยนั่งเรือหางยาวไปดำน้ำที่ "ร่องน้ำจาบัง" จุดดำน้ำตื้นที่ทุกคนต้องกรี๊ดลั่นแน่ๆ กับความสวยงามของปะการังอ่อนหลากสีสัน';
                  } else if (index === 2) {
                    title = "หาดพัทยา";
                    caption =
                      "เกาะหลีเป๊ะก็มีหาดพัทยา แถมน้ำทะเลยังใสน่าเล่นมาก ๆ";
                    detail =
                      'ชายหาดขาว เม็ดทรายละเอียด บวกกับน้ำทะเลใสราวกระจก แค่เห็นวิวแบบนี้บอกเลยว่าหายเหนื่อยแล้ว โดย "หาดพัทยา" จะเป็นที่เที่ยวเกาะหลีเป๊ะที่คึกคักไปด้วยนักท่องเที่ยว ร้านค้า ร้านอาหาร โรงแรมและรีสอร์ตต่าง ๆ ยิ่งตอนกลางคืนจะคึกคักเป็นพิเศษเพราะมีการแสดงต่าง ๆ ริมชายหาด นอกจากนี้หาดพัทยายังเป็นจุดจอดเรือสปีดโบ๊ทรับ-ส่งนักท่องเที่ยวบนเกาะหลีเป๊ะอีกด้วย';
                  }
                  return (
                    <div key={index}>
                      <h2 className="text-3xl text-[#3D4245] font-bold mt-5 mb-10">
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
                      <p className="mt-5 text-[#3D4245]">{detail}</p>
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
export default KohLipe;
