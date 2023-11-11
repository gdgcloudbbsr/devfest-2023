import Wrapper from "../Components/Wrapper";
import { BsFillCalendarFill } from "react-icons/bs";
import { FaMap } from "react-icons/fa";
import { BiSolidTimeFive } from "react-icons/bi";
import PrimaryBtn from "../Components/PrimaryBtn";
import data from "../Data/data.json";
import AfterMovie from "./AfterMovie";
import OverlayBg from "../Components/OverlayBg";
import { Router } from "../router/appRouter";
import EventCounter from "../Components/EventCounter";

const Hero = () => {
  return (
    <div id="hero">
      <OverlayBg />
      <Wrapper>
        <div id="hero-container">
          <div className="Herotext">
            <div className="heading">
              <h1>{data.hero.h1}</h1>
              <svg
                width="390"
                height="24"
                viewBox="0 0 390 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49.3548 6.15205C55.4818 6.00176 60.3932 7.42947 63.3006 10.454C65.5017 12.7647 67.982 13.1592 72.0886 12.3138C82.6342 10.144 93.229 8.04942 103.89 6.09569C110.493 4.884 116.406 5.5321 121.252 8.75388C122.418 9.5241 125.26 10.0313 127.05 9.82469C136.249 8.75389 145.366 7.40129 154.515 6.16142C164.798 4.77127 175.048 3.25903 185.412 2.07552C191.802 1.34287 197.847 2.77997 201.773 5.46635C207.489 9.36442 214.487 9.17655 221.55 8.27483C234.871 6.5841 247.963 4.34861 261.252 2.57334C268.052 1.67162 275.05 1.0047 282.014 0.788662C285.201 0.68534 288.913 1.58706 291.689 2.63907C297.57 4.8558 304.075 4.69612 310.267 4.31101C327.433 3.24022 344.598 2.02855 361.566 0.253287C370.88 -0.723578 378.452 1.31467 386.32 3.13689C387.881 3.50322 389.918 5.48514 389.425 6.02993C388.259 7.31676 385.959 8.56602 383.594 9.11081C381.59 9.58046 378.633 9.37381 376.498 8.90417C365.41 6.45261 354.667 8.74449 343.826 9.46775C330.488 10.3507 317.216 11.553 303.861 12.2386C299.837 12.4453 294.794 12.079 291.673 10.8015C283.131 7.30736 274.508 8.46269 265.72 9.65559C251.675 11.5624 237.697 13.6006 223.685 15.5732C212.138 17.1981 202.003 16.024 193.264 11.0458C191.392 9.97496 187.219 9.36442 184.591 9.72135C171.927 11.4027 159.41 13.4691 146.844 15.4229C138.384 16.7285 130.089 18.8701 121.055 16.9163C119.938 16.6721 118.575 16.5594 117.753 16.1273C108.949 11.4684 100.358 14.0045 91.6192 16.2213C85.5744 17.7523 79.4967 19.2833 73.2055 20.4011C65.3046 21.81 59.2926 20.063 53.4942 15.3007C51.4573 13.6194 49.6669 12.9337 46.1517 13.3376C35.8525 14.5024 26.9331 17.2733 18.9008 20.9835C11.624 24.3555 6.05551 25.0224 1.42334 22.3642C0.372069 21.7631 0.158559 19.6027 1.09485 19.1143C12.1496 13.2813 33.0437 6.64046 49.3877 6.16142L49.3548 6.15205Z"
                  fill="#FFBB01"
                />
              </svg>
            </div>
            <p>{data.hero.p}</p>
            <div className="highlights">
              <div className="location">
                <div className="ico">
                  <FaMap />
                </div>
                <a href={data.venueData.link} target="_blank">
                  {data.venueData.text}
                </a>
              </div>
              <div className="date">
                <div className="ico">
                  <BsFillCalendarFill />
                </div>
                <span>{data.date}</span>
              </div>
              <div className="time">
                <div className="ico">
                  <BiSolidTimeFive />
                </div>
                <span>{data.time}</span>
              </div>
            </div>
            <div className="btn-groups">
              <PrimaryBtn
                text={data.hero.btnGroups.primaryLink.text}
                link={Router.tickets}
              />

              <a
                href={
                  "https://drive.google.com/file/d/19M372U9nNsryDFtmpdiU-sdDJr85v3Jp/view?usp=sharing"
                }
                target="_blank"
                rel="noreferrer"
                className="SecondaryBtn"
              >
                <span>Official Brochure</span>
              </a>
            </div>
          </div>
        </div>
        <EventCounter />
        <AfterMovie />
      </Wrapper>
    </div>
  );
};

export default Hero;
