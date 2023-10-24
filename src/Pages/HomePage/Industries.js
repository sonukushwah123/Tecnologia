import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import industries from "../testing.json";
import { useState } from "react";
import { useEffect } from "react";
import hoverShowImg from "../../images/IndustriesImages/elearning (1).png"
import hoverHideImg from "../../images/IndustriesImages/elearning.png"

const Industries = () => {
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

  const [industry, setIndustry] = useState("");
  const [industriesSec, setIndustriesSec] = useState("");

  const [industriesSlider, setIndustriesSlider] = useState([]);

  useEffect(() => {
    setIndustry(industries.message);

    setIndustriesSec(industries.message[0].industries[0]);

    setIndustriesSlider(industries.message[0].industries[0].industries);
  }, []);

  return (
    <section className="my-5 ">
      <div className="container">
        <div className="heading-sec">
          <h2 className="heading1">{industriesSec.title}</h2>

          <h2>Setting Standards & Transforming Your Industries</h2>
        </div>

        <Slider {...settings} className="industries">
          {industriesSlider.map((item) => {
            return (
              <div className="offer-img-box mx-0 my-4  shadow ">
                <div className="offer-hover-card">
                  <img
                    src={require("../../images/IndustriesImages/elearning.png")}
                    className="indus-hover-hide-img"
                    alt=""
                  />
                  <img
                    src={require("../../images/IndustriesImages/elearning (1).png")}
                    className="indus-hover-show-img"
                    alt=""
                  />
                </div>
                <b>{item.heading}</b>
                <p>{item.description}</p>

                <Link to={item.url} tabindex="0">
                  <img
                    src="../images/right-arrow.png"
                    width="42"
                    className="m-auto"
                    alt="Arrow"
                  />
                </Link>
              </div>
            );
          })}

         
        </Slider>
      </div>
    </section>
  );
};

export default Industries;
