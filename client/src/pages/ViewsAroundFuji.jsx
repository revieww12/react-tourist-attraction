import axios from "axios";
import { useState, useEffect } from "react";

function ViewsAroundFuji() {
  const [tripsData, setTripsData] = useState([]);

  const getTripsData = async () => {
    const showTripsData = await axios.get(
      "http://localhost:4001/trips?keywords="
    );
    setTripsData(showTripsData.data.data[7]);
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
              alt="japan"
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
                  title = "ทะเลสาบอื่น ๆ รอบภูเขาไฟฟูจิ";
                  caption = "ทะเลสาบ Motosu";
                  detail =
                    "ถ้าติดใจวิวภูเขาไฟฟูจิและทะเลสาบท่ามกลางธรรมชาติที่ Kawaguchiko แต่อยากหลีกเลี่ยงนักท่องเที่ยว ขอแนะนำอีก 4 ทะเลสาบที่อยู่รอบ ๆ ภูเขาไฟฟูจิเหมือนกัน ได้แก่ ทะเลสาบ Shoji, ทะเลสาบ Yamanaka, ทะเลสาบ Saiko และทะเลสาบ Motosu ธรรมชาติในย่านเหล่านี้จะยังไม่ค่อยถูกบุกรุกมากนัก (ซึ่งตัวเลือกเรื่องที่พัก ร้านอาหารและกิจกรรมเลยมีไม่มากเท่า Kawaguchiko เช่นกัน) โดยเฉพาะอย่างยิ่ง ทะเลสาบ Motosu นั้นไม่มีสิ่งปลูกสร้างอยู่เลย และโด่งดังในฐานะวิวภูเขาไฟฟูจิในแบงค์พันด้วย การขับรถไล่ชมวิวภูเขาไฟฟูจิให้ครบทั้ง 5 ทะเลสาบก็น่าสนใจ ยิ่งถ้าคิดจะไป Kawaguchiko อยู่แล้ว เพราะแต่ละที่อยู่ห่างกันไม่มากนัก วิวระหว่างทางก็สวย ถ้าไม่อ้อยอิ่งจนเกินไป ครึ่งวันก็ครบจบทัวร์ฟูจิเลก";
                } else if (index === 1) {
                  title = "Hakone (จ.คานากาวะ)";
                  caption = "Hakone";
                  detail =
                    "จุดชมวิวภูเขาไฟฟูจิที่ป๊อปสุดตลอดกาลเคียงคู่กับ Kawaguchiko ต้องยกให้ Hakone แม้ว่าจะเห็นภูเขาไฟฟูจิได้ไม่ใกล้ชิดเท่าแถบ Kawaguchiko แต่อยู่ใกล้โตเกียวมากกว่า จะแว่บมาเช้าเย็นกลับก็ไม่เหนื่อยจนเกินไป มีที่พักให้เลือกหลากหลาย นอกจากภูเขาไฟยังมีออนเซน ศาลเจ้า อาร์ตมิวเซียม และเอาต์เลตให้แวะไปเที่ยว แถมมีวิวให้เลือกเสพฟูจิจากหลายมุม เช่น มุมฮิตวิวทะเลสาบ Ashi ฟูจิและโทริอิสีแดง, การขึ้นเคเบิลคาร์หรือการล่องเรือในทะเลสาบ ยิ่งถ้าขับรถมาน่าจะฟินมาก เพราะขับไปขับมาก็เห็นวิวภูเขาไฟฟูจิสวยๆ ทั้งขาไปและขากลับ";
                } else if (index === 2) {
                  title = "สวน Oishi Park (จ.ยามานาชิ)";
                  caption = "สวน Oishi Park";
                  detail =
                    "ไปฮอกไกโดอาจจะเจอแต่ทุ่งลาเวนเดอร์ แต่ถ้ามาที่นี่ มีภูเขาไฟฟูจิให้ชมพร้อมทะเลสาบและดอกลาเวนเดอร์ในที่เดียว สวน Oishi Park ตั้งอยู่ทางตอนเหนือของทะเลสาบ Kawaguchiko มีดอกไม้บานสวยงามทั้ง 4 ฤดูจึงเป็นที่รักของเหล่าตากล้องที่ต้องการมาจับภาพดอกไม้ ภูเขาไฟและทะเลสาบ รวมไปถึงเป็นจุดพักยอดนิยมในหมู่ผู้คนที่ท่องเที่ยวย่านนี้ด้วยมอเตอร์ไซค์และจักรยานด้วย สำหรับคนที่มีลูกเล็ก ที่นี่มีสนามเด็กเล่นให้น้อง ๆ แกว่งชิงช้า ลื่นสไลเดอร์ให้ลุงฟูจิดูด้วยนะ";
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
export default ViewsAroundFuji;
