import { useSelector } from "react-redux";
import SectionHeadingText from "../Components/SectionHeadingText";
import data from "../Data/data.json";
import PrimaryBtn from "../Components/PrimaryBtn";
import { FaShareAlt } from "react-icons/fa";

const DashboardTicket = ({ paymentStatus, stock }) => {
  const userData = useSelector((state) => state.Main.userData);
  const downloadLink = "#";

  const {
    name,
    occupation,
    nameInstitute,
    city,
    emailAddress,
    workEmailAddress,
    designation,
  } = userData;

  return (
    <>
      <div id="DashboardTicket">
        <div id="DashboardTicket-container">
          <div id="DashboardTicket-container-heading">
            <SectionHeadingText
              text={
                occupation === "student"
                  ? "Student Ticket"
                  : "Professional Ticket"
              }
            />
          </div>
          <div id="DashboardTicket-container-image">
            {occupation === "student" ? (
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
          <div id="DashboardTicket-container-ticketDetails">
            <div id={`btn-group`}>
              <PrimaryBtn text={"Download Ticket"} link={downloadLink} />
              <button>
                <FaShareAlt />
                <span>Share</span>
              </button>
            </div>
          </div>
          <div id="DashboardTicket-container-details-container">
            <div id="DashboardTicket-container-details">
              <div className="DashboardTicket-container-details-item">
                <span>Name</span>
                <h4>{name}</h4>
              </div>
              <div className="DashboardTicket-container-details-item">
                <span>Designation</span>
                <h4
                  style={{
                    textTransform: "capitalize",
                  }}
                >
                  {designation}
                </h4>
              </div>
              <div className="DashboardTicket-container-details-item email">
                <span>Email Address</span>
                <h4
                  style={{
                    textTransform: "lowercase",
                  }}
                >
                  {occupation === "student" ? emailAddress : workEmailAddress}
                </h4>
              </div>
            </div>
            <div id="DashboardTicket-container-details">
              <div className="DashboardTicket-container-details-item">
                <span>
                  {occupation === "student" ? "College Name" : "Company Name"}
                </span>
                <h4>{nameInstitute}</h4>
              </div>
              <div className="DashboardTicket-container-details-item">
                <span>City</span>
                <h4
                  style={{
                    textTransform: "capitalize",
                  }}
                >
                  {city}
                </h4>
              </div>
            </div>
            <div id="DashboardTicket-container-details">
              <div className="DashboardTicket-container-details-item payment">
                <span>Payment Status</span>
                <h4
                  style={{
                    textTransform: "capitalize",
                    backgroundColor: paymentStatus ? "#4caf50" : "#f44336",
                  }}
                >
                  {paymentStatus ? "Complete" : "Incomplete"}
                </h4>
              </div>
            </div>
            <div id="DashboardTicket-container-details">
              <div className="DashboardTicket-container-details-item">
                <span>Event Date</span>
                <h4>{data.date}</h4>
              </div>
              <div className="DashboardTicket-container-details-item">
                <span>Event Time</span>
                <h4>{data.time}</h4>
              </div>
              <div className="DashboardTicket-container-details-item">
                <span>Event Venue</span>
                <h4>{data.venueData.text}</h4>-{" "}
                <a href={data.venueData.link} target="_blank">
                  Map Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTicket;
