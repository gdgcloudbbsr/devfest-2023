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
        <div className="BrochureSection">
          <div className="BrochureSection-text">
            <h3>Download Brochure</h3>
            <p>
              Download the brochure to know more about the sponsorship
              opportunities.
            </p>
            <a
              href={"/assets/InformationBrochureDevFest23BBSR.pdf"}
              target="_blank"
              rel="noreferrer"
              className="SecondaryBtn"
            >
              <span>Official Brochure</span>
            </a>
          </div>
          <div className="BrochureSection-image">
            <img
              src="/assets/bgImage.png"
              alt="DevFest 2023 Bhubaneswar Brochure"
            />
          </div>
        </div>
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
