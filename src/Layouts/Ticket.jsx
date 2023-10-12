import OverlayBg from "../Components/OverlayBg";
import PrimaryBtn from "../Components/PrimaryBtn";
import Wrapper from "../Components/Wrapper";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { setPopModal } from "../Store/Slices/MainSlice";
import { Router } from "../router/appRouter";

const Ticket = () => {
  const main = useRef(null);

  const popModal = useSelector((state) => state.Main.popModal);
  const dispatch = useDispatch();

  useEffect(() => {
    const ctx = gsap.context(() => {
      main.current.addEventListener("mousemove", (e) => {
        let xPos = e.clientX / window.innerWidth - 0.5,
          yPos = e.clientY / window.innerHeight - 0.5;

        gsap.to(main.current, {
          rotationY: 15 * xPos,
          rotationX: 15 * yPos,
          ease: "Power1.easeOut",
          transformPerspective: 900,
          transformOrigin: "center",
        });
      });

      main.current.addEventListener("mouseleave", () => {
        gsap.to(main.current, {
          rotationY: 0,
          rotationX: 0,
          ease: "Power1.easeOut",
        });
      });
    }, main.current);

    return () => ctx.revert();
  }, []);
  return (
    <div id="Ticket">
      <OverlayBg />
      <Wrapper>
        <div id="Ticket-container">
          <img
            src="/assets/ticket.webp"
            alt="Devfest BBSR 2023 Ticket"
            ref={main}
          />
          <PrimaryBtn text={"Get Tickets"} size={true} link={Router.tickets} />
        </div>
      </Wrapper>
    </div>
  );
};

export default Ticket;
