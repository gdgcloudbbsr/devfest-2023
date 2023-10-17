import { useEffect, useRef } from "react";
import Wrapper from "../Components/Wrapper";

import DashboardTicket from "../Layouts/DashboardTicket";
import Footer from "../Layouts/Footer";

gsap.registerPlugin(ScrollTrigger);

const Dashboard = () => {
  const main = useRef();

  const userData = useSelector((state) => state.Main.userData);
  const { name } = userData;

  const paymentStatus = true;
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Dashboard | DevFest Bhubaneswar 2023";
  }, []);

  const msg = () => {
    if (!paymentStatus) {
      return `${
        name.split(" ")[0]
      }, Your payment is Incomplete. Please complete your payment to get your ticket.`;
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
