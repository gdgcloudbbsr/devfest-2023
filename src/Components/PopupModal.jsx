// import React from "react";
import { RxCross2 } from "react-icons/rx";
import SecondaryBtn from "./SecondaryBtn";
import { useDispatch, useSelector } from "react-redux";
import { setPopModal } from "../Store/Slices/MainSlice";

const PopupModal = () => {
  const popModal = useSelector((state) => state.Main.popModal);
  const dispatch = useDispatch();

  return (
    <div className="PopupModal">
      <div className="PopupModal-container">
        <button
          id="cancel"
          onClick={() => {
            dispatch(setPopModal(!popModal));
          }}
        >
          <div className="ico">
            <RxCross2 />
          </div>
        </button>
        <div className="PopupModal-container-text">
          <h3>Registration Coming Coon</h3>
          <div
            onClick={() => {
              dispatch(setPopModal(!popModal));
            }}
          >
            <SecondaryBtn text={"Okay"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
