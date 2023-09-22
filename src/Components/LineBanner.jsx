import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LineBanner = ({ color, classN }) => {
  const main = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(`.${classN}`, {
        x: 400,
        scrollTrigger: {
          trigger: `.${classN}`,
          start: "top 90%",
          end: "top 00%",
          scrub: 1,
        },
        ease: "power2.out",
      });
    }, main.current);

    return () => ctx.revert();
  }, [classN]);

  const data = {
    imagePath: "/assets/devfest.svg",
    // text: ["Connect", "Learn", "Grow"],
    text: [
      "DevFest 2023 Bhubaneswar",
      "GDG Cloud Bhubaneswar",
      "GDG Bhubaneswar",
    ],
  };

  return (
    <div className={`LineBanner`} style={{ backgroundColor: color }} ref={main}>
      <div className={`container ${classN}`} ref={container}>
        <h4>{data.text[0]}</h4>
        <div className="ico">
          <img src={data.imagePath} alt="code gdg bhubaneswar" />
        </div>
        <h4>{data.text[1]}</h4>
        <div className="ico">
          <img src={data.imagePath} alt="code gdg bhubaneswar" />
        </div>
        <h4>{data.text[2]}</h4>
        <div className="ico">
          <img src={data.imagePath} alt="code gdg bhubaneswar" />
        </div>
        <h4>{data.text[0]}</h4>
        <div className="ico">
          <img src={data.imagePath} alt="code gdg bhubaneswar" />
        </div>
        <h4>{data.text[1]}</h4>
        <div className="ico">
          <img src={data.imagePath} alt="code gdg bhubaneswar" />
        </div>
        <h4>{data.text[2]}</h4>
        <div className="ico">
          <img src={data.imagePath} alt="code gdg bhubaneswar" />
        </div>
        <h4>{data.text[0]}</h4>
        <div className="ico">
          <img src={data.imagePath} alt="code gdg bhubaneswar" />
        </div>
        <h4>{data.text[1]}</h4>
        <div className="ico">
          <img src={data.imagePath} alt="code gdg bhubaneswar" />
        </div>
        <h4>{data.text[2]}</h4>
        <div className="ico">
          <img src={data.imagePath} alt="code gdg bhubaneswar" />
        </div>
        <h4>{data.text[0]}</h4>
        <div className="ico">
          <img src={data.imagePath} alt="code gdg bhubaneswar" />
        </div>
        <h4>{data.text[1]}</h4>
        <div className="ico">
          <img src={data.imagePath} alt="code gdg bhubaneswar" />
        </div>
        <h4>{data.text[2]}</h4>
        <div className="ico">
          <img src={data.imagePath} alt="code gdg bhubaneswar" />
        </div>
      </div>
    </div>
  );
};

export default LineBanner;
