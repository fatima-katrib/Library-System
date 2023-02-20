import React, { Component } from 'react';
import Phone from "../../images/phone-icon.png";
import Calender from "../../images/calender-icon.png";
import Email from "../../images/email-icon.png";

export default class requestDetails extends Component {
  render() {
    return (
      <div className="request-details-container">
<h3>Requests Details</h3>
<h2>{this.props.requests[this.props.activeIndex].book.title}</h2>
<div className="request-details-main">
  <div className="reuest-details-titles">
    <p>Author</p>
    <p>Category</p>
    <p>Status</p>
    <p>Requester</p>
  </div>
  <div className="reuest-details">
    <p>{this.props.requests[this.props.activeIndex].book.author.name}</p>
    <p>{this.props.requests[this.props.activeIndex].FullName}</p>
    <p>{this.props.requests[this.props.activeIndex].book.category.name}</p>
    <p>{this.props.requests[this.props.activeIndex].status}</p>
  </div>
</div>

<div className="requester-details">
  <div className="requester-phone">
    <img src={Phone} alt="phone-icon"/>
    <p>{this.props.requests[this.props.activeIndex].PhoneNumber}</p>
  </div>
  <div className="requester-email">
    <img src={Email} alt="email-icon"/>
    <p>{this.props.requests[this.props.activeIndex].Email}</p>
  </div>
  <div className="borrow-time">
    <img id="calender" src={Calender} alt="calender-icon"/>
    <p style={{ color: "#260101" }}>From</p>
    <p>{this.props.requests[this.props.activeIndex].dateFrom}</p>
    <p style={{ color: "#260101" }}>To</p>
    <p>{this.props.requests[this.props.activeIndex].dateTo}</p>
  </div>
</div>
<img id="book-img" src={this.props.requests[this.props.activeIndex].book.image} alt={this.props.requests[this.props.activeIndex].book.title}/>
</div>
    )
  }
}
