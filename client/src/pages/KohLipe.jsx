import axios from "axios";
import { useState, useEffect } from "react";

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
    <main className="w-full h-full flex flex-col items-center font-kanit">
      <section className="w-full h-full mt-5 pt-3 pr-5 pb-3 pl-5 mb-5 bg-cyan-50 drop-shadow-md rounded-xl text-left lg:w-[1200px] lg:pt-5 lg:pr-10 lg:pb-5 lg:pl-10">
        <article className="flex flex-col lg:flex-col lg:gap-5">
          <h1 className="text-2xl text-blue-500 font-extrabold mt-5 mb-5 lg:w-3/4 lg:text-3xl">
            {tripsData.title} &#128525;
          </h1>

          {tripsData.photos && tripsData.photos.length > 0 && (
            <img
              src={tripsData.photos[0]}
              className="w-full rounded-xl mx-auto drop-shadow-lg lg:w-2/4"
              alt="koh-lipe"
            />
          )}
          <div className="flex flex-col items-center justify-center gap-5">
            <p className="mt-5 text-[#4f4f50]">{tripsData.description}</p>
            <div className="collapse bg-sky-100 collapse-arrow">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-bold text-indigo-500">
                การเดินทางเที่ยวเกาะหลีเป๊ะ &#128652;
              </div>
              <div className="collapse-content text-[#3D4245]">
                <p>
                  <li>
                    เครื่องบิน :{" "}
                    <span>
                      เดินทางไปเที่ยวเกาะหลีเป๊ะด้วยเครื่องบินควรเลือกจองเที่ยวบินที่มาถึงสนามบินหาดใหญ่ไม่เกิน
                      13.00 น. เพื่อให้ทันเรือสปีดโบ๊ตรอบสุดท้ายตอนเวลา 15.30 น.
                      และเที่ยวบินกลับหลังเวลา 19.30 น.
                      จะได้ไม่รีบร้อนเดินทางและกังวลว่าจะตกเครื่อง
                    </span>
                  </li>
                  <li>
                    รถไฟ :{" "}
                    <span>
                      สายชิลจะนั่งรถไฟสายกรุงเทพ-ชุมทางหาดใหญ่ ก็ได้เหมือนกัน
                      สามารถเลือกขึ้นขบวน 171, 31, 37 และ 45
                      ค่าโดยสารราคาเริ่มต้นตั้งแต่ 259-1,794 บาท
                      ซึ่งสามารถจองตั๋วรถไฟออนไลน์ได้ง่าย ๆ
                      เลยจ้า เมื่อถึงชุมทางหาดใหญ่ก็ต่อรถมอเตอร์ไซค์ ราคา 80 บาท
                      ไปที่คิวรถตู้ตลาดเกษตร
                      แล้วนั่งรถตู้ไปท่าเทียบเรือปากบาราอีก 2 ชั่วโมง ราคา 120
                      บาท รถออกตั้งแต่ 06.00-19.00 น.
                    </span>
                  </li>
                  <li>
                    รถทัวร์ :{" "}
                    <span>
                      สามารถขึ้นรถที่สถานีขนส่งสายใต้ใหม่ เส้นทางกรุงเทพฯ-สตูล
                      มาลงที่จุดจอดรถอำเภอ ละงู ซึ่งเที่ยวรถขาไปของ บขส. จะมี 3
                      เวลาคือ 07.00 น. ,17.30 น. และ 18.30 น. ค่ารถเริ่มต้นที่
                      700 บาท และหลังจากลงรถทัวร์ตรงจุดจอดรถอำเภอละงู
                      ก็ต่อรถสองแถวสีส้มไปท่าเทียบเรือปากบารา ค่ารถ 25 บาท
                      หรือใครไม่อยากยืนรอรถสองแถวก็เหมารถมอเตอร์ไซค์ราคาประมาณ
                      80-100 บาท
                    </span>
                  </li>
                  <li>
                    รถส่วนตัว :{" "}
                    <span>
                      สำหรับเส้นทางจากกรุงเทพฯ สามารถใช้เส้นทางหลวงหมายเลข 4
                      ผ่านจังหวัดประจวบคีรีขันธ์ ชุมพร นครศรีธรรมราช พัทลุง
                      สงขลา สตูล และเมื่อถึงสามแยกฉลุง เลี้ยวขวาไปตามเส้นทาง
                      ฉลุง-ละงู ผ่านอำเภอท่าแพ เข้าสู่ตัวเมืองอำเภอละงู
                      แล้วขับไปท่าเทียบเรือปากบาราได้เลย
                      ใครที่เลือกวิธีการเดินทางนี้แนะนำให้ค่อย ๆ ไป
                      อย่าหักโหมกันนะจ๊ะ
                    </span>
                  </li>
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
export default KohLipe;
