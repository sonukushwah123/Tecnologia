import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
// import CareerBgImg from "../images/CareerPageImg/slide-00005.jpg";
// import CareerHoverHideImg from "../images/CareerPageImg/career.png"
// import CareerHoverShowImg from "../images/CareerPageImg/career (1).png"

// import CareerHoverShowBgImg from "../images/CareerPageImg/hover-img.png"

const Careers = () => {
  return (
    <div>
      <Header />
      <section
        className="career-banner"
        style={{
          background: `url(${require("../images/CareerPageImg/slide-00005.jpg")}) no-repeat center center`, height:"500px",backgroundSize:"cover"
        }}
      />
      <section>
        <div className="container">
          <div className="heading-sec">
            <h2 className="medium-font-size">
              Experience the Ultimate Journey of Growth With Abundant
              Opportunities!
            </h2>
          </div>
          <p className="career-text">
            Better opportunities are always knocking on your door, it's on you
            whether you want it to pass by or grab it with both hands. At
            A3logics, the idea is to help our employees grow and get an
            experience of how it feels to work with the best possible resources
            at an international level. If you are ready to embark on a journey
            with loads of milestones to achieve, and hundreds of moments to
            cherish, then we might be the best place for you.
          </p>
        </div>
      </section>
      <section className="career-option">
        <div className="heading-sec">
          <div className="heading-sec">
            <h2 className="medium-font-size">Current Openings</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="current-img-box col-lg-3 p-0 col-md-6">
              <div className="current-sec">
                <div className="current-show">
                  <center>
                    <img
                      class="current-hover-hide-img"
                      src={require("../images/CareerPageImg/career.png")}
                      style={{ width: "20%" }}
                      alt=""
                    />
                    <img
                      class="current-hover-show-img"
                      src={require("../images/CareerPageImg/career (1).png")}
                      style={{ width: "20%" }}
                      alt=""
                    />
                  </center>
                  <b>Full Stack Developer</b>
                  <p>(3-5 Years Experience)</p>
                  <p>Jaipur / WFO</p>
                  <Link to="/career-job">Apply Now</Link>
                </div>
                <div
                  className="current-hover-card"
                  style={{
                    background:
                      `url(${require("../images/CareerPageImg/hover-img.png")}) #2f307c no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>

            <div className="current-img-box col-lg-3 p-0 col-md-6">
            <div className="current-sec">
                <div className="current-show">
                  <center>
                    <img
                      class="current-hover-hide-img"
                      src={require("../images/CareerPageImg/career.png")}
                      style={{ width: "20%" }}
                      alt=""
                    />
                    <img
                      class="current-hover-show-img"
                      src={require("../images/CareerPageImg/career (1).png")}
                      style={{ width: "20%" }}
                      alt=""
                    />
                  </center>
                  <b>Full Stack Developer</b>
                  <p>(3-5 Years Experience)</p>
                  <p>Jaipur / WFO</p>
                  <Link to="/career-job">Apply Now</Link>
                </div>
                <div
                  className="current-hover-card"
                  style={{
                    background:
                      `url(${require("../images/CareerPageImg/hover-img.png")}) #2f307c no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>

            <div className="current-img-box col-lg-3 p-0 col-md-6">
            <div className="current-sec">
                <div className="current-show">
                  <center>
                    <img
                      class="current-hover-hide-img"
                      src={require("../images/CareerPageImg/career.png")}
                      style={{ width: "20%" }}
                      alt=""
                    />
                    <img
                      class="current-hover-show-img"
                      src={require("../images/CareerPageImg/career (1).png")}
                      style={{ width: "20%" }}
                      alt=""
                    />
                  </center>
                  <b>Full Stack Developer</b>
                  <p>(3-5 Years Experience)</p>
                  <p>Jaipur / WFO</p>
                  <Link to="/career-job">Apply Now</Link>
                </div>
                <div
                  className="current-hover-card"
                  style={{
                    background:
                      `url(${require("../images/CareerPageImg/hover-img.png")}) #2f307c no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>

            <div className="current-img-box col-lg-3 p-0 col-md-6">
            <div className="current-sec">
                <div className="current-show">
                  <center>
                    <img
                      class="current-hover-hide-img"
                      src={require("../images/CareerPageImg/career.png")}
                      style={{ width: "20%" }}
                      alt=""
                    />
                    <img
                      class="current-hover-show-img"
                      src={require("../images/CareerPageImg/career (1).png")}
                      style={{ width: "20%" }}
                      alt=""
                    />
                  </center>
                  <b>Full Stack Developer</b>
                  <p>(3-5 Years Experience)</p>
                  <p>Jaipur / WFO</p>
                  <Link to="/career-job">Apply Now</Link>
                </div>
                <div
                  className="current-hover-card"
                  style={{
                    background:
                      `url(${require("../images/CareerPageImg/hover-img.png")}) #2f307c no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="join-us-opt whatweoffer-sec">
        <div className="container">
          <div className="heading-sec">
            <h2 className="medium-font-size">
              Join us at &nbsp;
              <img width="170px" src="./images/logo.svg" alt="" />
            </h2>
          </div>
          <p className="join-us-text">
            Our values-driven organization— is built on innovation, customer
            success, trust, sustainability, equality, and responsibility for
            each other and giving it back to our communities. From the very
            initial stages, A3Logics's founders had a vision: to develop a bit
            of a different technology company dedicated to building the planet a
            better place.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Careers;
