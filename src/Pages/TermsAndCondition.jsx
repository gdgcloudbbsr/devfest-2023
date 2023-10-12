import Wrapper from "../Components/Wrapper";

const TermsAndCondition = () => {
  return (
    <div id="TermsAndCondition" className="policy">
      <Wrapper>
        <div id="TermsAndCondition-container" className="policy-container">
          <div className="policy-container-row">
            <h2>Terms & Conditions</h2>
          </div>
          <div className="policy-container-row">
            <h4>Registration and Payment:</h4>
            <ul>
              <li>
                Attendees must register for the Event through the official
                registration process.
              </li>
              <li>
                Payment of the registration fee is required for access to the
                Event. The fee is non-refundable unless otherwise specified by
                the Organizer.
              </li>
              <li>
                All payments will be processed securely through the designated
                payment processor, and your financial information will be
                subject to their terms and conditions.
              </li>
            </ul>
          </div>
          <div className="policy-container-row">
            <h4>Event Access:</h4>
            <ul>
              <li>
                Your registration entitles you to access the Event for which you
                have registered.
              </li>
              <li>
                Your Event ticket is personal to you and is non-transferable.
              </li>
            </ul>
          </div>
          <div className="policy-container-row">
            <h4>Code of Conduct:</h4>
            <ul>
              <li>
                Attendees are expected to adhere to the GDG Bhubaneswar Code of
                Conduct, which will be communicated separately.
              </li>
              <li>
                The Organizer reserves the right to remove any attendee from the
                Event for disruptive or inappropriate behavior, without refund.
              </li>
            </ul>
          </div>
          <div className="policy-container-row">
            <h4>Cancellations and Changes:</h4>
            <ul>
              <li>
                The Organizer reserves the right to make changes to the Event
                schedule, speakers, or content without prior notice.
              </li>
              <li>
                The Organizer may cancel the Event due to unforeseen
                circumstances, and in such cases, registration fees may be
                refunded.
              </li>
            </ul>
          </div>
          <div className="policy-container-row">
            <h4>Media Release:</h4>
            <ul>
              <li>
                Attendees agree that their likeness, name, voice, and image may
                be used by GDG Bhubaneswar for promotional purposes.
              </li>
            </ul>
          </div>
          <div className="policy-container-row">
            <h4>Privacy:</h4>
            <ul>
              <li>
                GDG Bhubaneswar will collect and process personal information in
                accordance with its Privacy Policy.
              </li>
            </ul>
          </div>
          <div className="policy-container-row">
            <h4>Liability:</h4>
            <ul>
              <li>
                GDG Bhubaneswar is not responsible for any personal property
                loss or damage that may occur during the Event.
              </li>
              <li>
                GDG Bhubaneswar is not liable for any injury or illness that may
                occur during the Event.
              </li>
            </ul>
          </div>
          <div className="policy-container-row">
            <h4>Force Majeure:</h4>
            <ul>
              <li>
                GDG Bhubaneswar will not be liable for any failure or delay in
                performing its obligations due to events beyond its reasonable
                control.
              </li>
            </ul>
          </div>
          <div className="policy-container-row">
            <h4>Governing Law:</h4>
            <ul>
              <li>
                These Terms are governed by the laws of the state of Odisha,
                India, and any disputes shall be resolved in the courts of
                Odisha.
              </li>
            </ul>
          </div>
          <div className="policy-container-row">
            <h4>Contact:</h4>
            <ul>
              <li>
                For questions or concerns regarding these Terms, please contact
                GDG Bhubaneswar at
                <a href="mailto:gdgcloudbbsr@gmail.com">
                  gdgcloudbbsr@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default TermsAndCondition;
