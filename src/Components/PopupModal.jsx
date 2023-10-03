import { RxCross2 } from "react-icons/rx";
import SecondaryBtn from "./SecondaryBtn";

const PopupModal = ({
  text,
  btnTxt = ["Yes", "No"],
  linkFirstOption,
  linkSecondOption,
}) => {
  return (
    <div className="PopupModal">
      <div className="PopupModal-container">
        <button id="cancel">
          <div className="ico">
            <RxCross2 />
          </div>
        </button>
        <div className="PopupModal-container-text">
          <h3>{text}</h3>
          <div className="btnGroups">
            <SecondaryBtn text={btnTxt[0]} link={linkFirstOption} />
            <SecondaryBtn
              text={btnTxt[1]}
              className={"SecondaryBtn-2"}
              link={linkSecondOption}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
