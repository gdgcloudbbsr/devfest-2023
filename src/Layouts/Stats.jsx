import { useEffect, useRef } from "react";
import Wrapper from "../Components/Wrapper";
import data from "../Data/data.json";
import { gsap } from "gsap";

const Stats = () => {
  const main = useRef(null);
  useEffect(() => {
    const boxes = Array.from(main.current.querySelectorAll(".statsBox"));
    const ctx = gsap.context(() => {
      boxes.forEach((b) => {
        let num = b.getAttribute("data-n");
        gsap.from(b, {
          // y: 200,
          opacity: 0,
          scrollTrigger: {
            trigger: b,
            start: "top 90%",
            end: "top 50%",
          },
        });

        let bh1 = b.querySelector(".statsBox-container h2 span");

        gsap.to(bh1, {
          innerText: num,
          duration: 3,
          snap: {
            innerText: 1,
          },
          scrollTrigger: {
            trigger: b,
            start: "top 90%",
            end: "top 40%",
          },
        });
      });

      gsap.from(".text-stats", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".text-stats",
          start: "top 100%",
          end: "top 60%",
        },
      });
    }, main.current);
    return () => ctx.revert();
  }, []);
  return (
    <div id="stats" ref={main}>
      <Wrapper>
        <div id="stats-container">
          {data.stats.map((elem, index) => (
            <div className="statsBox" key={index} data-n={elem.num}>
              <div className="statsBox-container">
                <h2>
                  <span>00</span>
                  {(index === 0 || index === 3) && "+"}
                </h2>
                <span>{elem.text}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-stats">
          <h3>{data.statsText}</h3>
        </div>
      </Wrapper>
    </div>
  );
};

export default Stats;
