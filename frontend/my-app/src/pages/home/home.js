import React, { Component } from "react";
import HeroSection from "../../components/heroSection/heroSection.js";
import GenreSection from "../../components/genreSection/genreSection.js";
import HowItWorks from "../../components/howItWorks/howItWorks.js";
import Quote from "../../components/quoteSection/quote.js";
import "./home.css";
import axios from "axios";

export default class Home extends Component {
  state = {
    activeIndex: 0,
    booksLists: [],
    isLoaded: false,
  };

  componentDidMount() {
    axios
      .get("http://localhost:3003/api/book/")
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            booksLists: response.data.response.sort((a, b) =>
              a.borrowsNb > b.borrowsNb ? -1 : b.borrowsNb > a.borrowsNb ? 1 : 0
            ),
            isLoaded: true,
          });console.log(this.state.booksLists);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleNext = () => {
    this.setState((prevState) => ({
      activeIndex: (prevState.activeIndex + 1) % 3,
    }));
  };

  handlePrev = () => {
    this.setState((prevState) => ({
      activeIndex: prevState.activeIndex === 0 ? 2 : prevState.activeIndex - 1,
    }));
  };
  render() {
    const { activeIndex } = this.state;
    const activeBook = this.state.booksLists[activeIndex];
    if (this.state.isLoaded) {
    return (
      <div className="home">
        <HeroSection  activeBook={activeBook}
              handleNext={this.handleNext}
              handlePrev={this.handlePrev}/>
        <GenreSection/>
        <Quote/>
        <HowItWorks/>
      </div>
    ); } else {
      <div>Loading...</div>;
    }
  }
}
