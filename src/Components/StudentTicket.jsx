import { useMemo } from "react";
import data from "../Data/data.json";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Router } from "../router/appRouter";
import { useSelector } from "react-redux";

const StudentTicket = ({ link = Router.checkout }) => {
  const ticketData = data.tickets.ticketSection.options[0];
  const authStatus = useSelector((state) => state.Main.status);

  const { type, description, benefits, image } = ticketData;

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

  return (
    <div className="StudentTicket">
      <div className="StudentTicket-container">
        <div className="StudentTicket-container-info">
          <div className="StudentTicket-container-text">
            <div className="StudentTicket-container-text-heading">
              <h3>{type}</h3>
              <p>{description}</p>
            </div>
            {/* <div
              className={`StudentTicket-container-text-btn ${
                !stock ? "outOfStock" : ""
              }`}
            >
              <div
                onClick={() => {
                  dispatch(setOccupation("student"));
                }}
              >
                <PrimaryBtn
                  link={!stock ? null : link}
                  text={!stock ? "Out of Stock" : button}
                />
              </div>

              {stock !== 0 && (
                <div className="stock">
                  <h3>
                    {stock} <span>Ticket's left</span>
                  </h3>
                </div>
              )}

              {!stock && (
                <p>
                  {`Tickets for ${type} are currently out of stock. Please stay tuned for updates.`}
                </p>
              )}
            </div> */}
            <div>
              {!authStatus ? (
                <p
                  style={{
                    color: "var(--yellow)",
                  }}
                >
                  Please login to buy tickets!
                </p>
              ) : (
                <p>You have been added to the waiting list! 🎉</p>
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
  );
};

export default StudentTicket;