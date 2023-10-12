import Wrapper from "./Wrapper";
import data from "../Data/data";
import { useDispatch, useSelector } from "react-redux";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useState } from "react";
import { setLogout } from "../Store/Slices/MainSlice";

const DashboardHeader = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.Main.userData);
  const { name } = userData;

  const [logOut, setLogOut] = useState(false);

  return (
    <div id="DashboardHeader">
      <Wrapper>
        <div id="DashboardHeader-container">
          <div id="DashboardHeader-container-left">
            <div className="logo">
              <img src={data.Header.logo} alt="DevFest Bhubaneswar 2023 logo" />
            </div>
            <h5>Dashboard</h5>
          </div>
          <div id="DashboardHeader-container-right">
            <div
              id="DashboardHeader-container-right-profile"
              onClick={() => {
                setLogOut(!logOut);
              }}
            >
              <div className="profile-name">
                <h5>{name.split(" ")[0]}</h5>
              </div>
              <div className="profile-img">{name[0]}</div>
              <BiDotsVerticalRounded />
              {logOut && (
                <div className="logout">
                  <button
                    className="LogOutBtn"
                    onClick={() => {
                      dispatch(setLogout());
                      setLogOut(false);
                    }}
                  >
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default DashboardHeader;
