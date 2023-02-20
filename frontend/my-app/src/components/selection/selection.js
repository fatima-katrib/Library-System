import React, { Component } from "react";
import AddEditbook from "../../pages/add-edit a book";

import "./selection.css";

export class Selection extends Component {
  state = {
    showForm: false
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };


  render() {
    return (
      <div className="select-add-books"><div className="selection-container">
        <select name="category" id="category">
          <option value="" selected disabled hidden>
            Category
          </option>
          <option value="drama">Drama</option>
          <option value="action">Action</option>
          <option value="horror">Horror</option>
        </select>
        <select name="sort" id="">
          <option value="" selected disabled hidden>
            Sort
          </option>
          <option value="alphabetically">Alphabetically</option>
          <option value="hottest">Hottest</option>
        </select>
        <select name="date" id="date">
          <option value="" selected disabled hidden>
            Date
          </option>
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
        </select>

        <button className="add-book only-admin" onClick={this.toggleForm}> + Add a Book</button>
        
        </div>
        {this.state.showForm && (
            <AddEditbook handleExit={this.handleExit} />
          )}
 
      </div>
    );
  }
}

export default Selection;
