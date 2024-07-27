import axios from "axios";
import { useState, useEffect } from "react";
import ModalImage from "react-modal-image";
import linkIcon from "../image/link-icon.png";
import { Link } from "react-router-dom";

function Homepage() {
  const [tripsData, setTripsData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function copyLink(url) {
    navigator.clipboard.writeText(url);
  }

  const getTripsData = async () => {
    const showTripsData = await axios.get(
      `http://localhost:4001/trips?keywords=${searchInput}`
    );
    setTripsData(showTripsData.data.data);
  };

  useEffect(() => {
    getTripsData();
  }, [searchInput]);

  const handleTagClick = (tag) => {
    console.log(tag);
    const newTagInput = searchInput + "\n" + tag + " ";
    setSearchInput(newTagInput);
  };

  return (
    <>
      <main className="w-full h-full font-kanit flex flex-col items-center">
        <section className="w-auto flex flex-col mb-3 mt-5 lg:w-[1000px]">
          <label className="block mt-3" htmlFor="trip">
            ค้นหาที่เที่ยว
          </label>
          <input
            placeholder="หาที่เที่ยวแล้วไปกัน..."
            type="text"
            id="trip"
            value={searchInput}
            onChange={(event) => {
              event.preventDefault();
              setSearchInput(event.target.value);
            }}
            className="rounded-md border-0 py-1.5 mb-5 text-gray-900 border-solid border-slate-300 border-b-2 text-center"
          />
        </section>

        <section className="flex flex-col gap-1 mx-5">
          {tripsData.map((item, index) => {
            let link = "";
            if (index === 0) {
              link = "/koh-chang-trip";
            } else if (index === 1) {
              link = "/greenline-bts-trip";
            } else if (index === 2) {
              link = "/ki-ri-burapha-sun-flower-trip";
            } else if (index === 3) {
              link = "/etong-pilok-trip";
            } else if (index === 4) {
              link = "/chiangmai-korea-style-trip";
            } else if (index === 5) {
              link = "/koh-lipe-trip";
            } else if (index === 6) {
              link = "/around-taiwan-free-visa-trip";
            } else if (index === 7) {
              link = "/views-around-fuji-trip";
            } else if (index === 8) {
              link = "/around-paris-france-trip";
            } else if (index === 9) {
              link = "/finland-trip";
            }
            return (
              <div
                key={index}
                className="w-auto h-full pt-3 pr-5 pb-3 pl-5 mb-5 bg-cyan-50 shadow-md shadow-slate-200 rounded-xl lg:w-full lg:h-full lg:pt-5 lg:pr-10 lg:pb-5 lg:pl-10"
              >
                <div className="flex flex-col lg:flex-row lg:gap-10">
                  <img
                    src={item.photos[0]}
                    className="w-auto rounded-3xl drop-shadow-lg lg:w-1/3"
                  />

                  <div className="flex flex-col">
                    <Link to={link}>
                      <h2 className="mt-5 text-2xl font-extrabold lg:mt-0">
                        {item.title} &#128525;
                      </h2>
                    </Link>
                    <p>{item.description.slice(0, 100) + "..."}</p>
                    <Link to={link} className="text-sky-500 underline">
                      อ่านต่อ
                    </Link>

                    <div className="flex flex-row text-gray-500 mt-3 mb-3 flex-wrap gap-2">
                      <p>หมวด:</p>
                      {item.tags.map((tag, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            handleTagClick(tag);
                          }}
                          className="rounded-full border border-sky-100 bg-white px-2 py-0.5 underline mb-2"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>

                    <div className="flex flex-row gap-5">
                      {item.photos.map((image, index) => {
                        if (index >= 1) {
                          return (
                            <div key={index}>
                              <ModalImage
                                small={image}
                                large={image}
                                alt={`Image ${index}`}
                                hideDownload={true}
                                hideZoom={true}
                                className="w-24 h-24 rounded-xl cursor-pointer drop-shadow-md"
                              />
                            </div>
                          );
                        }
                      })}
                    </div>
                    <button
                      onClick={() => copyLink(item.url)}
                      className="w-28 h-10 mt-5 pt-2 pl-3 flex flex-row rounded-full transition duration-150 ease-in-out hover:scale-110 shadow-md bg-cyan-300 hover:bg-cyan-400 active:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-300"
                    >
                      <img src={linkIcon} className="w-5 h-5 ml-2 mr-1 mb-2" />
                      copy
                    </button>
                    <p className=" text-sky-500 mt-5">ที่มาจาก: {item.url}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Homepage;
