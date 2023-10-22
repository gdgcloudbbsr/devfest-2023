import { useEffect, useRef } from "react";
import Wrapper from "../Components/Wrapper";
import DashboardTicket from "../Layouts/DashboardTicket";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Router } from "../router/appRouter";
import toast from "react-hot-toast";

const Dashboard = () => {
  const main = useRef();
  const isMounted = useRef(true);

  const userData = useSelector((state) => state.Main.userData);
  const { is_paid } = userData;

  const navigate = useNavigate();

  const error = () => {
    if (!is_paid) {
      navigate(Router.tickets);
      toast.error("Please purchase a ticket to access your Ticket page.");
    }
  };

  useEffect(() => {
    document.title = "Dashboard | DevFest Bhubaneswar 2023";
    if (!is_paid) {
      navigate(Router.tickets);
      toast.error("Please purchase a ticket to access your Ticket page.");
    }
  }, []);

  return (
    <>
      <div id="Dashboard" ref={main}>
        <Wrapper>
          <div id="Dashboard-container">
            <DashboardTicket paymentStatus={is_paid} />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Dashboard;
