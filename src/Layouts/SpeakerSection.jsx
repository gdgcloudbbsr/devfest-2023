// import SecondaryBtn from "../Components/SecondaryBtn";
import { useEffect, useRef } from "react";
import SectionHeadingText from "../Components/SectionHeadingText";
import SpeakerCard from "../Components/SpeakerCard";
import Wrapper from "../Components/Wrapper";
import data from "../Data/data.json";

import gsap from "gsap";

const SpeakerSection = () => {
  const main = useRef(null);
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
          {data.speaker.speakerlists.map((elem, index) => {
            if (index < 6) {
              return <SpeakerCard key={index} data={elem} />;
            }
            return null;
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default SpeakerSection;
