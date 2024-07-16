import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
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
      <section className="w-full h-full font-kanit">
        <Header />
        <div className="flex flex-col justify-center ml-20 mr-20">
          <label className="block font-kanit mt-3" htmlFor="trip">
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
            className="w-full rounded-md border-0 py-1.5 mb-5 text-gray-900 border-solid border-slate-300 border-b-2 text-center font-kanit "
          />
        </div>

        <main className="grid grid-rows lg:grid-flow-cols mx-5">
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
                className="max-w-full lg:max-w-fit max-h-full lg:max-h-fit pt-3 pr-5 lg:pt-5 lg:pr-10 pb-3 lg:pb-5 pl-5 lg:pl-10 mb-5 bg-cyan-50 shadow-md shadow-slate-200 rounded-xl font-kanit"
              >
                <div className="flex flex-col lg:flex-row lg:gap-10">
                  <img
                    src={item.photos[0]}
                    className="w-full lg:w-1/3 rounded-3xl "
                  />

                  <div className="flex flex-col">
                    <Link to={link}>
                      <h2 className="lg:mt-0 mt-5 text-2xl font-extrabold">
                        {item.title}
                      </h2>
                    </Link>
                    <p>{item.description.slice(0, 100)}</p>
                    <Link to={link} className="text-sky-500 underline">
                      อ่านต่อ...
                    </Link>

                    <div className="flex flex-col lg:flex-row text-gray-500 mt-3 mb-3">
                      <p>หมวด:</p>
                      {item.tags.map((tag, index) => {
                        return (
                          <div key={index}>
                            <button
                              onClick={() => {
                                handleTagClick(tag);
                              }}
                              className="rounded-full border border-sky-100 bg-white px-2 py-0.5 underline"
                            >
                              {tag}
                            </button>
                          </div>
                        );
                      })}
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
                                className="w-24 h-24 rounded-xl cursor-pointer"
                              />
                            </div>
                          );
                        }
                      })}
                    </div>
                    <button
                      onClick={() => copyLink(item.url)}
                      className="flex flex-row rounded-full w-28 h-10 mt-5 pt-2 pl-3 bg-cyan-300 hover:bg-cyan-400 active:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-300"
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
        </main>
        <Footer />
      </section>
    </>
  );
}
export default Homepage;
