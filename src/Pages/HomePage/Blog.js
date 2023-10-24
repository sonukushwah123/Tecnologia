import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { parsePath } from "react-router-dom";
// import parse from 'html-react-parser';
import blogbgimg from "../../images/BlogImages/blog.jpg"

import blogs from "../testing.json";

const Blog = () => {
  const [blog, setblog] = useState("");
  const [blogsSec, setBlogsSec] = useState("");

  const [blogsSlider, setBlogsSlider] = useState([]);

  useEffect(() => {
    setblog(blogs.message);

    setBlogsSec(blogs.message[0].blog[0]);

    setBlogsSlider(blogs.message[0].blog[0].blogs);
  }, []);

  return (
    <>
      <section className="py-5">
        <div className="heading-sec">
          <h3 className="heading1">{blogsSec.title}</h3>

          <h2>Explore The World Of Technology & Its Advanced Applications</h2>
        </div>
        <div
          className="blog"
          style={{
            background: `url(${require("../../images/BlogImages/blog.jpg")}) no-repeat`,
            padding: "150px 0px",
          }}
        >
          <div className="container">
            <div className=" row justify-content-around">
              {blogsSlider.map((item, i) => {
                return (
                  <div className="blog-img-box col-md-4">
                    <div className="blog-content">
                      <b>{item.title}</b>
                      <br />
                      <Link to={item.btn_url}>{item.btn_text}</Link>
                    </div>
                  </div>
                );
              })}

            
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
