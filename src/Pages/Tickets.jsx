import { useEffect } from "react";
import LineBanner from "../Components/LineBanner";
import ProfessionalTicket from "../Components/ProfessionalTicket";
import SectionHeader from "../Components/SectionHeader";
import SectionHeadingText from "../Components/SectionHeadingText";
import StudentTicket from "../Components/StudentTicket";
import Wrapper from "../Components/Wrapper";
import data from "../Data/data.json";
import { useNavigate } from "react-router-dom";
import { Router } from "../router/appRouter";
import { useSelector } from "react-redux";

const Tickets = () => {
  const authStatus = useSelector((state) => state.Main.status);
  const userData = useSelector((state) => state.Main.userData);

  const { occupation } = userData;

  const paymentStatus = false;
  const navigate = useNavigate();

  useEffect(() => {
    if (paymentStatus) {
      navigate(Router.myTickets);
    } else {
      navigate(Router.tickets);
    }
  }, [paymentStatus]);
  
  return (
    <div id="Tickets">
      <div id="Tickets-header">
        <SectionHeader
          text={data.tickets.h1}
          image={"/assets/images/img6.webp"}
          paragraph={data.tickets.p}
          color="#428eff"
        />
      </div>
      <Wrapper>
        <div
          id="Tickets-container"
          style={{
            minHeight: "80vh",
          }}
        >
          <div id="Tickets-container-heading">
            <SectionHeadingText text={data.tickets.ticketSection.title} />
            <p>{data.tickets.ticketSection.p}</p>
          </div>
          {(authStatus &&
            (occupation === "student" ? (
              <StudentTicket />
            ) : (
              <ProfessionalTicket />
            ))) || (
            <>
              <StudentTicket />
              <ProfessionalTicket />
            </>
          )}
        </div>
      </Wrapper>
      <LineBanner classN={"banner-7"} color={"#428eff"} />
    </div>
  );
};

export default Tickets;
