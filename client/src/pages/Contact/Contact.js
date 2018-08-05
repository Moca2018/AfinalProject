import React, { Component } from "react";
import "./Contact.css";

class About extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-content">
          <h1 className="contact-title">Contact Us:</h1>
          <h3>Tel: (800) 111-1111</h3>
          <h3>Email: RoommateQuest@contact.com </h3>
          <h3 className="contact-social"><span>Social Media:</span>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-google-plus-g"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-pinterest-p"></i>
          </h3>
        </div>
      </div>
    );
  }
}

export default About;
