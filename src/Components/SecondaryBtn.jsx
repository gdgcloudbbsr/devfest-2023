import { Link } from "react-router-dom";

const SecondaryBtn = ({ text, size = false,link }) => {
  return (
    <Link className={`SecondaryBtn ${size ? "md" : ""}`} to={link}>
      <span>{text}</span>
    </Link>
  );
};

export default SecondaryBtn;
