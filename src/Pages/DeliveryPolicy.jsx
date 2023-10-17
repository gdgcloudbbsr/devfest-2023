import Wrapper from "../Components/Wrapper";

const DeliveryPolicy = () => {
  return (
    <div id="DeliveryPolicy" className="policy">
      <Wrapper>
        <div className="policy-container">
          <div className="policy-container-row">
            <h2>Shipping and Delivery Policy</h2>
          </div>
          <div className="policy-container-row">
            <p>
              Thank you for choosing to attend DevFest, organized by GDG
              Bhubaneswar. This Shipping and Delivery Policy outlines how we
              deliver your event tickets, including the unique QR code for
              check-in.
            </p>
          </div>
          <div className="policy-container-row">
            <h4>Ticket Delivery:</h4>
            <p>
              Once you have successfully paid and booked your tickets for
              DevFest, your event tickets will be delivered electronically. We
              will send an email confirmation to the email address provided
              during registration.
            </p>
          </div>
          <div className="policy-container-row">
            <h4>QR Code for Check-In:</h4>
            <p>
              Your email confirmation will include a unique QR code that serves
              as your digital ticket for the event. The QR code will be required
              for check-in at the venue on the day of the event. Please ensure
              that you have this email with the QR code readily available on
              your mobile device or in a printed format to expedite the check-in
              process.
            </p>
          </div>
          <div className="policy-container-row">
            <h4>Delivery Timeline:</h4>
            <p>
              You should receive your email confirmation with the QR code
              shortly after your successful payment and booking. If you do not
              receive this email within a reasonable time frame, please check
              your spam folder and ensure that you provided the correct email
              address during registration. If you still do not receive it,
              please contact our team at
              <a href="mailto:gdgcloudbbsr@gmail.com">gdgcloudbbsr@gmail.com</a>
              for assistance.
            </p>
          </div>
          <div className="policy-container-row">
            <h4>Lost or Misplaced Tickets:</h4>
            <p>
              In the event that you misplace or accidentally delete your email
              confirmation with the QR code, please contact us at
              <a href="mailto:gdgcloudbbsr@gmail.com">gdgcloudbbsr@gmail.com</a>
              . We can resend your confirmation to the email address provided
              during registration.
            </p>
          </div>
          <div className="policy-container-row">
            <h4>Changes to this Policy:</h4>
            <p>
              We may update this Shipping and Delivery Policy to reflect any
              changes in our processes or practices. We encourage you to review
              this policy periodically.
            </p>
            <p>
              By purchasing a ticket for DevFest, you acknowledge that you have
              read and understood this policy and agree to abide by its terms.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default DeliveryPolicy;
