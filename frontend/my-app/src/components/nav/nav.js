import React, { Component } from "react";
import "./nav.css";
import logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";

import AdminForm from "../../pages/admin form";
class Nav extends Component {
  state = {
    showForm: false
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  handleExit = () => {
    this.setState({ showForm: false });
  };

  render() {
    return (
      <div>
      <nav>
        <a className="logo-container" href="#">
          <img src={logo} alt="Logo" />
          Wissam's Library
        </a>
        <div className="navigation-section">
          <NavLink to="/" className="link">
            Home
          </NavLink>
          <NavLink to="/books" className="link">
            Books
          </NavLink>
          <NavLink to="/about" className="link">
            About
          </NavLink>
          <NavLink to="/contact" className="link">
            Contact
          </NavLink>
        </div>
        <button className="admin-login" onClick={this.toggleForm}>
          Admin Login
        </button>
      </nav>
      {this.state.showForm && (
        <AdminForm handleExit={this.handleExit} />
      )}
    </div>

    );
  }
}

export default Nav;
