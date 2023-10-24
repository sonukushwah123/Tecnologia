import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import technologies from "../testing.json";
import { Link } from "react-router-dom";
// import TechnologyImg from "../../images/TechnologiesImages/pro-1.jpg"

const Technologies = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const [tech, setTech] = useState("");
  const [technologiesSec, settechnologiesSec] = useState("");

  const [technologiesSlider, settechnologiesSlider] = useState([]);

  useEffect(() => {
    setTech(technologies.message);

    settechnologiesSec(technologies.message[0].technologies[0]);

    settechnologiesSlider(technologies.message[0].technologies[0].technologies);
  }, []);
  return (
    <section className="py-5 ">
      <div className="container">
        <div className="heading-sec">
          <h2 className="heading1">{technologiesSec.title}</h2>

          <h2>Improve And Innovate With The Tech Trends</h2>
        </div>

        <Slider {...settings}>
          {technologiesSlider.map((item) => {
            return (
              <div className="col-md-3">
                <Link to={item.url}>
                  <div className="tech-img-box">
                    <div
                      className="tech-card"
                      style={{
                        background:
                          `url(${require("../../images/TechnologiesImages/pro-1.jpg")}) center center / cover no-repeat`,
                      }}
                    >
                      <b>{item.title}</b>{" "}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}

        </Slider>
      </div>
    </section>
  );
};

export default Technologies;
