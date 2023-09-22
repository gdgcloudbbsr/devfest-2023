import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import SectionHeadingText from "../Components/SectionHeadingText";
import Wrapper from "../Components/Wrapper";
import { useEffect, useState } from "react";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    occupation: "student",
    emailAddress: "",
    workEmailAddress: "",
    designation: "",
    nameInstitute: "",
    gender: "",
    city: "",
    howDoYouHear: "",
  });

  const [error, setError] = useState({
    email: "",
    workEmail: "",
  });

  function isValidEmail(email) {
    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return pattern.test(email);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value.trim(),
    });

    if (name === "emailAddress") {
      if (isValidEmail(value)) {
        setError({ ...error, email: false });
      } else {
        setError({ ...error, email: true });
      }
    }

    if (name === "workEmailAddress") {
      if (isValidEmail(value)) {
        setError({ ...error, workEmail: false });
      } else {
        setError({ ...error, workEmail: true });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
    ${data.name}
    ${data.gender}
    ${data.occupation}
    ${data.city}
    `);
  };

  useEffect(() => {
    document.title = "Register | DevFest 2023 Bhubaneswar";
  }, []);

  return (
    <div className="Register">
      <div id="bgImage">
        <img src="/assets/images/img1.webp" alt="" />
      </div>
      <Wrapper>
        <div className="Register-heading">
          <Link className="ButtonBack " to={"/"}>
            <div className="ico">
              <BsArrowLeft />
            </div>
            <span>Go Back</span>
          </Link>
          <div className="logo">
            <img src="/assets/logo.svg" alt="logo" />
          </div>
        </div>
        <div className="Register-container">
          {/* formBox  */}

          <div id="formBox">
            {/* form-heading  */}
            <div id="formBox-heading">
              <SectionHeadingText text={"Register"} />
            </div>

            {/* form  */}

            <form onSubmit={handleSubmit}>
              {/* name input  */}
              <div className="inputBox">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required="required"
                  value={data.name}
                  onChange={handleInputChange}
                />
                <label className="label" htmlFor="name">
                  Name
                </label>
              </div>
              {/* gender checkbox  */}
              <div className="inputCheckBox">
                <span>Gender</span>
                <div className="col">
                  <div>
                    {/* male gender  */}

                    <input
                      type="radio"
                      name="gender"
                      id="maleGender"
                      value="male"
                      checked={data.gender === "male"}
                      required="required"
                      onChange={handleInputChange}
                    />
                    <label htmlFor="maleGender">Male</label>

                    {/* ---- */}
                  </div>
                  <div>
                    {/* female gender  */}

                    <input
                      type="radio"
                      name="gender"
                      id="femaleGender"
                      value="female"
                      checked={data.gender === "female"}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="femaleGender">Female</label>

                    {/* ---- */}
                  </div>
                  <div>
                    {/* other gender  */}

                    <input
                      type="radio"
                      name="gender"
                      id="otherGender"
                      value="other"
                      checked={data.gender === "other"}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="otherGender">Others</label>

                    {/* ---- */}
                  </div>
                </div>
              </div>
              {/* occupation checkbox */}
              <div className="inputCheckBox">
                <span>Are you a Professional?</span>
                <div className="col">
                  <div>
                    {/* professional  */}
                    <input
                      type="radio"
                      name="occupation"
                      id="ProfessionalYes"
                      value="professional"
                      checked={data.occupation === "professional"}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="ProfessionalYes">Yes</label>

                    {/* ---- */}
                  </div>
                  <div>
                    {/* student  */}

                    <input
                      type="radio"
                      name="occupation"
                      id="ProfessionalNo"
                      value="student"
                      checked={data.occupation === "student"}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="ProfessionalNo">No</label>

                    {/* ---- */}
                  </div>
                </div>
              </div>
              {/* email  */}
              <div className="inputBox">
                <input
                  type="text"
                  name="emailAddress"
                  id="email"
                  required="required"
                  value={data.emailAddress}
                  onChange={handleInputChange}
                />
                <label className="label" htmlFor="email">
                  Email Address
                </label>
                {error.email === true && (
                  <div className={`info red`}>
                    <span>{"invalid email address"}</span>
                  </div>
                )}
              </div>
              {/* work email address  */}
              {data.occupation === "professional" && (
                <div className="inputBox">
                  <input
                    type="text"
                    name="workEmailAddress"
                    id="workEmail"
                    required="required"
                    value={data.workEmailAddress}
                    onChange={handleInputChange}
                  />
                  <label className="label" htmlFor="workEmail">
                    Work Email Address
                  </label>
                  {error.workEmail === true && (
                    <div className={`info red`}>
                      <span>invalid work email address</span>
                    </div>
                  )}
                </div>
              )}
              {/* ---- */}
              {/* designation  */}
              <div className="inputBox">
                <input
                  type="text"
                  name="designation"
                  id="designation"
                  required="required"
                  value={data.designation}
                  onChange={handleInputChange}
                />
                <label className="label" htmlFor="designation">
                  Designation
                </label>
                <div className="info">
                  <span>Note : if you are student, write student</span>
                </div>
              </div>
              {/* ---- */}
              {/* Company or University name  */}
              <div className="inputBox">
                <input
                  type="text"
                  name="nameInstitute"
                  id="nameInstitute"
                  required="required"
                  value={data.nameInstitute}
                  onChange={handleInputChange}
                />
                <label className="label" htmlFor="nameInstitute">
                  {data.occupation === "professional"
                    ? "Company Name"
                    : "University Name"}
                </label>
              </div>
              {/* ---- */}
              {/* city */}
              <div className="inputBox">
                <input
                  type="text"
                  name="city"
                  id="city"
                  required="required"
                  value={data.city}
                  onChange={handleInputChange}
                />
                <label className="label" htmlFor="city">
                  City
                </label>
              </div>
              {/* ---- */}

              {/* How did you hear about DevFest'23? */}
              <div className="inputBox">
                <input
                  type="text"
                  name="howDoYouHear"
                  id="howDoYouHear"
                  required="required"
                  value={data.howDoYouHear}
                  onChange={handleInputChange}
                />
                <label className="label" htmlFor="howDoYouHear">
                  How did you hear about DevFest'23?
                </label>
              </div>
              {/* ---- */}
              <button type="submit" className="SecondaryBtn">
                <span>Next</span>
              </button>
            </form>
            {/* ---- */}
          </div>

          {/* ----- */}
        </div>
      </Wrapper>
    </div>
  );
};

export default Register;
