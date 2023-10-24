import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import header from "../Pages/testing.json";
import Testing from "../Pages/testing3.json";

const Header = () => {
  console.log("Testing", Testing);

  const [show, setShow] = useState(false);

  const navClick = () => {
    setShow(!show);
  };

  let timeout;
  let scroll = 10;

  useEffect(() => {
    window.onscroll = () => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        if (scroll >= window.scrollY && window.scrollY > 10) {
          document.getElementById("header").classList.add("sticky");
        } else {
          document.getElementById("header").classList.remove("sticky");
        }

        scroll = window.scrollY;
      }, 10);
    };
  }, []);

  const [head, setHead] = useState("");
  const [headSec, setHeadSec] = useState("");

  const [logoSection, setLogoSection] = useState([]);
  const [menuSection, setMenuSection] = useState([]);

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setHead(header.message);

    setHeadSec(header.message[0].header[0]);

    console.log(header.message[0].header[0]);

    setLogoSection(header.message[0].header[0].logoSection);
    console.log(header.message[0].header[0].logoSection);

    setMenuSection(header.message[0].header[0].menuSection);
    console.log(header.message[0].header[0].menuSection);

    setMenu(header.message[0].header[0].menuSection[0].menu);
    console.log(header.message[0].header[0].menuSection[0].menu);
  }, []);

  const [hover, setHover] = useState([]);
  const [hover2, setHover2] = useState([]);
  const [hover3, setHover3] = useState([]);
  const [hoverShow, setHoverShow] = useState([]);
  const [hoverShow2, setHoverShow2] = useState([]);

  const level = Testing.message.filter((item) => {
    return item.level === 0;
  });

  const levelup = Testing.message.filter((item) => {
    return item.level === 1;
  });

  const innerlevelup = Testing.message.filter((item) => {
    return item.level === 2;
  });

  useEffect(() => {
    setHover(level);
    setHover2(levelup);
    setHover3(innerlevelup);
  }, []);

  const [showSubMenu, setShowSubMenu] = useState([]);

  const subMenuOnMouseEnterHandler = (subMenuID) => {
    setShowSubMenu((prev) => {
      console.log("running", subMenuID);

      let arr = [...prev];
      arr[subMenuID] = true;

      return arr;
    });

    const match = levelup.filter((category) => subMenuID === category.category);
    console.log("match", match);

    setHoverShow(match);
  };

  const subMenuOnMouseLeaveHandler = (subMenuID) => {
    setShowSubMenu((prev) => {
      console.log("running");

      let arr = [...prev];
      arr[subMenuID] = false;

      return arr;
    });
  };

  const subMenuOnMouseEnterHandler2 = (subMenuID) => {
    setShowSubMenu((prev) => {
      console.log("running", subMenuID);

      let arr = [...prev];
      arr[subMenuID] = true;

      return arr;
    });

    const match2 = innerlevelup.filter(
      (category) => subMenuID === category.category
    );
    console.log("match2", match2);

    setHoverShow2(match2);
  };

  const subMenuOnMouseLeaveHandler2 = (subMenuID) => {
    setShowSubMenu((prev) => {
      console.log("running");

      let arr = [...prev];
      arr[subMenuID] = false;

      return arr;
    });
  };

  return (
    <>
      <header
        id="header"
        style={{padding:"15px 30px",  zIndex: 1000, background: "#fff" }}
      >
  
        <nav
          className="navbar  nav2 navbar-expand-lg bg-body-tertiary "
          style={{ padding: 0,position:"revert" }}
        >
          <div className="container-fluid ">
            {logoSection.map((item) => {
              console.log("item", item);
              return (
                <Link className="navbar-brand" to="/">
                  <img
                    src="../images/logo.svg"
                    alt=""
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title={item.tooltip}
                  />
                </Link>
              );
            })}

<button
              className="navbar-toggler toggle-bar"
              onClick={navClick}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              {show === false ? (
                <i className="fa-solid fa-bars" />
              ) : (
                <i class="fa-solid fa-xmark"></i>
              )}
            </button>
           

            <div
              className="header-nav-collapse collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav sub-menu m-auto mb-2 mb-lg-0">
                {hover.map((item) => {
                  console.log(item);

                  return (
                    <>
                      <li
                        className="nav-item sub-menu-item"
                        onMouseEnter={(event) =>
                          subMenuOnMouseEnterHandler(item.id)
                        }
                        onMouseLeave={(event) =>
                          subMenuOnMouseLeaveHandler(item.id)
                        }
                        key={item.id}
                      >
                        <Link
                          className="nav-link menu-item"
                          to={`/${item.slug}`}
                        >
                          {item.name}
                          {/* {item.category > 0 ? (
                            <i className="fa-solid fa-caret-down" />
                          ) : (
                            ""
                          )} */}
                        </Link>

                        <ul className="dropdown-hover-item border-0">
                          {showSubMenu[item.id] &&
                            hoverShow.map((item2) => {
                              return (
                                <li
                                  onMouseEnter={() =>
                                    subMenuOnMouseEnterHandler2(item2.id)
                                  }
                                  onMouseLeave={() =>
                                    subMenuOnMouseLeaveHandler2(item2.id)
                                  }
                                  className="nav-item sub-menu-item"
                                  key={item2.id}
                                >
                                  <Link
                                    to={`/${item2.slug}`}
                                    className="border-0"
                                  >
                                    {item2.name}

                                    {/* {item2.level === 1 ? (
                                      <i className="fa-solid fa-caret-down" />
                                    ) : (
                                      ""
                                    )} */}
                                  </Link>

                                  <ul className="dropdown-hover-item">
                                    {showSubMenu[item2.id] &&
                                      hoverShow2.map((item3) => {
                                        return (
                                          <li
                                            className="nav-item sub-menu-item"
                                            key={item3.id}
                                          >
                                            <Link to={`/${item3.slug}`}>
                                              {item3.name}
                                            </Link>
                                          </li>
                                        );
                                      })}
                                  </ul>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                    </>
                  );
                })}
                {/* <li className="nav-item sub-menu-item border-0">
                  <Link className="nav-link menu-item border-0">
                    hello <i className="fa-solid fa-caret-down" />
                  </Link>

                  <ul className="dropdown-hover-item">
                    <li className="nav-item2 sub-menu-item2">
                      <Link className="nav-link2 menu-item2">hello</Link>

                      <ul className="dropdown-hover-item2">
                        <li className="nav-item3 sub-menu-item3">
                          <Link className="nav-link menu-item">hello</Link>
                        </li>
                        <li className="nav-item2 sub-menu-item2">
                          <Link className="nav-link2 menu-item2">hello</Link>
                        </li>
                        <li className="nav-item2 sub-menu-item2">
                          <Link className="nav-link2 menu-item2">hello</Link>
                        </li>
                        <li className="nav-item2 sub-menu-item2">
                          <Link className="nav-link2 menu-item2">hello</Link>
                        </li>
                        <li className="nav-item2 sub-menu-item2">
                          <Link className="nav-link2 menu-item2">hello</Link>
                        </li>
                        <li className="nav-item2 sub-menu-item2">
                          <Link className="nav-link2 menu-item2">hello</Link>
                        </li>
                    
                      </ul>
                    </li>
                    <li className="nav-item2 sub-menu-item2">
                          <Link className="nav-link2 menu-item2">hello</Link>
                        </li>
                        <li className="nav-item2 sub-menu-item2">
                          <Link className="nav-link2 menu-item2">hello</Link>
                        </li>
                        <li className="nav-item2 sub-menu-item2">
                          <Link className="nav-link2 menu-item2">hello</Link>
                        </li>
                        <li className="nav-item2 sub-menu-item2">
                          <Link className="nav-link2 menu-item2">hello</Link>
                        </li>
                        <li className="nav-item2 sub-menu-item2">
                          <Link className="nav-link2 menu-item2">hello</Link>
                        </li>
                  </ul>
                </li> */}
              </ul>
            </div>

            <div className="client-support-group">
              <div className="client-support">
                <Link to className="support">
                  <span> Client Support</span>
                  <span>
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                </Link>
                <br />
                <Link to className="support-number">
                  <span>1-800-356-8933</span>
                </Link>
              </div>
              <button className="contact-us" type="submit">
                Contact Us
              </button>
            

            </div>
          </div>
        </nav>
      
      </header>
    </>
  );
};

export default Header;
