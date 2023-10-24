import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section>
      <footer style={{ padding: "40px 30px", background: "#000" }}>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="footer-logo text-center">
              <Link to="/">
                <img
                  src="./images/logo-footer.svg"
                  alt=""
                  className="card-img-top"
                  style={{ maxWidth: "100%" }}
                />
              </Link>
              <div className="card-body">
                <button className="schedule" type="submit">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="footer-ul-section">
              <h4>Solutions</h4>
              <div className="d-flex justify-content-between w-75">
                <ul className="footer-ul p-0">
                  <li>
                    <Link to>Managed Services</Link>
                  </li>
                  <li>
                    <Link to>IT Consulting &amp; Advisory</Link>
                  </li>
                  <li>
                    <Link to>Cyber Security</Link>
                  </li>
                  <li>
                    <Link to>Web Development</Link>
                  </li>
                </ul>
                <ul className="footer-ul p-0">
                  <li>
                    <Link to>Mobile Development</Link>
                  </li>
                  <li>
                    <Link to>Cloud Services</Link>
                  </li>
                  <li>
                    <Link to>Network Connectivity</Link>
                  </li>
                  <li>
                    <Link to>ERP Solutions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="footer-ul-section">
              <h4>Company</h4>
              <div className="d-flex justify-content-between w-75">
                <ul className="footer-ul p-0">
                  <li>
                    <Link to>About Us</Link>
                  </li>
                  <li>
                    <Link to>Why Us</Link>
                  </li>
                  <li>
                    <Link to>Team</Link>
                  </li>
                  <li>
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link to>Partner &amp; Certifications</Link>
                  </li>
                  <li>
                    <Link to>Reviews &amp; Awards</Link>
                  </li>
                </ul>
                <ul className="footer-ul p-0">
                  <li>
                    <Link to>Blog</Link>
                  </li>
                  <li>
                    <Link to>Case Studies</Link>
                  </li>
                  <li>
                    <Link to>Events</Link>
                  </li>
                  <li>
                    <Link to>FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="footer-send-msg">
            <input
              type="text"
              className="update-input"
              placeholder="Don’t miss out updates  "
            />
            <span className="checkbox">
              <input type="checkbox" />
              &nbsp;
              <label>
                I agree to the Privacy Policy and give my permission to process
                my personal data for the purposes specified in the Privacy
                Policy.
              </label>
            </span>
          </div>
          <button className="schedule mt-2" type="submit">
            Send
            <i className="fa-solid fa-arrow-right ms-2" />
          </button>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
