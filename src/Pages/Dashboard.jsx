import { useEffect, useRef } from "react";
import DashboardHeader from "../Components/DashboardHeader";
import Wrapper from "../Components/Wrapper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import HeadingMessage from "../Components/HeadingMessage";
import { useSelector } from "react-redux";
import DashboardTicket from "../Layouts/DashboardTicket";
import Footer from "../Layouts/Footer";

gsap.registerPlugin(ScrollTrigger);

const Dashboard = () => {
  const main = useRef();

  const userData = useSelector((state) => state.Main.userData);
  const { name } = userData;

  const paymentStatus = true;
  const stock = 250;

  useEffect(() => {
    document.title = "Dashboard | DevFest Bhubaneswar 2023";
  }, []);

  const msg = () => {
    if (!paymentStatus) {
      return `${
        name.split(" ")[0]
      }, Your payment is Incomplete. Please complete your payment to get your ticket.`;
    } else {
      return `🎉Congratulations ${
        name.split(" ")[0]
      }, Your payment is Complete. Please download your ticket.`;
    }
  };

  return (
    <>
      <div id="Dashboard" ref={main}>
        {!stock ? (
          <HeadingMessage text="Sorry, Tickets are Sold Out." />
        ) : (
          <HeadingMessage text={msg()} />
        )}
        <DashboardHeader />
        <Wrapper>
          <div id="Dashboard-container">
            <DashboardTicket paymentStatus={paymentStatus} stock={stock} />
          </div>
        </Wrapper>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
