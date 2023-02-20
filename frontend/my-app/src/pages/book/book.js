import React, { Component } from "react";
import bookImage from "../../images/book.png";
import "./book.css";

export class Book extends Component {
  render() {
    return (
      <main className="book-page-main">
        <section>
          <h1 className="book-page-title">Name Of The Book</h1>
          <div className="book-page-info-container">
            <p>
              <span>Author</span>
              Name Of The Author
            </p>
            <p>
              <span>Category</span>
              Category Name
            </p>
            <p>
              <span>Status</span>
              Pending...
            </p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              fugiat impedit laborum quod laudantium porro iste, aspernatur ab
              cum mollitia doloribus magnam, facilis commodi. Quod culpa
              quibusdam nam odit, quae ea non eveniet eum neque? Error voluptas
              ab dolore eius exercitationem tempora? Repellat, ratione sequi.
            </p>
          </div>
          <button className="borrow-btn">Borrow</button>
        </section>

        <div className="book-page-img-container">
          <img src={bookImage} alt="Book" />
        </div>
      </main>
    );
  }
}

export default Book;
