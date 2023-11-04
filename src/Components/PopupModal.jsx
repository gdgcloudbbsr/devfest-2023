import { RxCross2 } from "react-icons/rx";
import SecondaryBtn from "./SecondaryBtn";

import data from "../Data/data.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Router } from "../router/appRouter";

const PopupModal = ({
  btnTxt = ["Yes", "No"],
  linkFirstOption,
  linkSecondOption,
  showMenu,
  setShowMenu,
}) => {
  const { pop1, pop2, pop3, pop4, pop5 } = data.studentPopmodalText;
  const navigation = useNavigate();

  const [text, setText] = useState(pop1);
  const [image, setImage] = useState(
    "https://media.tenor.com/iYhFHrBZ46kAAAAC/are-you-sure-will-ferrel.gif"
  );
  let [count, setCount] = useState(2);

  const [countdown, setCountdown] = useState(3);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    let timer;

    if (showMenu && isButtonDisabled) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [showMenu, isButtonDisabled]);

  const handleButtonClick = (option) => {
    if (option === "increment") {
      setCount(count + 1);
    } else if (option === "cancel") {
      setShowMenu(false);
    }
  };

  const handleClick = (count) => {
    setButtonDisabled(true);
    setCountdown(3);
    if (count === 2) {
      setText(pop2);
      setImage(
        "https://media.tenor.com/ZY2-TXeQpJ0AAAAM/dhoni-movie-ms-dhoni.gif"
      );
    } else if (count === 3) {
      setText(pop3);
      setImage("https://i.giphy.com/media/l1Ku3NQn1BKM80skU/giphy.webp");
    } else if (count === 4) {
      setText(pop4);
      setImage(
        "https://indianmemetemplates.com/wp-content/uploads/Khatra-sar-par-tha-lekin-harami-mann-saala-maane-kaise-1024x576.jpg"
      );
    } else if (count === 5) {
      setText(pop5);
      setImage(
        "https://indianmemetemplates.com/wp-content/uploads/use-ab-koi-nahi-rok-sakta-528x297.jpg"
      );
    } else {
      setText(pop5);
      setImage(
        "https://indianmemetemplates.com/wp-content/uploads/use-ab-koi-nahi-rok-sakta-528x297.jpg"
      );
      setShowMenu(false);
      navigation(Router.checkout);
      setCount(2);
    }
    setTimeout(() => {
      setButtonDisabled(false);
    }, 3000);
  };

  return (
    <div className=" popupModalOptions">
      <div className=" popupModalOptions-container">
        <button
          id="cancel"
          onClick={() => {
            handleButtonClick("cancel");
          }}
        >
          <div className="ico">
            <RxCross2 />
          </div>
        </button>
        <div className=" popupModalOptions-container-text">
          <div className="image">
            <img src={image} alt="meme" />

            <script
              type="text/javascript"
              async
              src="https://tenor.com/embed.js"
            ></script>
          </div>
          <h3>{text}</h3>
          <div className="btnGroups">
            {isButtonDisabled ? (
              <p>Waiting for {countdown} seconds...</p>
            ) : (
              <div
                onClick={() => {
                  handleButtonClick("increment");
                  handleClick(count);
                }}
              >
                <SecondaryBtn text={`${btnTxt[0]}`} link={linkFirstOption} />
              </div>
            )}
            <div
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <SecondaryBtn
                text={btnTxt[1]}
                className={"SecondaryBtn-2"}
                link={linkSecondOption}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
