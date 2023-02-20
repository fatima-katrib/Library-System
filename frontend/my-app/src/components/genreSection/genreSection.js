import React, { Component } from "react";
import Scientific from "../../images/scientific.png";
import Fiction from "../../images/fiction.png";
import Historical from "../../images/historical.png";
import Drama from "../../images/drama.png";
import Political from "../../images/political.png";
import "./genreSection.css";

const genres = [
  {
    name: "Scientific",
    image: Scientific,
  },
  {
    name: "Fiction",
    image: Fiction,
  },
  {
    name: "Historical",
    image: Historical,
  },
  {
    name: "Drama",
    image: Drama,
  },
  {
    name: "Political",
    image: Political,
  },
];

export class genreSection extends Component {
  render() {
    return (
      <div className="genre-section">
        <h2>Common Genres</h2>
        <div className="genres-cards" onClick={e=>{}}>
          {genres.map(({ name, image }) => (
            <div className="genre-card" key={name}>
              <img src={image} alt={name} />
              <h3>{name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default genreSection;
