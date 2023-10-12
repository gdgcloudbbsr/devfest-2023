import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";

const PrimaryBtn = ({ text, link, size = false, classname, ...props }) => {
  return (
    <Link
      to={link}
      className={`PrimaryBtn ${size ? "md" : ""} ${classname}`}
      onClick={() => {
        animateScroll.scrollToTop();
      }}
      {...props}
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
