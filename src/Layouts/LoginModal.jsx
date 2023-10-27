import { RxCross2 } from "react-icons/rx";
import SectionHeadingText from "../Components/SectionHeadingText";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Router } from "../router/appRouter";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoginModal,
  setPasswordResetModal,
  setUserData,
} from "../Store/Slices/MainSlice";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { animateScroll } from "react-scroll";
import axios from "axios";
import { API_URL } from "../utils/constant";

const LoginModal = () => {
  const loginPopModal = useSelector((state) => state.Main.loginModal);
  const passwordResetModal = useSelector(
    (state) => state.Main.passwordResetModal
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function isValidEmail(email) {
    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return pattern.test(email);
  }

  const [error, setError] = useState({
    email: false,
    password: true,
    valid: true,
  });

  const handleInputChange = ({ target: { name, value } }) => {
    setData({
      ...data,
      [name]: value,
    });

    if (name === "email") {
      setError({
        ...error,
        email: !isValidEmail(value),
      });
    }

    if (name === "password") {
      setError({
        ...error,
        password: value.length === 0,
      });
    }
  };

  const verifyCookie = async (token) => {
    // alert(token);
    try {
      const response = await axios.post(
        `${API_URL}`,
        {
          jwtToken: token,
        },
        null,
        {
          withCredentials: true,
        }
      );

      if (response.data.status === true) {
        dispatch(setUserData(response.data.user));
      } else {
        removeCookie("jwtToken");
        navigate(Router.home);
        document.cookie =
          "jwtToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      }
    } catch (error) {
      // console.error("Error verifying cookie:", error);
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (error.email) {
      toast.error("Please enter a valid email address.");
      return;
    }

    let Email = data.email;
    let Password = data.password;

    let tempEmail = Email;

    try {
      const response = await axios.post(`${API_URL}/login`, {
        email: Email,
        password: Password,
      });
      document.cookie = `jwtToken=${response.data.jwttoken}; path=/`;
      dispatch(setLoginModal(!loginPopModal));
      await toast.promise(
        new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 1000); // Adjust the duration as needed
        }),
        {
          loading: "Logging in...",
          success: "Login successful!",
          error: "An error occurred during login.",
        }
      );
      // window.location.reload();
      navigate(Router.home);
      tempEmail = null;
      return verifyCookie(response.data.jwttoken);
    } catch (error) {
      // console.log(error);
      toast.error("Login failed : " + error.response.data.error);
      if (error.response.data.error === "User not found") {
        toast.error("Please register first");
        setData({
          ...data,
          email: "",
          password: "",
        });

        setError({
          ...error,
          email: false,
          valid: true,
        });

        setShowPassword(false);

        setLoading(false);
      } else {
        toast.error("Login failed : " + error.response.data.error);
        setData({
          ...data,
          email: tempEmail,
          password: "",
        });
        setLoading(false);
      }
    }
  };

  return (
    <div className="LoginModal PopupModal">
      <div className="PopupModal-container LoginModal-container">
        <button
          id="cancel"
          onClick={() => {
            dispatch(setLoginModal(!loginPopModal));
          }}
        >
          <div className="ico">
            <RxCross2 />
          </div>
        </button>
        <div className="LoginModalHeading">
          <SectionHeadingText text={"Sign in"} />
        </div>

        {/* form  */}
        <div className="formBox">
          <form onSubmit={handleSubmit}>
            {/* emailAddress  */}

            <div className="inputBox">
              <input
                type="text"
                name="email"
                id="email"
                required="required"
                value={data.email}
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

            {/* password  */}

            <div className="password">
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
              <div
                className="forgot"
                onClick={() => {
                  dispatch(setLoginModal(!loginPopModal));
                  dispatch(setPasswordResetModal(!passwordResetModal));
                }}
              >
                Forgot Password?
              </div>
            </div>
            {/* -- */}
            <button
              type="submit"
              className={
                !data.email || !data.password
                  ? "cursor-disabled"
                  : "cursor-pointer"
              }
              disabled={!data.email || !data.password}
            >
              <span>{!loading ? "Sign in" : "Loading..."}</span>
            </button>
          </form>
          {/* -- */}
        </div>

        <span className="LoginFooter">
          Don't Have any Account?{" "}
          <Link
            to={Router.register}
            onClick={() => {
              dispatch(setLoginModal(!loginPopModal));
              animateScroll.scrollToTop();
            }}
          >
            Register
          </Link>
        </span>

        {/* -- */}
      </div>
    </div>
  );
};

export default LoginModal;