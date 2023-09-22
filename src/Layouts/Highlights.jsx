import SectionHeadingText from "../Components/SectionHeadingText";
import Wrapper from "../Components/Wrapper";
import data from "../Data/data.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Highlights = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 12000, min: 1000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 1000, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 500 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };
  return (
    <div id="Highlights">
      <Wrapper>
        <div id="Highlights-heading">
          <SectionHeadingText text={data.highlights.h1} />
          <p>{data.highlights.p}</p>
        </div>
        <div id="Highlights-container">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
          >
            {data.highlights.images.map((elem, index) => (
              <div id="Highlights-container-img" key={index}>
                <img src={elem} alt="DevFest 2023 image" />
              </div>
            ))}
          </Carousel>
        </div>
      </Wrapper>
    </div>
  );
};

export default Highlights;
