import Wrapper from "../Components/Wrapper";
import BadgeGDG from "../Components/BadgeGDG";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Error404 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "404 | DevFest Bhubaneswar 2023";
  }, []);
  return (
    <div className="Error404">
      <div className="overlayBox">
        <div></div>
        <div></div>
      </div>
      <Wrapper>
        <div className="Error404-container">
          <div className="text">
            <div className="mainText">
              <h1>4</h1>
              <BadgeGDG />
              <h1>4</h1>
            </div>
            <h3>Page not Found</h3>
          </div>
          <p>We suggest you go to homepage while we fixing the problem.</p>
          <button className="PrimaryBtn" onClick={() => navigate("/")}>
            <div className="text">
              <span>Go Back</span>
              <span>Go Back</span>
              <div className="box"></div>
            </div>
          </button>
        </div>
      </Wrapper>
    </div>
  );
};

export default Error404;
