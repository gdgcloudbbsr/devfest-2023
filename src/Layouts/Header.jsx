import { useEffect, useRef, useState } from "react";
import Wrapper from "../Components/Wrapper";
import PrimaryBtn from "../Components/PrimaryBtn";
import SecondaryBtn from "../Components/SecondaryBtn";
import data from "../Data/data.json";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoginModal,
  setLogout,
  setPopModal,
} from "../Store/Slices/MainSlice";
import { animateScroll } from "react-scroll";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import toast from "react-hot-toast";
import { Router } from "../router/appRouter";
import { useCookies } from "react-cookie";

const links = [
  {
    text: "home",
    link: "/",
  },
  {
    text: "schedule",
    link: "/schedule",
  },
  {
    text: "Speakers",
    link: "/speakers",
  },
  {
    text: "Tickets",
    link: "/tickets",
  },
  {
    text: "sponsorships",
    link: "/sponsorship",
  },
  // {
  //   text: "Team",
  //   link: "/team",
  // },
  {
    text: "contact",
    link: "/contact",
  },
];

const Header = () => {
  const [cookies, removeCookie] = useCookies([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const loginPopModal = useSelector((state) => state.Main.loginModal);
  const comingModal = useSelector((state) => state.Main.popModal);

  const authStatus = useSelector((state) => state.Main.status);

  const userData = useSelector((state) => state.Main.userData);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const tl = useRef(
    gsap.timeline({ defaults: { ease: "power1.inOut" } }).reverse()
  );

  const toggleMenu = (menuOpen) => {
    if (menuOpen) {
      tl.current
        .to(
          "#navmenu",
          {
            y: 0,
            duration: 0.5,
          },
          "a"
        )
        .to(
          "#navmenu #navlinks > *",
          {
            opacity: 1,
            y: 0,
            // stagger: 0.1,
          },
          "a"
        );
    }
  };

  const handleClick = () => {
    toggleMenu(!menuOpen);
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    tl.current.reversed(!menuOpen);
  }, [menuOpen]);

  const Logout = () => {
    removeCookie("jwtToken");
    navigate(Router.home);
    toast.success("Logout successful");
    document.cookie =
      "jwtToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };

  return (
    <header id="header">
      <Wrapper>
        <div id="header-container">
          <Link to={Router.home} className="logo">
            <img src={data.Header.logo} alt="DevFest Bhubaneswar 2023 logo" />
          </Link>
          <div id="navmenu">
            <div id="navmenu-container">
              <div id="navlinks">
                {links.map((elem, index) => (
                  <NavLink
                    to={elem.link}
                    key={index}
                    onClick={() => {
                      setMenuOpen(false);
                      animateScroll.scrollToTop();
                    }}
                  >
                    {elem.text}
                  </NavLink>
                ))}
              </div>
              <div className="btn-groups">
                <div
                  className="div1"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  <SecondaryBtn
                    text={"Get profile badge"}
                    link={Router.badge}
                  />
                </div>
                {!authStatus && (
                  <div
                    onClick={() => {
                      setMenuOpen(false);
                      dispatch(setLoginModal(!loginPopModal));
                    }}
                  >
                    <PrimaryBtn text={"Sign in"} />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div id="header-right">
            <div
              className={`hamMenu ${menuOpen && "active"}`}
              onClick={handleClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            {authStatus && (
              <div id="header-profile">
                <div id="header-profile-name">
                  <h5>{userData?.name.split(" ")[0]}</h5>
                </div>
                <div
                  id="header-profile-col"
                  onClick={() => {
                    setDropDownOpen(!dropDownOpen);
                  }}
                >
                  <div id="header-profile-img">{userData?.name[0]}</div>
                  <div className="ico">
                    {dropDownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </div>
                </div>
                {dropDownOpen ? (
                  <div id="header-profile-dropdown">
                    <div className="dropdown">
                      <NavLink
                        className="dropdown-item"
                        to={Router.myTickets}
                        onClick={() => {
                          setDropDownOpen(false);
                          animateScroll.scrollToTop();
                        }}
                      >
                        My Tickets
                      </NavLink>
                      <div
                        className="dropdown-item"
                        onClick={() => {
                          setDropDownOpen(false);
                          dispatch(setLogout());
                          Logout();
                        }}
                      >
                        Logout
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
