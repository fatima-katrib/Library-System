import React, { Component } from "react";
import NavBar from '../nav/nav.js'
import Footer from "../footer/footer.js";

export class layout extends Component {
  render() {
    return (
      <div className="layout">
        <NavBar />
        {children}
        <Footer />
      </div>
    );
  }
}

export default layout;
