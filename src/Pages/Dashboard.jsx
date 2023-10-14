import { useEffect, useRef } from "react";
import Wrapper from "../Components/Wrapper";

import DashboardTicket from "../Layouts/DashboardTicket";
import { useNavigate } from "react-router-dom";
import { Router } from "../router/appRouter";

const Dashboard = () => {
  const main = useRef();

  useEffect(() => {
    document.title = "My Tickets | DevFest Bhubaneswar 2023";
  }, []);

  const paymentStatus = true;
  const navigate = useNavigate();

  useEffect(() => {
    if (paymentStatus) {
      navigate(Router.myTickets);
    } else {
      navigate(Router.tickets);
    }
  }, [paymentStatus]);

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
