import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import data from "../Data/scheduleData.json";

import {
  BsPersonFillCheck,
  BsAndroid2,
  BsFillTerminalFill,
} from "react-icons/bs";
import { BiSolidHappy, BiSolidUserCircle } from "react-icons/bi";
import { FaPrayingHands } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { MdFreeBreakfast } from "react-icons/md";
import { IoFastFoodSharp } from "react-icons/io5";
import { AiFillChrome, AiFillCloud } from "react-icons/ai";
import { RiDiscussFill } from "react-icons/ri";

const ScheduleTimeline = () => {
  const iconFInder = (name) => {
    let lowerCaseName = name.toLowerCase();

    if (lowerCaseName.includes("check-in")) return <BsPersonFillCheck />;
    else if (lowerCaseName.includes("opening")) return <BiSolidHappy />;
    else if (lowerCaseName.includes("closing")) return <FaPrayingHands />;
    else if (lowerCaseName.includes("engagement")) return <FaHandsHelping />;
    else if (lowerCaseName.includes("tea break")) return <MdFreeBreakfast />;
    else if (lowerCaseName.includes("lunch")) return <IoFastFoodSharp />;
    else if (lowerCaseName.includes("web")) return <AiFillChrome />;
    else if (lowerCaseName.includes("ml")) return <BsFillTerminalFill />;
    else if (lowerCaseName.includes("android")) return <BsAndroid2 />;
    else if (lowerCaseName.includes("cloud")) return <AiFillCloud />;
    else if (lowerCaseName.includes("panel")) return <RiDiscussFill />;
    else return <BiSolidHappy />;
  };

  return (
    <div className="ScheduleTimeline">
      <div className="ScheduleTimeline-container">
        {
          <VerticalTimeline>
            {data.map((item) => (
              <VerticalTimelineElement
                key={item.id}
                date={item.time}
                dateClassName="ScheduleTimeline-container-item-date"
                icon={iconFInder(item.name)}
                iconStyle={{
                  background: "var(--blue)",
                  color: "#fff",
                  borderRadius: "50%",
                }}
                className="ScheduleTimeline-container-item"
              >
                <h4 className="ScheduleTimeline-container-item-date">
                  {item.name}
                </h4>
                {item.speaker && (
                  <div className="Speaker">
                    <div className="ico">
                      <BiSolidUserCircle />
                    </div>
                    <span>{item.speaker}</span>
                  </div>
                )}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        }
      </div>
    </div>
  );
};

export default ScheduleTimeline;
