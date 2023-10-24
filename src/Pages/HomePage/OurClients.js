import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Clients from "../testing.json";
// import frontLogo from "../../images/OurClientsImages/loadmax-image.png"
// import backLogo from "../../images/OurClientsImages/load-max-logo-white.png"
// import hoverImg from "../../images/OurClientsImages/load-max-logo.png"
// import S3FileUpload from "react-s3";


// const config = {
//   bucketName: 'beatshopdb',
//   dirName: 'photos', /* optional */
//   region: 'eu-west-1',
//   accessKeyId: 'ANEIFNENI4324N2NIEXAMPLE',
//   secretAccessKey: 'cms21uMxçduyUxYjeg20+DEkgDxe6veFosBT7eUgEXAMPLE',
// }


const OurClients = () => {

  // const upload = (e)=>{
  //   S3FileUpload.uploadFile(e.target.files[0], config)
  //   .then((data)=>{
  //     console.log(data.location)
  //   })
  //   .catch((err)=>{
  //     alert(err)
  //   })
  // }

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

  const [client, setClient] = useState("");
  const [clientsec, setClientSec] = useState("");

  const [ClientSlider, setClientSlider] = useState([]);

  useEffect(() => {
    setClient(Clients.message);

    setClientSec(Clients.message[0].client[0]);

    setClientSlider(Clients.message[0].client[0].clients);
  }, []);

  return (
    <section className="py-5 " style={{ background: "#f5f5f5" }}>
      <div className="container">
        <div className="heading-sec">
          <h2 className="heading1">{clientsec?.title}</h2>

          <h2>In Our Success Story, You Take Center Stage</h2>
        </div>

        <Slider {...settings}>
          
          {ClientSlider.map((item) => {
            console.log("item", item);
            return (
              <div className="img-box">
                <div
                  className="hover-card"
                  style={{
                    background: `url(${require("../../images/OurClientsImages/loadmax-image.png")})no-repeat`,
                  }}
                >
                  <img src={require("../../images/OurClientsImages/load-max-logo-white.png")} alt="" />
                  <p>{item.description}</p>
                </div>
                <img
                  src={require("../../images/OurClientsImages/load-max-logo.png")}
                  alt="lego"
                  className="d-block img-box_image"
                />
              </div>
            );
          })}

         
        </Slider>
        {/* <input type="file" onChange={upload} /> */}
      </div>
    </section>
  );
};

export default OurClients;
