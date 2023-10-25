import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const SpeakerCard = ({ data }) => {
  const main = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      main.current.addEventListener("mousemove", (e) => {
        let xPos = e.clientX / window.innerWidth - 0.5,
          yPos = e.clientY / window.innerHeight - 0.5;

        gsap.to(main.current, {
          rotationY: 30 * xPos,
          rotationX: 30 * yPos,
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
    <div className="SpeakerCard" ref={main}>
      <img src="/assets/redBlock1.svg" alt="red block" className="redBlock" />

      <div className="SpeakerCard-container">
        <div className="SpeakerCard-container-img">
          <img src={data.img} alt={`${data.name} Image`} />
        </div>
        <div className="SpeakerCard-container-text">
          <img src="/assets/redRec.svg" alt="vector" className="BlueRec" />
          <img
            src="/assets/redDevFest.svg"
            alt="vector"
            className="BlueDevFest"
          />
          <div
            className="name"
            style={{
              marginTop: "1rem",
            }}
          >
            <h4>{data.name}</h4>
            <span>{data.designation}</span>
          </div>
          <div className="topicName">
            <span className="tag">
              {data.talk === undefined ? "Track" : "Talk"}
            </span>
            <h5>{data.talk === undefined ? data.topicName : data.talk}</h5>
          </div>
          <div className="socialLinks">
            {data.socialLinks.instagram && (
              <a
                className="facebook social-item"
                href={data.socialLinks.instagram}
                target="_blank"
              >
                <div className="ico">
                  <span>
                    <FaFacebookF />
                  </span>
                </div>
              </a>
            )}
            {data.socialLinks.linkedin && (
              <a
                className="linkedin social-item"
                href={data.socialLinks.linkedin}
                target="_blank"
              >
                <div className="ico">
                  <span>
                    <FaLinkedinIn />
                  </span>
                </div>
              </a>
            )}
            {data.socialLinks.twitter && (
              <a
                className="twitter social-item"
                href={data.socialLinks.twitter}
                target="_blank"
              >
                <div className="ico">
                  <span>
                    <FaTwitter />
                  </span>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
