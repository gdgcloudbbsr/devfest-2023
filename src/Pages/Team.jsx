import LineBanner from "../Components/LineBanner";
import SectionHeader from "../Components/SectionHeader";
import Wrapper from "../Components/Wrapper";
import data from "../Data/data.json";

const Team = () => {
  const { h1 } = data.team;
  return (
    <div id="Team">
      <div id="Team-header">
        <SectionHeader text={h1} image={"/assets/images/img1.webp"} />
      </div>
      <Wrapper>
        <div id="Team-container">
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
        </div>
      </Wrapper>
      <LineBanner classN={"banner-7"} color={"#ffbb01"} />
    </div>
  );
};

export default Team;
