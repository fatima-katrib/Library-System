import "./quote.css";
import React, { Component } from "react";
import WriterImg from "../../images/Fyodor-Dostoyevsky2.png";
export default class Quote extends Component {
  render() {
    return (
      <div className="quote-section">
        <img src={WriterImg} alt="Fyodor Dostoyevsky" />
        <div className="quote-text">
          <q id="quote">
            The mystery of human existence lies not in just staying alive, but
            in finding something to live for.
          </q>
          <p>-- Fyodor Dostoyevsky</p>
        </div>
      </div>
    );
  }
}
