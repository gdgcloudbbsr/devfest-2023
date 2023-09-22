import Hero from "../Layouts/Hero";
import LineBanner from "../Components/LineBanner";
import About from "../Layouts/About";
import Ticket from "../Layouts/Ticket";
// import SpeakerSection from "../Layouts/SpeakerSection";
// import Venue from "../Layouts/Venue";
import PopupModal from "../Components/PopupModal";
import { useSelector } from "react-redux";
import Highlights from "../Layouts/Highlights";

const Home = () => {
  const popModal = useSelector((state) => state.Main.popModal);

  return (
    <>
      {popModal && <PopupModal />}
      <Hero />
      <LineBanner color={"var(--blue)"} classN={"banner-1"} />
      <About />
      <LineBanner color={"var(--yellow)"} classN={"banner-2"} />
      <Ticket />
      <LineBanner color={"var(--green)"} classN={"banner-3"} />
      {/* <SpeakerSection />
      <Venue /> */}
      <Highlights />
    </>
  );
};

export default Home;
