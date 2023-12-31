import { useEffect, useMemo, useState } from "react";
import data from "../Data/data.json";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Router } from "../router/appRouter";
import { useSelector } from "react-redux";
import PrimaryBtn from "./PrimaryBtn";
import axios from "axios";
import { API_URL } from "../utils/constant";
import PopupModal from "./PopupModal";

const StudentTicket = ({ link = Router.checkout }) => {
  const ticketData = data.tickets.ticketSection.options[0];
  const authStatus = useSelector((state) => state.Main.status);
  const userData = useSelector((state) => state.Main.userData);

  const { type, description, benefits, image } = ticketData;

  const [ticketCount, setTicketCount] = useState([]);

  const [showMenu, setShowMenu] = useState(false);

  const renderBenefits = useMemo(() => {
    return benefits.map((benefit, index) => (
      <li key={index}>
        <div className="ico">
          <BsFillCheckCircleFill />
        </div>
        <span>{benefit}</span>
      </li>
    ));
  }, [benefits]);

  useEffect(() => {
    axios
      .get(`${API_URL}/getTicketCount`)
      .then((res) => {
        setTicketCount(res.data.StudentTicket);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {showMenu && <PopupModal showMenu={showMenu} setShowMenu={setShowMenu} />}
      <div className="StudentTicket">
        <div className="StudentTicket-container">
          <div className="StudentTicket-container-info">
            <div className="StudentTicket-container-text">
              <div className="StudentTicket-container-text-heading">
                <h3>{type}</h3>
                <p>{description}</p>
              </div>
              <div>
                {/* <span
                  style={{
                    color: "var(--white)",
                    backgroundColor: "var(--blue)",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                  }}
                >
                  Out of Stock
                </span> */}
                {!authStatus ? (
                  <p
                    style={{
                      color: "var(--yellow)",
                    }}
                  >
                    Please login to buy tickets!
                  </p>
                ) : userData.is_verified ? (
                  <div>
                    <button
                      onClick={() => setShowMenu(true)}
                      className="SecondaryBtn"
                    >
                      Grab Now
                    </button>
                    <div>
                      <span
                        style={{
                          color: "var(--yellow)",
                        }}
                      >
                        {ticketCount} Ticket's Left
                      </span>
                    </div>
                    {/* {ticketCount === 0 ? (
                      <span
                        style={{
                          color: "var(--white)",
                          backgroundColor: "var(--blue)",
                          padding: "1rem",
                          borderRadius: "0.5rem",
                        }}
                      >
                        Out of Stock
                      </span>
                    ) : (
                      <>
                        <button
                          onClick={() => setShowMenu(true)}
                          className="SecondaryBtn"
                        >
                          Grab Now
                        </button>
                        <div>
                          <span
                            style={{
                              color: "var(--yellow)",
                            }}
                          >
                            {ticketCount} Ticket's Left
                          </span>
                        </div>
                      </>
                    )} */}
                  </div>
                ) : (
                  <>
                    {/* <p
                      style={{
                        color: "var(--white)",
                        backgroundColor: "var(--blue)",
                        padding: "1rem",
                        borderRadius: "0.5rem",
                      }}
                    >
                      You have been added to the waiting list! 🎉
                    </p> */}
                    <span
                      style={{
                        color: "var(--white)",
                        backgroundColor: "var(--blue)",
                        padding: "1rem",
                        borderRadius: "0.5rem",
                        marginTop: "1rem",
                      }}
                    >
                      Out of Stock
                    </span>
                  </>
                )}
              </div>
            </div>
            <div className="StudentTicket-container-benefits">
              <h4>Benefits</h4>
              <div className="StudentTicket-container-benefits-list">
                <ul>{renderBenefits}</ul>
              </div>
            </div>
          </div>
          <div className="StudentTicket-container-image">
            <img src={image} alt={`${type} image`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentTicket;
