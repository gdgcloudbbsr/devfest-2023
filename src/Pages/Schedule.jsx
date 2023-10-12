import LineBanner from "../Components/LineBanner";
import SectionHeader from "../Components/SectionHeader";
import Wrapper from "../Components/Wrapper";
import data from "../Data/data.json";

const Schedule = () => {
  return (
    <div id="Schedule">
      <div id="Schedule-header">
        <SectionHeader
          text={data.schedule.h1}
          image={"/assets/images/img10.webp"}
          paragraph={data.schedule.p}
          color={"#428eff"}
        />
      </div>
      <Wrapper>
        <div
          id="Schedule-container"
          style={{
            minHeight: "80vh",
            display: "grid",
            placeItems: "center",
            textAlign: "center",
          }}
        >
          <h1>Coming Soon</h1>
        </div>
      </Wrapper>
      <LineBanner color={"#428eff"} classN={"banner-5"} />
    </div>
  );
};

export default Schedule;
