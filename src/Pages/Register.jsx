import { Link, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import SectionHeadingText from "../Components/SectionHeadingText";
import Wrapper from "../Components/Wrapper";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../utils/constant";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "../Layouts/LoginModal";
import { setLoginModal, setUserData } from "../Store/Slices/MainSlice";
import { Router } from "../router/appRouter";
import toast from "react-hot-toast";
import { animateScroll } from "react-scroll";
import PasswordReset from "../Layouts/PasswordReset";
import bannedLists from "../Data/bannedMail.json";

const Register = () => {
  const loginPopModal = useSelector((state) => state.Main.loginModal);
  const passwordResetModal = useSelector(
    (state) => state.Main.passwordResetModal
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    occupation: "professional",
    emailAddress: "",
    workEmailAddress: "",
    designation: "",
    nameInstitute: "",
    gender: "",
    city: "",
    howDoYouHear: "nAn",
    password: "",
    linkedinUrl: "",
  });

  const [error, setError] = useState({
    email: false,
    workEmail: false,
    howDoYouHear: false,
    gender: false,
    linkedinUrl: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  function isValidEmail(email) {
    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return pattern.test(email);
  }

  const isLinkedInProfile = (url) => {
    const linkedinPattern =
      /^https?:\/\/(?:www\.)?linkedin\.com\/(?:in|pub)\/([a-zA-Z0-9_-]+)(?:\/.*)?$/;
    return linkedinPattern.test(url);
    // true or false
  };

  const isBannedEmailValid = (email) => {
    const bannedDomains = bannedLists.lists;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return false;
    }

    const [, domain] = email.split("@");

    if (bannedDomains.includes(domain)) {
      return false; // Email is from a banned domain
    }

    return true; // Email is valid and not from a banned domain
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });

    if (name === "gender") {
      if (value != "") {
        setError({ ...error, gender: false });
      }
    }

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
    if (name === "howDoYouHear") {
      if (value != "nAn") {
        setError({ ...error, howDoYouHear: false });
      }
    }

    if (name === "linkedinUrl") {
      if (isLinkedInProfile(value)) {
        setError({ ...error, linkedinUrl: false });
      } else {
        setError({ ...error, linkedinUrl: true });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.gender === "") {
      setError({ ...error, gender: true });
      return;
    }

    if (data.howDoYouHear === "nAn") {
      setError({ ...error, howDoYouHear: true });
      return;
    }

    if (!isBannedEmailValid(data.workEmailAddress)) {
      toast.error("Please enter a valid work email address");
      setData({ ...data, workEmailAddress: "" });
      return;
    }

    if (!isLinkedInProfile(data.linkedinUrl)) {
      toast.error("Please enter a valid linkedin profile url");
      setData({ ...data, linkedinUrl: "" });
      return;
    }

    data.emailAddress = data.emailAddress.toLowerCase();
    // Send the form data to the server

    axios
      .post(`${API_URL}/save`, { registration: data })
      .then(async (res) => {
        document.cookie = `jwtToken=${res.data.jwttoken}; path=/`;

        await toast.promise(
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, 1000); // Adjust the duration as needed
          }),
          {
            loading: "Registering...",
            success: "Registered successful!",
            error: "An error occurred during register.",
          }
        );
        navigate(Router.home);
        animateScroll.scrollToTop();
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });

    setData({
      name: "",
      occupation: "professional",
      emailAddress: "",
      workEmailAddress: "",
      designation: "",
      nameInstitute: "",
      gender: "",
      city: "",
      howDoYouHear: "nAn",
      password: "",
      linkedinUrl: "",
    });

    setShowPassword(false);
  };

  useEffect(() => {
    document.title = "Register | DevFest 2023 Bhubaneswar";
  }, []);

  return (
    <>
      {loginPopModal && <LoginModal />}
      {passwordResetModal && <PasswordReset />}

      <div className="Register">
        <div id="bgImage">
          <img
            src="/assets/images/img1.webp"
            alt="DevFest 2023 Bhubaneswar image"
          />
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
                <span className="LoginFooter">
                  Do Have any Account?{" "}
                  <button
                    onClick={() => {
                      dispatch(setLoginModal(!loginPopModal));
                    }}
                    style={{
                      color: "var(--blue)",
                      textDecoration: "underline",
                    }}
                  >
                    Sign in
                  </button>
                </span>
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
                  {error.gender === true && (
                    <div className={`info red`}>
                      <span>Please choose a gender option</span>
                    </div>
                  )}
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
                      <span>Please enter a valid email address.</span>
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
                        <span>Please enter a valid work email address</span>
                      </div>
                    )}
                  </div>
                )}
                {/* ---- */}

                {/* password */}
                <div className="inputBox">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    required="required"
                    value={data.password}
                    onChange={handleInputChange}
                    style={{
                      textTransform: "none",
                    }}
                    autoComplete="off"
                  />
                  <label className="label" htmlFor="password">
                    Password
                  </label>
                  <div
                    className="ico"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </div>
                </div>

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
                      : "College Name"}
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

                {/* linkedin url  */}

                <div className="inputBox">
                  <input
                    type="text"
                    name="linkedinUrl"
                    id="linkedin"
                    required="required"
                    value={data.linkedinUrl}
                    onChange={handleInputChange}
                    style={{
                      textTransform: "lowercase",
                    }}
                  />
                  <label className="label" htmlFor="linkedin">
                    Linkedin Profile URL
                  </label>
                  {error.linkedinUrl === true && (
                    <div className={`info red`}>
                      <span>
                        Oops! This doesn't look like a LinkedIn profile.
                      </span>
                    </div>
                  )}
                </div>

                {/* How did you hear about DevFest'23? */}

                <div className="inputBoxSelect">
                  <label className="label" htmlFor="howDoYouHear">
                    How did you hear about DevFest'23?
                  </label>
                  <select
                    name="howDoYouHear"
                    id="howDoYouHear"
                    onChange={handleInputChange}
                    required="required"
                    value={data.howDoYouHear}
                  >
                    <option value="nAn">Select choose one</option>
                    <option value="Linkedin">Linkedin</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Twitter">Twitter</option>
                    <option value="Whatsapp">Whatsapp</option>
                    <option value="Google">Google</option>
                    <option value="Friend">Friend</option>
                    <option value="GDGPage">Google Developer Club page</option>
                    <option value="Others">Others</option>
                  </select>

                  {error.howDoYouHear === true && (
                    <div className={`info red`}>
                      <span>Please select an option</span>
                    </div>
                  )}
                </div>
                {/* ---- */}
                <button
                  type="submit"
                  className="SecondaryBtn"
                  onClick={() => {
                    animateScroll.scrollToTop();
                  }}
                >
                  <span>Register</span>
                </button>
              </form>
              {/* ---- */}
            </div>

            {/* ----- */}
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Register;
