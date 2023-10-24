import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import StoriesImg from "../../images/StoriesImages/case-study-slider-1.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/effect-fade";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
import successStories from "../testing.json";

const Stories = () => {
  const pagination = {
    clickable: true,
  };

  const [stories, setStories] = useState("");
  const [storiesSec, setStoriesSec] = useState("");

  const [storiesSlider, setStoriesSlider] = useState([]);

  useEffect(() => {
    setStories(successStories.message);
    console.log("stories", successStories.message[0]);

    setStoriesSec(successStories.message[0].successStory[0]);

    setStoriesSlider(successStories.message[0].successStory[0].successStory);
  }, []);

  return (
    <div className="stories">
      <Swiper
        spaceBetween={30}
        pagination={pagination}
        autoplay={{
          delay: 2500,
          speed: 500,
          disableOnInteraction: false,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ background: "#fff" }}
      >
        {storiesSlider.map((item) => {
          return (
            <SwiperSlide>
              {" "}
              <section
                className="stories-scroll-sec"
                style={{
                  padding: "0px 30px",
                  background:
                    `url(${require("../../images/StoriesImages/case-study-slider-1.jpg")}) no-repeat`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="container">
                  <div className=" scroller">
                    <div className=" scroller-colum">
                      <div className="scroller-colum-title">
                        <h4>{item.section}</h4>
                        <b>{item.title}</b>
                        <b className="ecom">{item.sub_title}</b>
                        <p>{item.description}</p>
                      </div>

                      <div className="scroller-colum-button">
                        <Link to={item.btnUrl} className="default-btn">
                          {item.btnText}
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      
      </Swiper>
    </div>
  );
};

export default Stories;
