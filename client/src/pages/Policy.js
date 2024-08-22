import React from "react";
import Layout from "./../components/Layout/Layout";
import "../styles/Policy.css";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus" style={{ height: '91vh' }}>
        {/* First column for the image */}
        <div className="col-md-6 image-container">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            className="contact-img"
          />
        </div>

        {/* Second column for the policy content */}
        <div className="col-md-6 policy-section-container">
          <div className="policy-section">
            <h2>Privacy Policy</h2>
            <p>
              We collect and store your personal information (e.g., name, email, payment details) to process orders and improve our services. 
              We do not share your data with third parties except for order fulfillment. You can request access, updates, or deletion of your data 
              anytime. We use secure practices to protect your information.
            </p>
  
            <h2>Terms and Conditions</h2>
            <p>
              By using our app, you agree to provide accurate information and follow the rules. We are not liable for issues like pricing errors 
              or delivery delays. Accounts must be kept secure. Unauthorized activities like fraud are prohibited.
            </p>
  
            <h2>Return and Refund Policy</h2>
            <p>
              You can return items within 30 days of purchase if they are unused and in their original condition. Refunds will be processed to the 
              original payment method. Customers are responsible for return shipping costs unless the error was ours.
            </p>
  
            <h2>Shipping Policy</h2>
            <p>
              We ship to selected locations. Orders are processed within 1-3 days, and shipping times vary based on the method selected. Tracking
              information is provided, and customers are responsible for reporting lost or damaged packages.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
