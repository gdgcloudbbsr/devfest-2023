import LineBanner from "../Components/LineBanner";
import SectionHeader from "../Components/SectionHeader";
import Wrapper from "../Components/Wrapper";
import data from "../Data/data.json";

const Sponsorship = () => {
  return (
    <div id="Sponsorship">
      <div id="Schedule-header">
        <SectionHeader
          text={data.sponsorship.h1}
          image={"/assets/images/img5.webp"}
          paragraph={data.sponsorship.p}
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
      <LineBanner classN={"banner-6"} color={"#ffbb01"} />
    </div>
  );
};

export default Sponsorship;
