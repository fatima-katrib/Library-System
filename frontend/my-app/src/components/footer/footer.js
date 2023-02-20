import React, { Component } from "react";
import Logo from "../../images/logo.png";
import Instagram from "../../images/instagram.png";
import Facebbok from "../../images/facebook.png";
import Twitter from "../../images/twitter.png";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-box">
        <div className="media">
          <img src={Logo} />
          <div className="social-media">
            <img src={Instagram} />
            <img src={Facebbok} />
            <img src={Twitter} />
          </div>
        </div>
        <div className="information">
          <h4>Information</h4>
          <ul>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/books">Books</a>
          </ul>
        </div>
        <div className="address">
          <h4>Address</h4>
          <p>
            9094 Bay Meadows Street
            <br />
            Conyers, GA 30012
          </p>
        </div>
        <div className="phone">
          <h4>Phone</h4>
          <p>
            +229-955-5388-336
            <br />
            +229-955-5373-360{" "}
          </p>
          <p style={{ color: "#8C8C8C", fontSize: "18px" }}>
            © All rights reserved
          </p>
        </div>
      </div>
    );
  }
}
