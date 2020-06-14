import React, { Component } from 'react';

import './searchInput.css';

class SearchInput extends Component {
  state = {
    value: '',
  };
  onHandleChange = async (e) => {
    await this.setState({ value: e.target.value });
    this.props.getSearchValue(this.state.value);
  };

  render() {
    return (
      <input
        className='todo-tasks__input'
        type='text'
        required
        placeholder='search'
        value={this.state.value}
        onChange={this.onHandleChange}
      />
    );
  }
}

export default SearchInput;
