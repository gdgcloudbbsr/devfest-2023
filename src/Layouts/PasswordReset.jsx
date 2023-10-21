import { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BsArrowLeft } from "react-icons/bs";
import SectionHeadingText from "../Components/SectionHeadingText";
import {
  setLoginModal,
  setPasswordResetModal,
} from "../Store/Slices/MainSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";

const PasswordReset = () => {
  const dispatch = useDispatch();

  const passwordResetModal = useSelector(
    (state) => state.Main.passwordResetModal
  );
  const loginPopModal = useSelector((state) => state.Main.loginModal);

  const [data, setData] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [otpInputs, setOTPInputs] = useState(["", "", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const [showPassword, setShowPassword] = useState(false);

  const [forWardPath, setForWardPath] = useState({
    emailInput: true,
    otpInput: false,
    newPasswordInput: false,
  });

  function isValidEmail(email) {
    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return pattern.test(email);
  }

  const [error, setError] = useState({
    email: false,
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
  };

  const emailSubmitHandle = (e) => {
    e.preventDefault();
    const user = true;
    if (user) {
      setForWardPath({
        ...forWardPath,
        emailInput: false,
        otpInput: true,
      });
    }
  };

  const OtpHandleChange = (index, value) => {
    const sanitizedValue = value.replace(/\D/g, "");

    setOTPInputs((prevInputs) => {
      const newInputs = [...prevInputs];
      newInputs[index] = sanitizedValue.slice(0, 1);

      return newInputs;
    });

    if (index < inputRefs.length - 1 && sanitizedValue.length > 0) {
      inputRefs[index + 1].current.focus();
    }
  };

  const OtpSubmitHandle = (e) => {
    e.preventDefault();
    const otp = otpInputs.join("");
    alert(otp);
    setOTPInputs(["", "", "", ""]);
    setForWardPath({
      ...forWardPath,
      otpInput: false,
      newPasswordInput: true,
    });
  };

  const NewPasswordValueHandle = ({ target: { name, value } }) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const NewPasswordSubmit = (e) => {
    e.preventDefault();

    if (data.newPassword !== data.confirmPassword) {
      toast.error("Password not matched");
      return;
    } else {
      alert(data.newPassword);
      toast.success("Password changed successfully");
      dispatch(setPasswordResetModal(!passwordResetModal));
      dispatch(setLoginModal(!loginPopModal));
    }
  };

  useEffect(() => {
    console.log(otpInputs);
  }, []);

  return (
    <div className="PasswordReset PopupModal">
      <div className="PasswordReset-container PopupModal-container">
        <button
          id="cancel"
          onClick={() => {
            dispatch(setPasswordResetModal(!passwordResetModal));
          }}
        >
          <div className="ico">
            <RxCross2 />
          </div>
        </button>

        {/* password reset email input part  */}

        {forWardPath.emailInput && (
          <div id="emailInputPasswordReset">
            <SectionHeadingText text={"Reset Password"} />
            <p>
              Enter your email address below and we'll send you a OTP to reset
              your password.
            </p>
            <div className="formBox">
              <form onSubmit={emailSubmitHandle}>
                <div className="inputBox">
                  {/* email input  */}

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

                  {/* ----- */}
                </div>

                <div className="btn-groups">
                  <button type="submit">Send OTP</button>
                  <div
                    className="back"
                    onClick={() => {
                      dispatch(setPasswordResetModal(!passwordResetModal));
                      dispatch(setLoginModal(!loginPopModal));
                    }}
                  >
                    <BsArrowLeft />
                    <span>Back to Login</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ---------------- */}
        {/* otp verification  */}

        {forWardPath.otpInput && (
          <div id="otpVerification">
            <SectionHeadingText text={"OTP Verification"} />
            <p>
              Check your Email address ( <span>{data.email}</span> ) for the
              verification code.
            </p>
            <div className="formBox">
              <form onSubmit={OtpSubmitHandle}>
                <div className="row">
                  {otpInputs.map((value, index) => (
                    <input
                      key={index}
                      ref={inputRefs[index]}
                      type="text"
                      maxLength="1"
                      value={value}
                      onChange={(e) => OtpHandleChange(index, e.target.value)}
                      autoComplete="off"
                      placeholder="0"
                    />
                  ))}
                </div>

                <div className="btn-groups">
                  <button type="submit">Verify</button>
                  <div
                    className="back"
                    onClick={() => {
                      dispatch(setPasswordResetModal(!passwordResetModal));
                      dispatch(setLoginModal(!loginPopModal));
                    }}
                  >
                    <BsArrowLeft />
                    <span>Back to Login</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ---------------- */}

        {/* new password input  */}

        {forWardPath.newPasswordInput && (
          <div id="newInputField">
            <SectionHeadingText text={"Change Password"} />
            <p>
              Change your Password ( <span>{data.email}</span> ).
            </p>
            <div className="formBox">
              <form onSubmit={NewPasswordSubmit}>
                <div className="inputBox">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="newPassword"
                    id="password"
                    required="required"
                    value={data.newPassword}
                    onChange={NewPasswordValueHandle}
                    style={{
                      textTransform: "none",
                    }}
                    autoComplete="off"
                  />
                  <label className="label" htmlFor="password">
                    New Password
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
                <div className="inputBox">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    id="password"
                    required="required"
                    value={data.confirmPassword}
                    onChange={NewPasswordValueHandle}
                    style={{
                      textTransform: "none",
                    }}
                    autoComplete="off"
                  />
                  <label className="label" htmlFor="password">
                    Confirm Password
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
                <button type="submit">Change</button>
              </form>
            </div>
          </div>
        )}

        {/* ---------------- */}
      </div>
    </div>
  );
};

export default PasswordReset;
