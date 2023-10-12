import { useState } from "react";
import Wrapper from "../Components/Wrapper";
import toast from "react-hot-toast";
import SectionHeadingText from "../Components/SectionHeadingText";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import info from "../Data/data.json";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({
    name: true,
    email: false,
    message: true,
  });

  function isValidEmail(email) {
    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return pattern.test(email);
  }

  const handleInputChange = ({ target: { name, value } }) => {
    setData({
      ...data,
      [name]: value,
    });

    setError({
      ...error,
      [name]: name === "email" ? !isValidEmail(value) : value.length === 0,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (error.email) {
      toast.error("Please enter a valid email address.");
      return;
    }

    alert(`${data.email} ${data.name} ${data.message}`);

    setData({
      name: "",
      email: "",
      message: "",
    });

    setError({
      name: false,
      email: false,
      message: false,
    });
  };

  return (
    <div id="Contact">
      <Wrapper>
        <div id="Contact-container">
          <div id="Contact-container-header">
            <SectionHeadingText text={"Contact Us"} />
            <p>
              Fill up the form and our Team will get back to you within 24
              hours.
            </p>
            <div id="Contact-container-header-info">
              <ul>
                <li>
                  <div className="ico">
                    <MdEmail />
                  </div>
                  <span>{info.contact.email}</span>
                </li>
                <li>
                  <div className="ico">
                    <MdPhone />
                  </div>
                  <span>{info.contact.mobileNumber}</span>
                </li>
                <li>
                  <div className="ico">
                    <MdLocationOn />
                  </div>
                  <span>{info.contact.address}</span>
                </li>
              </ul>
            </div>
          </div>
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
            {/* email  */}
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

            {/* message  */}
            <div className="inputBox">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                required="required"
                value={data.message}
                onChange={handleInputChange}
              ></textarea>
              <label className="label" htmlFor="messgae">
                Message
              </label>
            </div>

            {/* button  */}
            <button
              type="submit"
              className={
                !data.email || !data.name || !data.message
                  ? "cursor-disabled"
                  : "cursor-pointer"
              }
              disabled={!data.email || !data.name || !data.message}
            >
              <span>Send</span>
            </button>
          </form>
        </div>
      </Wrapper>
    </div>
  );
};

export default Contact;
