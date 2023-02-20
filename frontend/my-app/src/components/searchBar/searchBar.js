import "./searchBar.css"
import React, { Component } from 'react'
import Search from "../../images/search.svg";

export default class searchBar extends Component {
  state = {
    title: "",
    author: ""}

  render() {
    return (
      <div className="searchBar">
        <input className="title-input" type="text" name="title" placeholder="Title" onChange={(event) => {
            this.setState({ title: event.target.value });
          }}/>
        <input className="author-input" type="text" name="author" placeholder="Author" onChange={(event) => {
            this.setState({ author: event.target.value });
          }}/>
        <button type="submit"><img src={Search} alt="search" 
        // onClick={e=>{this.props.}}
        /></button>
      </div>
    )
  }
}
