import LineBanner from "../Components/LineBanner";
import ScheduleTimeline from "../Components/ScheduleTimeline";
import SectionHeader from "../Components/SectionHeader";
import Wrapper from "../Components/Wrapper";
import data from "../Data/data.json";

const Schedule = () => {
  return (
    <div id="Schedule">
      <div id="Schedule-header">
        <SectionHeader
          text={data.schedule.h1}
          image={"/assets/images/img8.webp"}
          paragraph={data.schedule.p}
          color={"#428eff"}
        />
      </div>
      <Wrapper>
        <div id="Schedule-container">
          <ScheduleTimeline />
        </div>
      </Wrapper>
      <LineBanner color={"#428eff"} classN={"banner-5"} />
    </div>
  );
};

export default Schedule;
