import React, { Component } from "react";
import penImage from "../../images/pen.svg";

class BookCard extends Component {
  render() {
    return (
      <div className="book-card">
        <div className="edit-icon only-admin">
          <img src={penImage} alt="pen icon" />
        </div>
        <div className="book-card-image-container">
          <img src={this.props.imgPath} alt="" />
        </div>
        <p className="book-card-info">
          <a href="#">
            {this.props.category.map((category) => category.name).join(", ") ||
              "category"}
          </a>{" "}
          - <a href="#"> {this.props.status}</a>
        </p>
        <p className="book-card-title">{this.props.title}</p>
      </div>
    );
  }
}

export default BookCard;
