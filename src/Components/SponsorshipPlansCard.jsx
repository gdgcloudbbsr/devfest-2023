const SponsorshipPlansCard = ({ data, classNames }) => {
  return (
    <div className={`SponsorshipPlansCard ${classNames}`}>
      <div className="SponsorshipPlansCard-container">
        <div className="SponsorshipPlansCard-container-image"></div>
        <div className="heading">
          <h1>{data.text}</h1>
          <h3>{data.price}</h3>
          <div>
            <h4> Contact Us :</h4>
            <ul>
              <li>
                Suraj Harichandan
                <a href="mailto:suraj.somu@gmail.com">
                  ( suraj.somu@gmail.com )
                </a>
              </li>
              <li>
                Saswat Samal
                <a href="mailto:samalsaswat0@gmail.com">
                  ( samalsaswat0@gmail.com )
                </a>
              </li>
            </ul>
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
