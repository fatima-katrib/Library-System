import React, { Component } from "react";
import "./heroSection.css";
import test from "../../images/crime-and-punishment-9781510766709_hr.jpg";
import test2 from "../../images/the-alchemist-paulo-coelho.jpg";
import test3 from "../../images/1984.png";
import BookCarousel from "../carousel/carousel";
import SearchBar from "../../components/searchBar/searchBar.js";
import BorrowingForm from "../../pages/borrowing form";


// import { Link } from "react-router-dom";

export default class heroSection extends Component {
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
        <div className="heroSection">
          <div className="heroSection-main">
            <section className="popular-books">
              <p id="title">Popular Books</p>
              <h1>{this.props.activeBook.title}</h1>
              <p id="author">
                {this.props.activeBook.Author.firstName}{" "}{this.props.activeBook.Author.lastName} - {this.props.activeBook.year}
              </p>
              <p id="description">{this.props.activeBook.description}</p>
              <button onClick={this.toggleForm}>Borrow Now</button>
              {/* <Link  to={`/book/${activeBook.id}`}>Borrow</Link> */}
            </section>
            <BookCarousel
              activeBook={this.props.activeBook}
              handleNext={this.props.handleNext}
              handlePrev={this.props.handlePrev}
            />
          </div>
          {this.state.showForm && (
          <BorrowingForm handleExit={this.handleExit} />
        )}

        </div>
      );
   
  }
}
