import "./carousel.css";
import React, { Component } from "react";

class BookCarousel extends Component {
  render() {
    return (
      <div className="carousel">
        <img
          className="book-image"
          src={"http://localhost:3003/" + this.props.activeBook.image}
          alt={this.props.activeBook.title}
        />
        <button className="prev" onClick={this.props.handlePrev}>
        &lt;
        </button>
        <button className="next" onClick={this.props.handleNext}>
        &gt;
        </button>
      </div>
    );
  }
}

export default BookCarousel;
