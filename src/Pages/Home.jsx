import Hero from "../Layouts/Hero";
import LineBanner from "../Components/LineBanner";
import About from "../Layouts/About";
import Ticket from "../Layouts/Ticket";
import PopupModalOld from "../Components/PopupModalOld";
import { useSelector } from "react-redux";
import Highlights from "../Layouts/Highlights";
import Venue from "../Layouts/Venue";
import SpeakerSection from "../Layouts/SpeakerSection";

const Home = () => {
  const popModal = useSelector((state) => state.Main.popModal);

  return (
    <>
      {popModal && <PopupModalOld />}
      <Hero />
      <LineBanner color={"var(--blue)"} classN={"banner-1"} />
      <About />
      <SpeakerSection />
      <LineBanner color={"var(--yellow)"} classN={"banner-2"} />
      <Ticket />
      <LineBanner color={"var(--green)"} classN={"banner-3"} />
      <Venue />
      <Highlights />
    </>
  );
};

export default Home;
