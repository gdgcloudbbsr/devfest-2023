import LineBanner from "./LineBanner";
import SectionHeadingText from "./SectionHeadingText";
import Wrapper from "./Wrapper";

const SectionHeader = ({ text, paragraph, color = "#ffbb01", image }) => {
  return (
    <>
      <div className="SectionHeader">
        <img
          src={image}
          alt="Devfest 2023 Bhubaneswar image"
          className="SectionHeader-Bgimage"
        />
        <Wrapper>
          <div className="SectionHeader-container">
            <SectionHeadingText text={text} center={true} />
            <p>{paragraph}</p>
          </div>
        </Wrapper>
      </div>
      <LineBanner color={color} classN={"banner-3"} />
    </>
  );
};

export default SectionHeader;
