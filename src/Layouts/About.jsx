import { useEffect, useRef } from "react";
import OverlayBg from "../Components/OverlayBg";
import PrimaryBtn from "../Components/PrimaryBtn";
import SectionHeadingText from "../Components/SectionHeadingText";
import Wrapper from "../Components/Wrapper";
import data from "../Data/data.json";
import Stats from "./Stats";
import gsap from "gsap";

const About = () => {
  const main = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("#WhatDevFest-container-text ", {
        y: 400,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: "#WhatDevFest-container",
          start: "top 70%",
          end: "top 50%",
          // scrub: 2,
        },
        ease: "power2.out",
      });
      gsap.from("#WhatDevFest-container-image ", {
        y: 400,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: "#WhatDevFest-container",
          start: "top 70%",
          end: "top 50%",
          // scrub: 2,
        },
        ease: "power2.out",
      });

      gsap.from("#whyAttend-container-heading", {
        y: 200,
        autoAlpha: 0,
        // scale: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#whyAttend-container",
          start: "top 65%",
          end: "top 50%",
        },
      });

      gsap.from("#whyAttend-container-Pointlists .point", {
        y: 200,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.4,
        scrollTrigger: {
          trigger: "#whyAttend-container-Pointlists",
          start: "top 70%",
          end: "top 50%",
        },
      });

      gsap.from("#technologies-container-heading", {
        y: 200,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#technologies-container",
          start: "top 70%",
          end: "top 50%",
        },
      });

      gsap.from("#technologies-container-lists .techIcon", {
        y: 200,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#technologies-container-lists",
          start: "top 80%",
          end: "top 50%",
        },
      });
    }, main.current);

    return () => ctx.revert();
  }, []);

  const renderTechnologiesIcon = () => {
    const TechnologiesIconArray = [];
    for (let i = 1; i <= 8; i++) {
      TechnologiesIconArray.push(
        <div key={i} className="techIcon">
          <img src={`/assets/ico/${i}.png`} alt="Icon" />
        </div>
      );
    }
    return TechnologiesIconArray;
  };
  return (
    <div id="about" ref={main}>
      <Stats />
      <OverlayBg />
      <Wrapper>
        <div id="WhatDevFest-container">
          <div id="WhatDevFest-container-text">
            <SectionHeadingText text={data.about.WhatIsDevFest.h1} />
            <p>{data.about.WhatIsDevFest.p}</p>
            <PrimaryBtn
              text={"Read More"}
              link={"https://developers.google.com/community/devfest"}
            />
          </div>
          <div id="WhatDevFest-container-image">
            <img
              src="/assets/aboutDevfest.webp"
              alt="GDG Bhubaneswar Devfest Image"
            />
          </div>
        </div>
        <div id="whyAttend-container">
          <div id="whyAttend-container-heading">
            <SectionHeadingText text={data.about.whyAttend.h1} center={true} />
            <p>{data.about.whyAttend.p}</p>
          </div>
          <div id="whyAttend-container-Pointlists">
            {data.about.whyAttend.points.map((elem, index) => (
              <div className="point" key={index}>
                <div className="point-container">
                  <div className="point-container-img">
                    <img src={elem.img} alt="GDG Bhubaneswar Icons" />
                  </div>
                  <div className="point-container-text">
                    <h4>{elem.txt}</h4>
                    <p>{elem.p}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="technologies-container">
          <div id="technologies-container-heading">
            <SectionHeadingText text={data.about.Technologies.h1} />
            <p>{data.about.Technologies.p}</p>
          </div>
          <div id="technologies-container-lists">
            {renderTechnologiesIcon()}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
