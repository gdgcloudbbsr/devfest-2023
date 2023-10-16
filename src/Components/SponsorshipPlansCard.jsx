import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";

const SponsorshipPlansCard = ({ data, classNames }) => {
  return (
    <div className={`SponsorshipPlansCard ${classNames}`}>
      <div className="SponsorshipPlansCard-container">
        <div className="SponsorshipPlansCard-container-image"></div>
        <div className="heading">
          <h1>{data.text}</h1>

          <div className="BtnGroups">
            <Link
              className="PrimaryBtn"
              to={"/contact"}
              onClick={() => {
                animateScroll.scrollToTop();
              }}
            >
              Contact Us
            </Link>
            <a
              href={"/assets/SponsorshipBrochureDevFest2023BBSR.pdf"}
              target="_blank"
              rel="noreferrer"
              className="SecondaryBtn"
            >
              <span>Download Brochure</span>
            </a>
          </div>
        </div>
        <div className="offerings">
          <h4>Offerings</h4>
          <ul className="offerings-container">
            {data.offerings.map((offering, index) => (
              <li className="offering" key={index}>
                <span>{offering}</span>
              </li>
            ))}
          </ul>
        </div>
        {data.notes && (
          <div className="notes">
            <h4>Notes</h4>
            <ul className="notes-container">
              {data.notes.map((note, index) => (
                <li className="note" key={index}>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {data.addons && (
          <div className="addons">
            <h4>Add-Ons</h4>
            <ul className="addons-container">
              {data.addons.map((addon, index) => (
                <li className="addon" key={index}>
                  <span>{addon}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SponsorshipPlansCard;
