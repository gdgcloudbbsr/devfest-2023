import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Loader = () => {
  return (
    <div className="Loader">
      <Player
        src={"/assets/loader.json"}
        className="Loader-item"
        loop
        autoplay
        speed={2}
      />
    </div>
  );
};

export default Loader;
