import React, { Component } from 'react';

import './newTaskItem.css';

class newTaskItem extends Component {
  state = {
    value: '',
  };
  onChangeValue = (e) => {
    this.setState({ value: e.target.value });
  };
  onSubmitTask = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitTask}>
        <input
          className='tasks__item new-task'
          type='text'
          style={{ color: 'rgb(95, 94, 94)' }}
          contentEditable
          placeholder='New task'
          onChange={(e) => this.onChangeValue(e)}
          value={this.state.value}
          required
        />
      </form>
    );
  }
}

export default newTaskItem;
