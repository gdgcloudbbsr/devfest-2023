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

const CheckOut = () => {
  const loginPopModal = useSelector((state) => state.Main.loginModal);

  const authStatus = useSelector((state) => state.Main.status);

  const userData = useSelector((state) => state.Main.userData);

  const checkoutTicket = useSelector((state) => state.Main.checkoutTicket);

  const occupationValue = userData?.occupation;

  useEffect(() => {
    document.title = "Checkout | DevFest Bhubaneswar 2023";
  }, []);

  const popModal = useSelector((state) => state.Main.popModal);

  const dispatch = useDispatch();

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
                    <li>
                      <span>Tax ( GST )</span>
                      <span>{"5%"}</span>
                    </li>
                    <li>
                      <span>Shipping</span>
                      <span>Free</span>
                    </li>
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
                          dispatch(setPopModal(!popModal));
                        }}
                      >
                        <PrimaryBtn text={"Pay Now"} />
                      </div>
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
