import LineBanner from "../Components/LineBanner";
import SecondaryBtn from "../Components/SecondaryBtn";
import SectionHeader from "../Components/SectionHeader";
import SectionHeadingText from "../Components/SectionHeadingText";
import SpeakerCard from "../Components/SpeakerCard";
import Wrapper from "../Components/Wrapper";
import data from "../Data/data.json";
import { Router } from "../router/appRouter";

const Speakers = () => {
  const SpeakersShow = false;
  return (
    <div id="Speakers">
      <div id="Speakers-header">
        <SectionHeader
          text={data.speaker.h1}
          image={"/assets/images/img4.webp"}
          paragraph={data.speaker.p}
          color={"#ff5145"}
          s
        />
      </div>
      <Wrapper>
        <div id="Speakers-container">
          <div id="callForSpeakers">
            <div id="callForSpeakers-text">
              <h3>Call for Speakers</h3>
              <p>
                If you are passionate about your work and want to share your
                experience with the biggest tech audience in Bhubaneswar, you
                knocked on the right door.
                <div
                  onClick={() => {
                    animateScroll.scrollToTop();
                  }}
                >
                  <SecondaryBtn text={"Submit a Proposal"} link={Router.cfp} />
                </div>
              </p>
            </div>
            <div id="callForSpeakers-image">
              <img
                src="/assets/bgImage.png"
                alt="DevFest 2023 Bhubaneswar Speakers"
              />
            </div>
          </div>
          <div id="Speakers-container-heading">
            <SectionHeadingText text={"DevFest 2023 Speakers"} />
            <p>
              Connect with regional tech leaders, just like us! Join in-person
              to hear their expert talks and learn more about this community.
            </p>
          </div>
          <div id="Speakers-container-lists">
            {data.speaker.speakerlists.map((speaker, index) => (
              <SpeakerCard data={speaker} key={index} />
            ))}
          </div>
        </div>
      </Wrapper>
      <LineBanner color={"#ff5145"} classN={"banner-4"} />
    </div>
  );
};

export default Speakers;
