import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import awards from "../testing.json";
import { useState } from "react";
import { useEffect } from "react";
// import AwardImg from "../../images/AwardImages/hippa.png"


const Awards = () => {
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

  const [award, setAward] = useState("");
  const [awardsSec, setAwardsSec] = useState("");

  const [awardsSlider, setAwardsSlider] = useState([]);

  useEffect(() => {
    setAward(awards.message);

    setAwardsSec(awards.message[0].award[0]);

    setAwardsSlider(awards.message[0].award[0].awards);
  }, []);
  return (
    <section className="py-5 " style={{ background: "#f5f5f5" }}>
      <div className="container">
        <div className="heading-sec">
          <h3 className="heading1">{awardsSec.title}</h3>
        

          <h2>
            We Are Recognized To Have Shown Excellence In The
            <br />
            Field And Dedication For Service To Society
          </h2>
        </div>

        <Slider {...settings} className="awards">
          {awardsSlider.map((item, i) => {
            return (
              <div className="awards-img-box">
                <div className="awards-img">
                  <img src={require("../../images/AwardImages/hippa.png")} alt="" />
                </div>
              </div>
            );
          })}

          
        </Slider>
      </div>
    </section>
  );
};

export default Awards;
