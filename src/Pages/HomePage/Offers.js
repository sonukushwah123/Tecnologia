import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import offer from "../testing.json";
import { Link } from "react-router-dom";
import hoverShowImg from "../../images/OfferImages/mobility2.png"
import hoverHideImg from "../../images/OfferImages/mobility.png"

const Offers = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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

  const [offers, setOffer] = useState("");
  const [offerSec, setOfferSec] = useState("");

  const [offerSlider, setOfferSlider] = useState([]);

  useEffect(() => {
    setOffer(offer.message);

    setOfferSec(offer.message[0].offering[0]);

    setOfferSlider(offer.message[0].offering[0].offering);
  }, []);
  return (
    <section className="py-5 ">
      <div className="container">
        <div className="heading-sec">
          <h2 className="heading1">{offerSec.title}</h2>

          <h2>
            Changemakers’ Choice For
            <br />
            Cutting-Edge Solutions
          </h2>
        </div>

        <Slider {...settings}>
          {offerSlider.map((item) => {
            return (
              <Link to={item.url}>
                <div className="offer-img-box">
                  <div className="offer-hover-card">
                    <div className="img-background">
                      <img
                        src={require("../../images/OfferImages/mobility.png")}
                        className="hover-hide-img"
                        alt=""
                      />
                      <img
                        src={require("../../images/OfferImages/mobility2.png")}
                        className="hover-show-img"
                        alt=""
                      />
                    </div>
                  </div>
                  <b>{item.heading}</b>
                  <p>{item.description}</p>
                </div>
              </Link>
            );
          })}

         
        </Slider>
      </div>
    </section>
  );
};

export default Offers;
