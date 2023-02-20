import React, { Component } from "react";
import Selection from "../../components/selection/selection";
import bookImage from "../../images/book.png";
import penImage from "../../images/pen.svg";
import axios from "axios";
import BookCard from "../../components/book/bookCard";
import "./books.css";

export class Books extends Component {
  state = {
    booksLists: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3003/api/book/")
      .then((response) => {
        if (response.status === 200) {
          this.setState({ booksLists: response.data.response });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <Selection />
        <div className="books-container">
          {[...this.state.booksLists].map((e) => {
            return (
              <>
                <BookCard
                  title={e.title}
                  category={e.Category}
                  status={e.status}
                  description={e.description}
                  imgPath={"http://localhost:3003/" + e.image}
                />
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default Books;
