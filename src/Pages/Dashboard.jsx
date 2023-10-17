import { useEffect, useRef } from "react";
import DashboardHeader from "../Components/DashboardHeader";
import Wrapper from "../Components/Wrapper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import HeadingMessage from "../Components/HeadingMessage";
import { useSelector } from "react-redux";
import DashboardTicket from "../Layouts/DashboardTicket";
import Footer from "../Layouts/Footer";
import { API_URL } from "../utils/constant";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Dashboard = () => {
  const main = useRef();
  const navigate=useNavigate();
  //const userData = useSelector((state) => state.Main.userData);
  //const { name } = userData;
  const [cookies, removeCookie] = useCookies([]);
  var name=null;
  const paymentStatus = true;
  const stock = 250;

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        ("/login");
      }
      const { status,data } = await axios.post(
        `${API_URL}`,
        {},
        { withCredentials: true }
      );
      name=data.name;
      //const { status, user } = data;
      // setUsername(user);
      // return status
      //   ? toast(`Hello ${user}`, {
      //       position: "top-right",
      //     })
      //   : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

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
