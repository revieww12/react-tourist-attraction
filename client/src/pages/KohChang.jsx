import axios from "axios";
import { useState, useEffect } from "react";

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
              alt="koh-chang"
            />
          )}

          <div className="flex flex-col items-center justify-center gap-5">
            <p className="mt-5 text-[#4f4f50]">{tripsData.description}</p>
            <div className="collapse bg-sky-100 collapse-arrow">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-bold text-indigo-500">
                การเดินทางไปเที่ยวเกาะช้าง &#128652;
              </div>
              <div className="collapse-content text-[#3D4245]">
                <p>
                  <li>
                    รถโดยสารสาธารณะ :{" "}
                    <span>
                      รถมินิบัส เส้นทางกรุงเทพฯ-ตราด
                      สามารถขึ้นได้ที่สถานีขนส่งหมอชิตและสถานีขนส่งเอกมัย
                      มีรถออกทุกชั่วโมงโดยวิ่งสลับกับรถตู้
                      เที่ยวแรกออกจากกรุงเทพฯ เวลา 04.00 น.
                      และเที่ยวสุดท้ายออกจาก บขส. จังหวัดตราด เวลา 19.00 น.
                      ค่าโดยสารคนละ 270 บาท
                      ใครไปเที่ยวเกาะช้างรถจะจอดให้ลงที่คิวรถสองแถวแสนตุ้ง
                      จากนั้นนั่งรถสองแถวไปท่าเรืออ่าวธรรมชาติอีกประมาณ 30-40
                      นาที ค่าโดยสารคนละ 50
                      บาท นอกจากนี้ยังมีรถทัวร์อีกหลายบริษัท
                      สามารถขึ้นได้ที่สถานีขนส่งทั้งสองแห่งเช่นกัน
                      ซึ่งใช้เวลาเดินทางประมาณ 5-6 ชั่วโมง
                      และราคาก็ไม่แตกต่างกันมากนัก
                    </span>
                  </li>
                  <li>
                    รถส่วนตัว :{" "}
                    <span>
                      การเดินทางไปเกาะช้างด้วยรถส่วนตัวนั้นไม่ยากแถมได้จอดรถแวะเที่ยวระหว่างทางตามสะดวก
                      โดยขับจากกรุงเทพฯ โดยวิ่งบนถนนมอเตอร์เวย์
                      เส้นทางบ้านบึง-แกลง-จันทบุรี-ตราด ใช้เวลาประมาณ 4-5
                      ชั่วโมง ก็ถึงท่าเรืออ่าวธรรมชาติ
                    </span>
                  </li>
                  <li>
                    เครื่องบิน :{" "}
                    <span>
                      เป็นทางเลือกสำหรับใครที่ไม่อยากเสียเวลานั่งรถนาน ๆ
                      สามารถใช้บริการสายการบิน Bangkok Airways
                      จากสนามบินสุวรรณภูมิมาลงสนามบินตราด ใช้เวลาเพียง 1
                      ชั่วโมงเท่านั้น
                      แล้วนั่งรถตู้จากสนามบินต่อไปยังท่าเรืออ่าวธรรมชาติอีก 30
                      นาที ค่าโดยสารคนละ 500 บาท สำหรับท่าเรือไปเกาะช้าง
                      จังหวัดตราด มีให้บริการ 2 ท่าคือ:  ท่าเรืออ่าวธรรมชาติ
                      เปิดทุกวัน ตั้งแต่เวลา 06.30-19.00 น. มีเรือออกทุกชั่วโมง
                      ค่าบริการคนละ 80 บาท/เที่ยว ถ้าซื้อไป-กลับราคา 150 บาท
                      รถยนต์สี่ล้อ 120 บาท/เที่ยว ใช้เวลาข้ามฝั่งประมาณ 30 นาที 
                      ท่าเรือเซ็นเตอร์พอยท์
                      ตารางเวลาเรือและค่าบริการไม่ต่างกับท่าเรืออ่าวธรรมชาติ
                      แต่ใช้เวลาเดินทาง 1 ชั่วโมง
                      และเพื่อให้ทันเรือเที่ยวสุดท้ายควรออกเดินทางจากกรุงเทพฯ
                      ไม่เกิน 12.00 น. ไม่งั้นอาจตกเรือรอบสุดท้าย
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
                    <h2 className="lg:text-3xl text-2xl font-extrabold mt-5 mb-10 text-blue-500">
                      {index + 1 + "."} {title}
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
export default KohChang;
