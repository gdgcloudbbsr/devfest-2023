import { useEffect } from "react";
import Wrapper from "../Components/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import SectionHeadingText from "../Components/SectionHeadingText";
import data from "../Data/data.json";
import PrimaryBtn from "../Components/PrimaryBtn";
import LoginModal from "../Layouts/LoginModal";
import { setLoginModal, setPopModal } from "../Store/Slices/MainSlice";
import PopupModalOld from "../Components/PopupModalOld";
import { Router } from "../router/appRouter";
import axios from "axios";
import { API_URL } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const loginPopModal = useSelector((state) => state.Main.loginModal);

  const authStatus = useSelector((state) => state.Main.status);

  const userData = useSelector((state) => state.Main.userData);

  const checkoutTicket = useSelector((state) => state.Main.checkoutTicket);

  const occupationValue = userData?.occupation;

  useEffect(() => {
    document.title = "Checkout | DevFest Bhubaneswar 2023";
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    if (!userData.is_verified) {
      navigate(Router.tickets);
    }
  }, [userData.is_verified]);

  const popModal = useSelector((state) => state.Main.popModal);

  const dispatch = useDispatch();

  function loadScript(src) {
    // alert("load script call");
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    // alert("display call");
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    //creating a new order
    const order = await axios
      .post(`${API_URL}/order`, { user: userData })
      .catch((err) => toast.error("No Ticket Left"));
    if (order.status == 200) {
      // Getting the order details back
      const { amount, id: id, currency, receipt } = order.data;
      // console.log(order);

      var options = {
        //"key": 'rzp_test_KkQShTvtQCSvgx', // Enter the Key ID generated from the Dashboard
        amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: currency,
        name: "GDG BBSR", //your business name
        description: "Test Transaction",
        image: "http://localhost:5173/assets/devfest.svg",
        order_id: id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        //callback_url: "http://localhost:5173/my_tickets",
        handler: async function (response) {
          console.log(response);
          const data = {
            orderCreationId: receipt,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };
          const result = await axios.post(`${API_URL}/book`, {
            user: userData,
            txnid: data.razorpayPaymentId,
          });

          if (result.status == 200) {
            toast.success("Ticked Booked Successfully");
            location.href = "/my_tickets";
          } else if (result.status == 400) {
            toast.error("No ticked available");
          } else {
            toast.error("Server error. Are you online?");
          }
        },
        prefill: {
          //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
          name: userData.name, //your customer's name
          email: userData.emailAddress, //your customer's email
          //contact: "9000090000", //Provide the customer's phone number for better conversion rates
        },
        notes: {
          address: "Google Developers Group, Bhubaneswar",
        },
        theme: {
          color: "#38a852",
          headerColor: "#ffbb01",
          bodyColor: "#ff5145",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response) {
        toast.error("Payment Failed");
      });
      paymentObject.open();
    }
  }

  return (
    <>
      {popModal && <PopupModalOld />}
      <div id="CheckOut">
        <Wrapper>
          <div id="CheckOut-container">
            <div id="CheckOut-container-left">
              <div id="CheckOut-container-left-summery">
                <SectionHeadingText text={"Product Info"} />
                <div id="CheckOut-container-left-summery-item">
                  <div id="CheckOut-container-left-summery-item-image">
                    {occupationValue === "student" ? (
                      <img
                        src="/assets/studentTicket.webp"
                        alt="studentTicket Devfest bhubaneswar 2023"
                      />
                    ) : (
                      <img
                        src="/assets/professionalTicket.webp"
                        alt="professionalTicket Devfest bhubaneswar 2023"
                      />
                    )}
                  </div>
                  <div id="CheckOut-container-left-summery-item-text">
                    <h4>
                      DevFest 2023{" "}
                      {occupationValue === "student"
                        ? "Student"
                        : "Professional"}{" "}
                      Ticket
                    </h4>
                    <div className="row">
                      <div className="qty">
                        Qty: <span>1</span>
                      </div>
                      <div className="price">
                        Price:{" "}
                        <span>
                          {data.tickets.ticketSection.options[0].price}
                        </span>
                      </div>
                      <div>
                        Delivery: <span>Virtual ( Email Address )</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="CheckOut-container-left-details">
                <SectionHeadingText text={"Personal Info"} />
                <div id="CheckOut-container-left-details-container">
                  {!authStatus && (
                    <div className="btn-groups">
                      <div
                        onClick={() => {
                          dispatch(setLoginModal(!popModal));
                        }}
                      >
                        <PrimaryBtn text={"Sign in"} />
                      </div>
                      <div className="second">
                        <PrimaryBtn
                          text={"Register Now"}
                          link={Router.register}
                        />
                      </div>
                    </div>
                  )}
                  <div className="txt">
                    Name: <span>{userData?.name || "Smruti Ranjan Nayak"}</span>
                  </div>
                  <div className="txt">
                    Email Address:{" "}
                    <span>{userData?.emailAddress || "smruti@gmail.com"}</span>
                  </div>
                  <div
                    className="txt"
                    style={{
                      textTransform: "capitalize",
                    }}
                  >
                    Occupation: <span>{userData?.occupation || "student"}</span>
                  </div>
                  <div className="txt">
                    Address:{" "}
                    <span>
                      {userData?.nameInstitute || "NMIET,Bhubaneswar"}
                    </span>
                  </div>
                </div>
              </div>
              <div id="CheckOut-container-left-paymentOptions">
                <SectionHeadingText text={"Payment Options"} />
                <ul>
                  <li>
                    <img
                      src="/assets/paymentOptions/bankIcons.svg"
                      alt="Payment Options"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div id="CheckOut-container-right">
              <div id="CheckOut-container-right-container">
                <SectionHeadingText text={"Order Summery"} />
                <div id="CheckOut-container-right-container-price">
                  <ul>
                    <li>
                      <span>SubTotal</span>
                      <span>{data.tickets.ticketSection.options[0].price}</span>
                    </li>
                    <li>
                      <span>Quantity</span>
                      <span>x1</span>
                    </li>
                    {/* <li>
                      <span>Tax ( GST )</span>
                      <span>{"5%"}</span>
                    </li>
                    <li>
                      <span>Shipping</span>
                      <span>Free</span>
                    </li> */}
                  </ul>
                  <ul>
                    <li>
                      <span>Total</span>
                      <span>{data.tickets.ticketSection.options[0].price}</span>
                    </li>
                    <li>
                      <div
                        className="btn"
                        onClick={() => {
                          // dispatch(setPopModal(!popModal));
                          displayRazorpay();
                        }}
                      >
                        <PrimaryBtn text={"Pay Now"} />
                      </div>
                      {/* Stay Tuned */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default CheckOut;
