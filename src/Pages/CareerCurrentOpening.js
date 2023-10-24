import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

const CareerCurrentOpening = () => {
  const initialValues = {
    fullname: "",
    email: "",
    phone: "",
    currentctc: "",
    expectedctc:"",
    noticePeriod:"",
    file:"",
  };

  // const navigate = useNavigate();

  const [User, setUser] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [message, setMessage] = useState();
  const [data, setData] = useState();

  // const [error, setError] = useState()

  // const [state, setState] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  // useEffect(() => {
  // 	console.log(message);
  // 	if(Object.keys(message).length === 0 && isSubmit) {
  // 		console.log(User);

  // 	}
  // },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullname, email, phone, currentctc,expectedctc,noticePeriod,file } = User;

    const object = {
      fullname: fullname.trim(),
      email: email.trim(),
      phone: phone.trim(),
      currentctc: currentctc.trim(),
      expectedctc: expectedctc.trim(),
      noticePeriod: noticePeriod.trim(),   
      file: file.trim(),
    };
    console.log(object)

    setFormErrors(validate(User));

    // add entity - POST
    // e.preventDefault();
    // creates entity
  //   const passwordLength2 = /^.{6,}$/;
  //   // const regex1 = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
  //   // /^[^@]+@(yahoo|gmail|mail|rocketmail)\.(com|in|co\.uk)$/i;
  //   const regex1 = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
  //   if (
  //     fullname.trim() === "" ||
  //     email.trim() === "" ||
  //     password.trim() === "" ||
  //     currentctc.trim() === "" ||
  //     regex1.test(email.trim()) === false ||
  //     passwordLength2.test(password.trim()) === false
  //   ) {
  //     return;
  //   } else {
  //     fetch(`${process.env.REACT_APP_APIURL}/register`, {
  //       method: "POST",
  //       mode: "cors",
  //       body: JSON.stringify(object),
  //       headers: {
  //         "Content-type": "application/json",
  //         Accept: "application/json",
  //       },
  //     })
  //       .then((response) => response.json(console.log(response)))

  //       .then((json) => {
  //         setData({
  //           User: json,
  //         });
  //         // if (json.message === "successfully register") {
  //         //   navigate("/login");
  //         // }

  //         // setMessage(json.message)
  //         console.log(json);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     // setState(valid(json.message));

      setIsSubmit(true);
  //   }
  };

  // useEffect(() => {
  // 	const res = data?.User?.error;
  // 	setError(res);

  // }, [])

  useEffect(() => {
    const res = data?.User?.message;
    setMessage(res);
  }, [data]);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(User);
      // fetchData()
    }
  }, []);

  const validate = (values) => {
    const errors = {};

    const passwordLength = /^.{6,}$/;
    const regex = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
    if (!values.fullname) {
      errors.fullname = "!'Please Enter Your Name'";
    }
    if (!values.email) {
      errors.email = "!'Please Enter Your Email'";
    } else if (!regex.test(values.email)) {
      errors.email = "!'This is not Email Format'";
    }
    if (!values.phone) {
      errors.phone = "!'Please Enter Your Phone'";
    } else if (!passwordLength.test(values.password)) {
      errors.password = "!'Please Enter maximum 6 character'";
    }

    if (!values.currentctc) {
      errors.currentctc = "!'Please Enter Currentctc'";
    }
    if (!values.expectedctc) {
      errors.expectedctc = "!'Please Enter Expectedctc'";
    }
    if (!values.noticePeriod) {
      errors.noticePeriod = "!'Please Enter NoticePeriod'";
    }
    if (!values.file) {
      errors.file = "!'Please Enter Your Resume'";
    }
    return errors;
  };

  return (
    <div>
       <Header />
      <section
        className="career-banner"
        style={{
          background:
            "url(https://assets.a3logics.com/career/slider-2.jpg) no-repeat center center",
          backgroundSize: "cover",
          height:"500px"
        }}
      ></section>
      <section className="career-content py-5">
        <div className="container">
          <h1>EDI Analyst</h1>

          <div className="exp-sec">
            <b>
              <img src="https://assets.a3logics.com/career/exp-1.png" alt="" />
              (0 - 1 Year Experience)
            </b>
            <b>
              <img src="https://assets.a3logics.com/career/exp-2.png" alt="" />
              Jaipur / WFO
            </b>
          </div>

          <div className="career-info">
            <b>Job Brief:</b>
            <p>
              We are looking for a candidate who can cope with the fast-paced
              requirements of EDIs while maintaining proper interaction with
              trade partners. Develop new systems for clients, analyze
              requirements, produce mapping documents, and test systems.
            </p>
            <b>Responsibilities</b>
            <ul>
              <li>
                Define the EDI requirements of a client by understanding their
                vision after closely focusing on the circumstances as presented
                by the client.
              </li>
              <li>
                Share your knowledge of EDIs with the clients to give them a
                perspective on the capabilities of the technology.
              </li>
              <li>Create and manage mapping documents as required.</li>
              <li>
                Oversee integration of information and maintain communication
                links with trade partners
              </li>
              <li>
                Identify and suggest possible modifications in the developed
                solution to meet the client's requirements
              </li>
            </ul>
            <b>Required Skills:</b>
            <ul>
              <li>B.Tech/ BCA/ B.E./ B.Sc. IT (preferred)</li>
              <li>
                He/she Should Be Having Excellent Written &amp; Verbal
                Communication Skills.
              </li>
              <li>He/She should have good knowledge of MS Excel.</li>
              <li>
                Having Basic Knowledge Of EDI &amp; Its Methodologies Would Be
                Best Suited For This Position.
              </li>
              <li>
                Any Past Experience In Healthcare Domain Would Be Preferable.
              </li>
              <li>The person should be comfortable working in Night shifts.</li>
            </ul>
          </div>

  





          <div className="center">

 
    <Link
              className="default-btn btnapply"
              data-bs-toggle="modal"
              data-bs-target="#payment_id"
              
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>


      <div
                              className="modal fade"
                              id="payment_id" 
                              style={{ background: "#00000052" }}
                              data-bs-backdrop="static"
                              data-bs-keyboard="false"
                              tabIndex="-1"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog">
                                <div className="modal-content border-0">
                                  <div
                                    className="modal-header"
                                 
                                  >
                                    <h4
                                      className="modal-title fw-normal"
                                      id="exampleModalLabel"
                                    >
                                      Personal Details

                                    </h4>
                                    <button
                                      type="button"
                                      className="bg-transparent border-0"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    >
                                      <i className="fa-solid fa-xmark fs-3 "></i>
                                    </button>
                                  </div>
                                  <div className="modal-body p-3 applymodal-body">
                             <form onSubmit={handleSubmit}>
            <div class="contact-form-new">
              <div class="contact-inp">
                <input class="form-met" onChange={handleChange} type="text" placeholder="Full Name" name="fullname" required=""/>
                <p style={{ color: "red" }}>{formErrors.fullname}</p>
              </div>

              <div class="contact-inp">
                <input class="form-met" onChange={handleChange} type="Email" placeholder="Email Address" name="email" required=""/>
                <p style={{ color: "red" }}>{formErrors.email}</p>
              </div>
              <div class="contact-inp">
                <input class="form-met" onChange={handleChange} type="tel" placeholder="Mobile No." maxlength="10" name="phone" required=""/>
                <p style={{ color: "red" }}>{formErrors.phone}</p>
              </div>

              <div class="contact-inp">
                <input class="form-met" onChange={handleChange} type="text" placeholder="Current CTC" name="currentctc" required=""/>
                <p style={{ color: "red" }}>{formErrors.currentctc}</p>
              
              </div>
              <div class="contact-inp">
                <input class="form-met" onChange={handleChange} type="text" placeholder="Expected CTC" name="expectedctc" required=""/>
                <p style={{ color: "red" }}>{formErrors.expectedctc}</p>
              
              </div>

              <div class="contact-inp">
                <input class="form-met" onChange={handleChange} type="text" placeholder="Notice Period" name="noticePeriod" required=""/>
                <p style={{ color: "red" }}>{formErrors.noticePeriod}</p>
             
              </div>

              <div class="contact-inp">
                <input type="hidden" name="pagetitle" value="EDI Analyst" />
              </div>

              <div class="contact-inp">
                <div class="mb-3">
                  <label for="formFile" class="form-label">Upload Resume</label>
                  <input class="form-control" onChange={handleChange} type="file" name="file" id="formFile" accept=".doc,.docx,.pdf,application/msword,application/pdf" required=""/>
                  <p style={{ color: "red" }}>{formErrors.file}</p>
               
                </div>
              </div>

              <div class="center sbmit_btn">
                <button type="submit" class="default-btn border-0">Submit</button>
              </div>
            </div>
          </form>
                                   
                                  </div>
                                </div>
                              </div>
                            </div>
    </div>
  );
};

export default CareerCurrentOpening;
