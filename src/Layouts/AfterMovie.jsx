import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Wrapper from "../Components/Wrapper";

const AfterMovie = () => {
  const main = useRef(null);
  const video = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(video.current, {
        width: "50%",
        duration: 2,
        scrollTrigger: {
          trigger: video.current,
          start: "top 90%",
          end: "top 90%",
          
        },
        ease: "power2.out",
      });
    }, main.current);

    return () => ctx.revert();
  }, []);
  return (
    <div id="AfterMovie" ref={main}>
      <div className="container">
        <iframe
          ref={video}
          src="https://www.youtube.com/embed/fRILjrLbwA8?si=S85NexA66IjfU8kV"
          title="DevFest 2022 Bhubaneswar After Movie"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <Wrapper>
          <div className="txt">
            <img src="/assets/arrow.png" alt="" />
            <h3>Devfest 2022 After Movie</h3>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default AfterMovie;
