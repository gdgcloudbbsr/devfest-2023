import Wrapper from "../Components/Wrapper";

const RefundPolicy = () => {
  return (
    <div id="RefundPolicy" className="policy">
      <Wrapper>
        <div className="policy-container">
          <div className="policy-container-row">
            <h2>Refund and Cancellation Policy</h2>
          </div>

          <div className="policy-container-row">
            <h4>DevFest Ticket Refund and Cancellation Policy</h4>
            <p>
              Thank you for your interest in attending DevFest, organized by GDG
              Bhubaneswar. Before you proceed with purchasing a ticket for this
              event, please be aware of our strict no-refund and no-cancellation
              policy.
            </p>
          </div>
          <div className="policy-container-row">
            <h4>Refund and Cancellation Policy:</h4>
            <p>
              Once you have successfully paid for and booked your ticket to
              DevFest, no cancellations or refunds will be permitted. This
              policy is in place to ensure the smooth operation of the event and
              to guarantee the best experience for all attendees.
            </p>
          </div>
          <div className="policy-container-row">
            <h4>Transferring Tickets:</h4>
            <p>
              The tickets for DevFest are non-transferrable. Unfortunately, they cannot be transferred to another individual. We appreciate your understanding and cooperation in this matter. If you have any questions or concerns related to your ticket, please don't hesitate to reach out to our team at <a href="mailto:gdgcloudbbsr@gmail.com">gdgcloudbbsr@gmail.com</a> for further assistance.
            </p>
          </div>
          <div className="policy-container-row">
            <h4>Contact Information:</h4>
            <p>
              If you have any questions or require assistance with transferring
              your ticket, please do not hesitate to reach out to our team at
              <a href="mailto:gdgcloudbbsr@gmail.com">
                gdgcloudbbsr@gmail.com.
              </a>
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default RefundPolicy;
