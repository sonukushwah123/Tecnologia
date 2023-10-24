import React from "react";
import { Link } from "react-router-dom";
// import CareerImg from "../../images/CareerImages/career-bg.jpg"

const Careers = () => {
  return (
    <section
      className="career-scroll-sec"
      style={{
        background: `url(${require("../../images/CareerImages/career-bg.jpg")}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="career-scroller">
          <div className="career-scroller-colum">
            <div className="career-scroller-colum-title">
              <h4>CAREERS</h4>
              <b>
                We understand we might not be your destination,
                <br />
                But we promise we will be a great partner in your journey.
                <br />
              </b>
              <p>Come be part of the team</p>
            </div>

            <div className="scroller-colum-button">
              <Link to="/careers" className="default-btn text-decoration-none">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
