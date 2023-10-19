import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Layouts/Footer";
// import HeaderOld from "./Layouts/HeaderOld";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Header from "./Layouts/Header";
import LoginModal from "./Layouts/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import Lenis from "@studio-freight/lenis";
import { useCookies } from "react-cookie";
import axios from "axios";
import { setUserData } from "./Store/Slices/MainSlice";
import toast from "react-hot-toast";
import { Router } from "./router/appRouter";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const location = useLocation();
  const progressBar = useRef(null);
  const app = useRef(null);

  const [cookies, removeCookie] = useCookies([]);

  const userData = useSelector((state) => state.Main.userData);

  const dispatch = useDispatch();

  const navigate = useNavigate();

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

  const formatDocumentTitle = (pathname) => {
    if (pathname === "/") {
      return "Home | DevFest Bhubaneswar 2023";
    } else {
      const formattedPathname =
        pathname.substring(1).charAt(0).toUpperCase() +
        pathname.substring(1).slice(1);

      return pathname.includes("_")
        ? `${formattedPathname.replace(/_/g, " ")} | DevFest Bhubaneswar 2023`
        : `${formattedPathname} | DevFest Bhubaneswar 2023`;
    }
  };

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
      document.title = formatDocumentTitle(location.pathname);
    }, app.current);

    return () => ctx.revert();
  }, [location.pathname]);

  useEffect(() => {
    requestAnimationFrame(raf);
  }, []);

  const verifyCookie = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api", null, {
        withCredentials: true,
      });

      if (response.data.status === true) {
        console.log(response.data.user);
        dispatch(setUserData(response.data.user));
        toast.success("Welcome " + response.data.user.name);
      } else {
        removeCookie("jwtToken");
      }
    } catch (error) {
      console.error("Error verifying cookie:", error);
    }
  };

  useEffect(() => {
    return () => verifyCookie();
  }, [cookies, removeCookie]);

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
