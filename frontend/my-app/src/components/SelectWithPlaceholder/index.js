import React, { Component } from 'react';

class SelectWithPlaceholder extends Component {
  render() {
    const { options, placeholder } = this.props;

    return (
      <select className='category-select-date'>
        <option value="" disabled selected>{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    );
  }
}

export default SelectWithPlaceholder;