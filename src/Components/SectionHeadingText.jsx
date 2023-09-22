import Wrapper from "./Wrapper";

const SectionHeadingText = ({ text, center = false }) => {
  return (
    <div className="SectionHeadingText">
      <div className={`SectionHeadingText-container ${center && "aic"}`}>
        <div className="txt">
          <h2>{text}</h2>
          <div className="line">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeadingText;
