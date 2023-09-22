import SectionHeadingText from "../Components/SectionHeadingText";
import Wrapper from "../Components/Wrapper";
import data from "../Data/data.json";
import { HiLocationMarker } from "react-icons/hi";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Venue = () => {
  const main = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("#Venue-heading", {
        y: 200,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#Venue-heading",
          start: "top 80%",
          end: "top 60%",
        },
      });
      gsap.from("#Venue-container-map", {
        x: "-120%",
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: "#Venue-container",
          start: "top 70%",
          end: "top 60%",
        },
      });
    }, main.current);

    return () => ctx.revert();
  }, []);
  return (
    <div id="Venue" ref={main}>
      <Wrapper>
        <div id="Venue-heading">
          <SectionHeadingText text={data.venueData.h1} />
          <p>{data.venueData.p}</p>
        </div>
        <div id="Venue-container">
          <div id="Venue-container-map">
            <iframe src={data.venueData.MapData}></iframe>
          </div>
          <div id="Venue-container-text">
            <div className="ico">
              <HiLocationMarker />
            </div>
            <h5>{data.venueData.text}</h5>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Venue;
