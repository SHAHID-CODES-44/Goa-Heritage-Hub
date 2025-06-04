import React from 'react';
import './Terms&Cond.css';

const Terms = () => {
  return (
    <div id="terms-page" className="terms-page">
      <h1 id="terms-heading" className="terms-heading">Terms and Conditions</h1>

      <div id="terms-content" className="terms-content">
        <p>
          Welcome to our tourism website. By using our services, you agree to the following terms and conditions.
        </p>

        <h2 className="terms-section-heading">1. General Information</h2>
        <p>
          This site provides information for tourists visiting Goa. All efforts are made to keep the content accurate and updated.
        </p>

        <h2 className="terms-section-heading">2. Tourist Responsibility</h2>
        <p>
          Visitors are expected to follow local laws, respect cultural practices, and ensure their own safety while exploring.
        </p>

        <h2 className="terms-section-heading">3. Emergency Help</h2>
        <p>
          In case of emergencies, tourists should contact local authorities. We provide emergency contacts on our contact page.
        </p>

        <h2 className="terms-section-heading">4. No Liability</h2>
        <p>
          We are not liable for any loss, injury, or inconvenience caused while using the information on this site.
        </p>

        <h2 className="terms-section-heading">5. Changes to Terms</h2>
        <p>
          These terms may be updated at any time. Continued use of the site means you accept any changes.
        </p>
      </div>
    </div>
  );
};

export default Terms;
