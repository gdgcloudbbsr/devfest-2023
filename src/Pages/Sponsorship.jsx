import LineBanner from "../Components/LineBanner";
import SectionHeader from "../Components/SectionHeader";
import SectionHeadingText from "../Components/SectionHeadingText";
import SponsorshipPlansCard from "../Components/SponsorshipPlansCard";
import Wrapper from "../Components/Wrapper";
import data from "../Data/data.json";

const Sponsorship = () => {
  const hide = true;
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
        <div id="Sponsorship-container">
          {hide ? (
            <>
              <div className="BrochureSection">
                <div className="BrochureSection-text">
                  <h3>Download Brochure</h3>
                  <p>
                    Download the brochure to know more about the sponsorship
                    opportunities.
                  </p>
                  <a
                    href={"/assets/SponsorshipBrochureDevFest2023BBSR.pdf"}
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
              <div className="whyChoosePlan">
                <div className="whyChoosePlan-image">
                  <img
                    src={"/assets/images/img3.webp"}
                    alt="Devfest 2022 WhyChoosePlan"
                  />
                </div>
                <div className="whyChoosePlan-text">
                  <SectionHeadingText text={data.sponsorship.WhySponsors.h1} />
                  <p>{data.sponsorship.WhySponsors.p}</p>
                </div>
              </div>
              <dir>
                <div className="pastSponsorships">
                  <SectionHeadingText text={"Our Past Sponsors"} />
                  <div className="pastSponsorships-container">
                    <img
                      src={data.sponsorship.pastSponsors}
                      alt="Devfest 2022 PastSpnsorships"
                    />
                  </div>
                </div>
              </dir>
              <div className="SponsorshipPlansCardLists">
                <SectionHeadingText text={"Our Sponsorship Plans"} />
                <div className="SponsorshipPlansCardLists-container">
                  {data.sponsorship.sponsorshipsPlans.plans.map(
                    (plan, index) => (
                      <SponsorshipPlansCard
                        data={plan}
                        key={index}
                        classNames={plan.text}
                      />
                    )
                  )}
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </Wrapper>
      <LineBanner classN={"banner-6"} color={"#ffbb01"} />
    </div>
  );
};

export default Sponsorship;
