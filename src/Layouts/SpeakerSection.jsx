// import SecondaryBtn from "../Components/SecondaryBtn";
import { useEffect, useRef, useState } from "react";
import SectionHeadingText from "../Components/SectionHeadingText";
import SpeakerCard from "../Components/SpeakerCard";
import Wrapper from "../Components/Wrapper";
import data from "../Data/data.json";

import gsap from "gsap";
import PrimaryBtn from "../Components/PrimaryBtn";
import { Router } from "../router/appRouter";
import Carousel from "react-multi-carousel";

const SpeakerSection = () => {
  const main = useRef(null);
  const [totalIndex, setTotalIndex] = useState(4);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("#SpeakerSection-heading-text", {
        y: 200,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#SpeakerSection-heading",
          start: "top 70%",
          end: "top 60%",
        },
      });
      gsap.from("#SpeakerSection-container > *", {
        y: 200,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#SpeakerSection-container",
          start: "top 70%",
          end: "top 60%",
        },
      });
    }, main.current);

    return () => ctx.revert();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 12000, min: 1000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 1000, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 500 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="SpeakerSection" ref={main}>
      <Wrapper>
        <div id="SpeakerSection-heading">
          <div id="SpeakerSection-heading-text">
            <SectionHeadingText text={data.speaker.h1} />
            <p>{data.speaker.p}</p>
          </div>
          {/* <SecondaryBtn text={"View all"} /> */}
        </div>
        <div id="SpeakerSection-container">
          {/* {data.speaker.speakerlists.map((elem, index) => {
            if (index < totalIndex) {
              return <SpeakerCard key={index} data={elem} />;
            }
            return null;
          })} */}
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
          >
            {data.speaker.speakerlists.map((elem, index) => {
              return <SpeakerCard key={index} data={elem} />;
            })}
          </Carousel>
        </div>
        {/* <div
          style={{
            marginTop: "4rem",
            maxWidth: "max-content",
            marginInline: "auto",
          }}
        >
          <PrimaryBtn text={"View all"} link={Router.speakers} />
        </div> */}
      </Wrapper>
    </div>
  );
};

export default SpeakerSection;
