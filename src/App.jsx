import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Layouts/Footer";
// import HeaderOld from "./Layouts/HeaderOld";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Header from "./Layouts/Header";
import LoginModal from "./Layouts/LoginModal";
import { useSelector } from "react-redux";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const location = useLocation();
  const progressBar = useRef(null);
  const app = useRef(null);

  const loginPopModal = useSelector((state) => state.Main.loginModal);

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(progressBar.current, {
        width: "110%",
        ease: "none",
        scrollTrigger: {
          trigger: app.current,
          scrub: 1,
          start: "top 0%",
          end: "bottom bottom",
        },
      });

      ScrollTrigger.refresh();

      if (location.pathname === "/") {
        document.title = "Home | DevFest Bhubaneswar 2023";
      } else {
        if (location.pathname.includes("_")) {
          document.title = `${(
            location.pathname.substring(1).charAt(0).toUpperCase() +
            location.pathname.substring(1).slice(1)
          ).replace(/_/g, " ")}  | DevFest Bhubaneswar 2023`;
        } else {
          document.title = `${
            location.pathname.substring(1).charAt(0).toUpperCase() +
            location.pathname.substring(1).slice(1)
          }  | DevFest Bhubaneswar 2023`;
        }
      }
    }, app.current);

    return () => ctx.revert();
  }, [location.pathname]);

  useEffect(() => {
    requestAnimationFrame(raf);
  }, []);

  return (
    <div id="App" ref={app}>
      {loginPopModal && <LoginModal />}
      <div className="progress" ref={progressBar}></div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
