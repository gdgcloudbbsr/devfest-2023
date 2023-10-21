import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Layouts/Footer";
import { useEffect, useRef, useState } from "react";
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
import Loader from "./Components/Loader";
import PopupModalOld from "./Components/PopupModalOld";
import PasswordReset from "./Layouts/PasswordReset";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const location = useLocation();
  const progressBar = useRef(null);
  const app = useRef(null);

  const [cookies, removeCookie] = useCookies([]);

  const dispatch = useDispatch();

  const loginPopModal = useSelector((state) => state.Main.loginModal);
  const comingModal = useSelector((state) => state.Main.popModal);
  const passwordResetModal = useSelector(
    (state) => state.Main.passwordResetModal
  );

  const [loading, setLoading] = useState(true);

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

    const handleLoad = () => {
      setLoading(false);
    };

    // window.addEventListener("load", handleLoad);

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => {
      // window.removeEventListener("load", handleLoad);
      clearTimeout(timeoutId);
    };
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
    <>
      {loading ? (
        <Loader />
      ) : (
        <div id="App" ref={app}>
          {loginPopModal && <LoginModal />}
          {comingModal && <PopupModalOld />}
          {passwordResetModal && <PasswordReset />}

          <div className="progress" ref={progressBar}></div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
