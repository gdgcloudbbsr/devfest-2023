import { useMemo } from "react";
import data from "../Data/data.json";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Router } from "../router/appRouter";
import { useSelector } from "react-redux";
import PrimaryBtn from "./PrimaryBtn";

const StudentTicket = ({ link = Router.checkout }) => {
  const ticketData = data.tickets.ticketSection.options[0];
  const authStatus = useSelector((state) => state.Main.status);
  const userData=useSelector((state)=>state.Main.userData);

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
            <div>
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
                  <PrimaryBtn link={link} text={"Grab Now"} />
                </div>
              ) : (
                <p
                  style={{
                    color: "var(--white)",
                    backgroundColor: "var(--blue)",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                  }}
                >
                  You have been added to the waiting list! 🎉
                </p>
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