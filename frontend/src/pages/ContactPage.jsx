import React from 'react';
import "./ContactPage.css";

const Contact = () => {
  return (
    <div id="contact-page" className="contact-page">
      
      {/* Contact Heading */}
      <h1 id="contact-heading" className="contact-heading">Contact Me</h1>

      {/* Personal Info */}
      <div id="contact-info" className="contact-info">
        <p><strong>Name:</strong> Shahid Firozabad</p>
        <p><strong>Address:</strong> Usgao, Goa</p>
        <p><strong>Contact:</strong> 7249280617</p>
        <p><strong>Email:</strong> <a href="mailto:shahidfirozaba@gmail.com" className="contact-email">shahidfirozaba@gmail.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/shahidfirozabad" target="_blank" rel="noopener noreferrer" className="contact-linkedin">www.linkedin.com/in/shahidfirozabad</a></p>
      </div>

      {/* About Section */}
      <div id="contact-about" className="contact-about">
        <h2 className="about-heading">About Me</h2>
        <p className="about-text">
          I'm a passionate tech enthusiast currently pursuing my Bachelor of Computer Applications (BCA) at Goa Multi-Faculty College, Dharbandora.
          My journey into technology began after completing my Commerce studies at SecAB PU College, Bijapur, Karnataka, and my 10th standard at St. Joseph High School, Goa.
        </p>
      </div>

      {/* Emergency Contact */}
      <div id="emergency-contact" className="emergency-contact">
        <h2 className="emergency-heading">Emergency Contacts (for Tourists)</h2>
        <ul className="emergency-list">
          <li><strong>Tourist Helpline:</strong> 1363 (India-wide)</li>
          <li><strong>Police:</strong> 100</li>
          <li><strong>Ambulance:</strong> 102</li>
          <li><strong>Goa Tourism Helpline:</strong> 0832-2437132</li>
        </ul>
      </div>

      {/* Optional Static Contact Form */}
      <div id="contact-form" className="contact-form">
        <h2 className="form-heading">Send a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" className="form-input name-input" />
          <input type="email" placeholder="Your Email" className="form-input email-input" />
          <textarea placeholder="Your Message" className="form-textarea message-textarea"></textarea>
          <button type="submit" className="form-button">Submit</button>
        </form>
      </div>
      
    </div>
  );
};

export default Contact;
