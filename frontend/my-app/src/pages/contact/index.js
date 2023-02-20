import React, { Component } from "react";
import "../contact/contact.css";

export class Contact extends Component {
  render() {
    return (
      <div className="main-wrapper1">
        <div className="main-form1">
          <h1 className="contact-us-title">
            <b>Leave us a message</b>
          </h1>
          <p className="contact-us-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi{" "}
          </p>
          <form>
            <input type="text" id="name" placeholder="Full Name" />
            <br />
            <br />
            <input type="text" id="email" placeholder="Email" />
            <br></br>
            <input name="text" id="message" placeholder="Message"></input>
            <button className="buton1">Send</button>
          </form>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.5236974268337!2d35.82879441538897!3d34.438851804704335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1521f6abae6fbfe9%3A0x628a984fa6924ed2!2sCity%20Complex!5e0!3m2!1sen!2slb!4v1675342240101!5m2!1sen!2slb"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          >
            map
          </iframe>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ width: "30%" }}>
              9094 Bay Meadows Street<br></br>
              Conyers, GA 30012
            </p>
            <p style={{ width: "60%" }}>
              229-955-5388-336<br></br>
              +229-955-5373-360{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
