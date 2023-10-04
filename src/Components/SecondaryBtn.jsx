import { Link } from "react-router-dom";

const SecondaryBtn = ({ text, size = false, link, className = "" }) => {
  return (
    <Link className={`SecondaryBtn ${className} ${size ? "md" : ""}`} to={link}>
      <span>{text}</span>
    </Link>
  );
};

export default SecondaryBtn;
