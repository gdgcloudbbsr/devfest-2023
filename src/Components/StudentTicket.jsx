import { useMemo } from "react";
import data from "../Data/data.json";
import PrimaryBtn from "./PrimaryBtn";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Router } from "../router/appRouter";
import { useDispatch } from "react-redux";
import { setOccupation } from "../Store/Slices/MainSlice";

const StudentTicket = ({ link = Router.tickets }) => {
  const dispatch = useDispatch();
  const stock = 300;
  const ticketData = data.tickets.ticketSection.options[0];

  const { type, description, price, button, benefits, image } = ticketData;

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
            <div className="StudentTicket-container-text-price">
              <h2>{price}</h2>
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
