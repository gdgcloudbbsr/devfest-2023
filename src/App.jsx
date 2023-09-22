import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const location = useLocation();
  const progressBar = useRef(null);
  const app = useRef(null);

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
        document.title = `${
          location.pathname.substring(1).charAt(0).toUpperCase() +
          location.pathname.substring(1).slice(1)
        }  | DevFest Bhubaneswar 2023`;
      }
    }, app.current);

    return () => ctx.revert();
  }, [location.pathname]);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div id="App" ref={app}>
      <div className="progress" ref={progressBar}></div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
