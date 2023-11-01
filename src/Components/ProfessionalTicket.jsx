// ProfessionalTicket
import { useMemo,useState,useEffect } from "react";
import data from "../Data/data.json";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Router } from "../router/appRouter";
import { useSelector } from "react-redux";
import PrimaryBtn from "./PrimaryBtn";
import axios from "axios";
import { API_URL } from "../utils/constant";

const ProfessionalTicket = ({ link = Router.checkout }) => {
  const ticketData = data.tickets.ticketSection.options[1];

  const authStatus = useSelector((state) => state.Main.status);

  const userData = useSelector((state) => state.Main.userData);
  // alert(userData.is_verified);

  const { type, description, benefits, image } = ticketData;

  const [ticketCount, setTicketCount] = useState([]);

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
        // console.log(res.data);
         setTicketCount(res.data.ProfessionalTicket-20);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);

  return (
    <div className="ProfessionalTicket">
      <div className="ProfessionalTicket-container">
        <div className="ProfessionalTicket-container-info">
          <div className="ProfessionalTicket-container-text">
            <div className="ProfessionalTicket-container-text-heading">
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
                  <div>
                    <span
                      style={{
                        color: "var(--yellow)",
                      }}
                    >
                      {ticketCount} Ticket's Left
                    </span>
                  </div>
                </div>
              ) : (
                <p
                  style={{
                    color: "var(--white)",
                    backgroundColor: "var(--green)",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                  }}
                >
                  You have been added to the waiting list! 🎉
                </p>
              )}
            </div>
          </div>
          <div className="ProfessionalTicket-container-benefits">
            <h4>Benefits</h4>
            <div className="ProfessionalTicket-container-benefits-list">
              <ul>{renderBenefits}</ul>
            </div>
          </div>
        </div>
        <div className="ProfessionalTicket-container-image">
          <img src={image} alt={`${type} image`} />
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTicket;
