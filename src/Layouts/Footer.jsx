import { Link, useLocation } from "react-router-dom";
import Wrapper from "../Components/Wrapper";
import data from "../Data/data.json";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { animateScroll } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import { Router } from "../router/appRouter";

const Footer = () => {
  const location = useLocation();
  const [showSocialMedia, setShowSocialMedia] = useState(false);

  const refFooter = useRef(null);
  const refSocial = useRef(null);

  useEffect(() => {
    if (
      location.pathname === Router.myTickets ||
      location.pathname === Router.checkout ||
      location.pathname === Router.contact
    ) {
      refSocial.current.style.display = "none";
      refFooter.current.style.paddingTop = "0rem";
      setShowSocialMedia(false);
    } else {
      refSocial.current.style.display = "flex";
      refFooter.current.style.paddingTop = "6rem";
      setShowSocialMedia(true);
    }
  }, [location.pathname]);

  return (
    <div id="Footer" ref={refFooter}>
      <img src="/assets/overlayBG.webp" alt="footerBg" id="footerBg" />
      <Wrapper>
        <div id="Footer-social-media" ref={refSocial}>
          <div id="Footer-social-media-text">
            <h2>{data.Footer.socialMedia.h2}</h2>
            <div className="tag">
              <span>{data.Footer.socialMedia.tag}</span>
            </div>
            <p>{data.Footer.socialMedia.p}</p>
          </div>
          <div className="socialMediaMain">
            <Link
              className="socialItem instagram"
              to={data.socialLinks.instagram}
            >
              <div>
                <FaInstagram />
              </div>
            </Link>
            <Link
              className="socialItem facebook"
              to={data.socialLinks.facebook}
            >
              <div>
                <FaFacebookF />
              </div>
            </Link>
            <Link
              className="socialItem linkedin"
              to={data.socialLinks.linkedin}
            >
              <div>
                <FaLinkedinIn />
              </div>
            </Link>
            <Link className="socialItem twitter" to={data.socialLinks.twitte}>
              <div>
                <FaTwitter />
              </div>
            </Link>
          </div>
        </div>
      </Wrapper>
      <div id="Footer-menu">
        <Wrapper>
          <div id="Footer-menu-text">
            <h4>{data.title}</h4>
          </div>
          <div id="Footer-menu-links">
            {data.Footer.links.map((elem, index) => (
              <Link
                key={index}
                to={elem.link}
                onClick={() => {
                  animateScroll.scrollToTop();
                }}
              >
                {elem.text}
              </Link>
            ))}
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Footer;
