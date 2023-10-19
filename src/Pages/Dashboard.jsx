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

  const paymentStatus = is_paid;
  const navigate = useNavigate();

  const error = () => {
    if (!paymentStatus) {
      navigate(Router.tickets);
      toast.error("Please purchase a ticket to access your Ticket page.");
    }
  };

  useEffect(() => {
    document.title = "Dashboard | DevFest Bhubaneswar 2023";
    return error;
  }, []);

  return (
    <>
      <div id="Dashboard" ref={main}>
        <Wrapper>
          <div id="Dashboard-container">
            <DashboardTicket paymentStatus={paymentStatus} />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Dashboard;
