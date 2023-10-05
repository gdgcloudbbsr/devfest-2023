import { RxCross2 } from "react-icons/rx";
import SectionHeadingText from "../Components/SectionHeadingText";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Router } from "../router/appRouter";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setLoginModal } from "../Store/Slices/MainSlice";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { animateScroll } from "react-scroll";

const LoginModal = () => {
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

  const handleSubmit = (e) => {
    console.log("lol");
    e.preventDefault();

    if (error.email) {
      toast.error("Please enter a valid email address.");
      return;
    }

    alert(`${data.email} ${data.password}`);

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
  };

  const loginPopModal = useSelector((state) => state.Main.loginModal);

  const dispatch = useDispatch();

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
              <Link className="forgot">Forgot Password</Link>
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
              <span>Sign in</span>
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
