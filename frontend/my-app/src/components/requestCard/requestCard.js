import React, { Component } from "react";
import Accept from "../../images/accept.png";
import Reject from "../../images/reject.png";

export default class requestCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }
  componentDidMount() {
    document.addEventListener("keydown", this.props.handleKeyPress(this.state.activeIndex));
  }
  render() {
    return (
      <div className="requests-lists">
        {this.props.requests.map((request, index) => {
          return (
            <div
              className="request-card"
              onClick={(e) => {this.setState({ activeIndex: index });
                  this.props.handleActiveIndex(this.state.activeIndex);
                
              }}
              style={{
                boxShadow:
                  this.state.activeIndex === index ? "3px 4px 4px #A57C40" : "",
                display:
                  request.status === "borrowed" ||
                  request.status === "available"
                    ? "none"
                    : "",
              }}
            key={request.book.title}>
              <div className="request-image-container">
                <img
                  src={request.book.image.BookImg}
                  alt={request.book.title}
                />
              </div>
              <div className="reuest-card-info">
                <div className="reuest-card-title">
                  <p>{request.book.title}</p>
                  <p>Title</p>
                </div>
                <div className="reuest-card-author">
                  <p>{request.book.author.name}</p>
                  <p>Author</p>
                </div>
                <div className="reuest-card-status">
                  <p>{request.status}</p>
                  <p>Status</p>
                </div>
                <img src={Accept} alt="accept button" />
                <img src={Reject} alt="reject-button" />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
