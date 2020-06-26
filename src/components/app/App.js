import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getData } from '../../redux/rootActionCreator';

import InfoPanel from '../info-panel';
import TasksPanel from '../tasks-panel';

import './App.css';

class App extends Component {
  componentDidMount = () => setTimeout(() => this.props.getData(), 2150);

  render() {
    return (
      <div className='app-container'>
        <div className='todo'>
          <InfoPanel />
          <TasksPanel />
        </div>
      </div>
    );
  }
}

export default connect(null, { getData })(App);
