import LineBanner from "../Components/LineBanner";
import ProfessionalTicket from "../Components/ProfessionalTicket";
import SectionHeader from "../Components/SectionHeader";
import SectionHeadingText from "../Components/SectionHeadingText";
import StudentTicket from "../Components/StudentTicket";
import Wrapper from "../Components/Wrapper";
import data from "../Data/data.json";

const Tickets = () => {
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
          <StudentTicket />
          <ProfessionalTicket />
        </div>
      </Wrapper>
      <LineBanner classN={"banner-7"} color={"#428eff"} />
    </div>
  );
};

export default Tickets;
