import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import HomeBannerImg from "../../images/HomeBannerImages/slide-00001.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/effect-fade";

import { Pagination, EffectFade, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import Home from "../testing.json"

const HomeBanner = () => {
  const pagination = {
    clickable: true,
  };

  console.log(Home)

  const [home, setHome] = useState()
  const [slider, setSlider] = useState()

  const [inslider, setInSlider] = useState([])

  useEffect(() => {
    setHome(Home.message)

    setSlider(Home.message[0].slider[0]);

    setInSlider(Home.message[0].slider[0].slaiders);
    
    console.log(Home.message)
  }, [])
  return (
    <Swiper
      spaceBetween={30}
      pagination={pagination}
      effect={"fade"}
      autoplay={{
        delay: 2500,
        speed: 500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, EffectFade, Autoplay]}
      className="mySwiper"
      style={{ background: "#fff" }}
    >

      {inslider.map((slide,i) => {
        return (
          <SwiperSlide>
            {" "}
            <section
          
              className="scroll-sec"
              style={{
              
                background: `url(${require("../../images/HomeBannerImages/slide-00001.jpg")}) no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="container">
              <div className=" scroller">
                <div className=" scroller-colum">
                  <div className="scroller-colum-title">
                    <h3>{slide.heading}</h3>
                  </div>
                  <div className="scroller-colum-paragraph">
                    <p>
                      {slide.description}
                    </p>{" "}
                  </div>
                  <div className="scroller-start-button">
                    <Link to={slide.btnUrl} tabindex="0">
                      {slide.btnText}
                      <svg
                        id="Layer_4"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 18 20.78"
                      >
                        <defs></defs>
                        <path
                          class="cls-1"
                          d="M18,11,0,21.39V.61Z"
                          transform="translate(0 -0.61)"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              </div>
            </section>
          </SwiperSlide>
        )
      })}
     
    </Swiper>
  );
};

export default HomeBanner;
