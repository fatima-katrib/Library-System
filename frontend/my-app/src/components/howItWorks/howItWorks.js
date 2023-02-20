import "./howItWorks.css";
import React, { Component } from "react";
import Search from "../../images/search.png";
import Form from "../../images/form-approved.png";
import Approved from "../../images/form.png";

const instructions = [
  {
    title: "Search",
    image: Search,
    instruction:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    title: "Fill Request Form",
    image: Form,
    instruction:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    title: "Get Affirmation",
    image: Approved,
    instruction:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
];
export default class howItWorks extends Component {
  
  render() {
    return (
      <div className="how-it-works-section">
        <h2>How It Works</h2>
        <div className="working-cards" onClick={e=>{}}>
          {instructions.map(({ title, image, instruction }) => (
            <div className="working-card" key={title}>
              <img src={image} alt={title} />
              <h3>{title}</h3>
              <p>{instruction}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
