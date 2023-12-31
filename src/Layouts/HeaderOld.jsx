import Wrapper from "../Components/Wrapper";
import PrimaryBtn from "../Components/PrimaryBtn";
import SecondaryBtn from "../Components/SecondaryBtn";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { setPopModal } from "../Store/Slices/MainSlice";
import data from "../Data/data.json";
import { NavLink } from "react-router-dom";

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
  {
    text: "Team",
    link: "/team",
  },
  {
    text: "contact",
    link: "/contact",
  },
];

const HeaderOld = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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

  const popModal = useSelector((state) => state.Main.popModal);

  const dispatch = useDispatch();

  return (
    <div id="header">
      <Wrapper>
        <div id="header-container">
          <div className="logo">
            <img src={data.Header.logo} alt="DevFest Bhubaneswar 2023 logo" />
          </div>
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
                <SecondaryBtn text={"Get profile badge"} />
                <div
                  onClick={() => {
                    dispatch(setPopModal(!popModal));
                  }}
                >
                  <PrimaryBtn text={"Register Now"} />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`hamMenu ${menuOpen && "active"}`}
            onClick={handleClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HeaderOld;
