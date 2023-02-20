import React, { Component } from "react";
import BackupImg from "../../images/backupImage.png";
import Accept from "../../images/accept.png";
import Reject from "../../images/reject.png";
import Phone from "../../images/phone-icon.png";
import Calender from "../../images/calender-icon.png";
import Email from "../../images/email-icon.png";

import SearchBar from "../../components/searchBar/searchBar.js";
import "./admin.css";
import axios from "axios";

export default class admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: [],
      loaded: false,
      activeIndex: 0,
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.getDate = this.getDate.bind(this);
    this.handleUpdateStatus = this.handleUpdateStatus.bind(this);
  }

  handleNext = () => {
    this.setState((prevState) => ({
      activeIndex: (prevState.activeIndex + 1) % this.state.requests.length,
    }));
  };

  handlePrev = () => {
    this.setState((prevState) => ({
      activeIndex:
        prevState.activeIndex === 0
          ? this.state.requests.length - 1
          : prevState.activeIndex - 1,
    }));
  };

  handleKeyPress = (e) => {
    if (e.key === "ArrowUp") {
      this.handlePrev();
    } else if (e.key === "ArrowDown") {
      this.handleNext();
    }
  };
  getDate(e) {
    let date = e.split("T");
    return date[0];
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
    axios
      .get("http://localhost:3003/order")
      .then((response) => {
        {
          if (response.status === 200) {
            this.setState({ requests: response.data.response, loaded: true });
            console.log(this.state.requests);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleUpdateStatus = (id, newStatus) => {
    const response = axios
      .put(`http://localhost:3003/order/${id}`, {
        Status: newStatus,
      })
      .then((response) => {
        {
          if (response.status === 200) {
            const updatedOrder = response.data.response;
            this.setState((prevState) => ({
              requests: prevState.requests.map((request) =>
                request._id === updatedOrder._id ? updatedOrder : request
              ),
            }));
            console.log(this.state.requests);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const requests = this.state.requests;
    return (
      <div className="admin-container">
        <h1>Admin Dashboard</h1>

        {this.state.loaded ? (
          <div className="main flex-row">
            <div className="borrowing-requests flex-column">
              <h2>Borrowing Requests</h2>
              {/* <SearchBar /> */}
              <div className="requests-lists flex-column">
                {requests.map((request, index) => {
                  return (
                    <div
                      className="request-card flex-row"
                      onClick={() => this.setState({ activeIndex: index })}
                      style={{
                        boxShadow:
                          this.state.activeIndex === index
                            ? "3px 4px 4px #A57C40"
                            : "",
                        display:
                          request.Status === "accepted" ||
                          request.Status === "rejected"
                            ? "none"
                            : "",
                      }}
                      key={request._id}
                    >
                      <div className="request-image-container">
                        <img
                          src={
                            request.Book.image
                              ? "http://localhost:3003/" + request.Book.image
                              : BackupImg
                          }
                          alt=""
                        />
                      </div>
                      <div className="reuest-card-info flex-row">
                        <div className="reuest-card-title flex-column">
                          <p>{request.Book.title}</p>
                          <p>Title</p>
                        </div>
                        <div className="reuest-card-author flex-column">
                          <p>
                            {request.Book.Author.firstName}{" "}
                            {request.Book.Author.lastName}
                          </p>
                          <p>Author</p>
                        </div>
                        <div className="reuest-card-status flex-column">
                          <p>{request.Status}</p>
                          <p>Status</p>
                        </div>
                        <img
                          src={Accept}
                          onClick={() =>
                            this.handleUpdateStatus(request._id, "accepted")
                          }
                        />
                        <img
                          src={Reject}
                          onClick={() =>
                            this.handleUpdateStatus(request._id, "rejected")
                          }
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="request-details-container flex-column">
              <h2>Requests Details</h2>

              <div className="request-details-main flex-row">
                <div className="reuest-details-titles flex-column">
                  <p>Title</p>
                  <p>Author</p>
                  <p>Category</p>
                  <p>Status</p>
                  <p>Requester</p>
                </div>
                <div className="reuest-details flex-column">
                  <p>{requests[this.state.activeIndex].Book.title}</p>
                  <p>
                    {requests[this.state.activeIndex].Book.Author.firstName}{" "}
                    {requests[this.state.activeIndex].Book.Author.lastName}
                  </p>
                  <p>
                    {requests[this.state.activeIndex].Book.Category.map(
                      (category) => category.name
                    ).join(", ")}
                  </p>
                  <p>{requests[this.state.activeIndex].Status}</p>
                  <p>{requests[this.state.activeIndex].FullName}</p>
                </div>
              </div>

              <div className="requester-details">
                <div className="requester-phone flex-row">
                  <img src={Phone} />
                  <p>{requests[this.state.activeIndex].PhoneNumber}</p>
                </div>
                <div className="requester-email flex-row">
                  <img src={Email} />
                  <p>{requests[this.state.activeIndex].Email}</p>
                </div>
                <div className="borrow-time flex-row">
                  <img id="calender" src={Calender} />
                  <p style={{ color: "#260101", fontWeight: "700" }}>From</p>
                  <p>
                    {this.getDate(requests[this.state.activeIndex].DateFrom)}
                  </p>
                  <p style={{ color: "#260101", fontWeight: "700" }}>To</p>
                  <p>{this.getDate(requests[this.state.activeIndex].DateTo)}</p>
                </div>
              </div>
              <img
                id="book-img"
                src={
                  "http://localhost:3003/" +
                  requests[this.state.activeIndex].Book.image
                }
              />
            </div>
          </div>
        ) : (
          <div className="loading">
            <p>Loading...</p>
          </div>
        )}
      </div>
    );
  }
}
