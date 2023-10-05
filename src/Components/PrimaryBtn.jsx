import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";

const PrimaryBtn = ({ text, link, size = false }) => {
  return (
    <Link
      to={link}
      className={`PrimaryBtn ${size ? "md" : ""}`}
      onClick={() => {
        animateScroll.scrollToTop();
      }}
    >
      <div className="text">
        <span>{text}</span>
        <span>{text}</span>
      </div>
      <div className="box"></div>
    </Link>
  );
};

export default PrimaryBtn;
