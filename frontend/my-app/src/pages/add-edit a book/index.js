import React, { Component } from 'react'
import "./add.css";
import SelectWithPlaceholder from '../../components/SelectWithPlaceholder';
import ExitButton from '../../components/Exit button';

export class AddEditbook extends Component {
  render() {
    const categoryOptions = ['Action', 'Comedy', 'Drama', 'Horror', 'Romance'];

    return (
      <div className='add-wrapper'>
        <div className='main-edit-container'>
          <h1 className='title-add'>Add/Edit a Book</h1>
          <h3 className='title-detail'>Enter book detials</h3>
          <div className='input-book-name'>
            <input type='text' className='book-name-input' placeholder=' Book Name' />
          </div>

          <div className='input-auther-description'>
            <input type='text' className='auther-input' placeholder=' Auther' />
          </div>
          <div className='select-auther-input'>
            <SelectWithPlaceholder
              options={categoryOptions}
              placeholder='Category'
            />
            <input type='date' className='Release-date' placeholder=' Relase date' />

          </div>
          <div className='input-description'>
            <input type='text' className='description-input' placeholder=' Description' />
          </div>
          <div className='buttun-add-edit'>
            <button className='submit-button-add'>Submit</button>
            <button className='submit-button-delet'>Delete</button>
           
          </div>
          <ExitButton handleClick={this.props.handleExit} />

        </div>
      </div>
    )
  }
}

export default AddEditbook