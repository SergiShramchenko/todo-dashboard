import React, { Component } from 'react';

import InfoPanel from '../info-panel';
import TasksPanel from '../tasks-panel';

import { getDataInfo } from '../../redux/info/info.action.creators';

import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount = () => this.props.getDataInfo();
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

const mapDispatchToProps = (dispatch) => ({
  getDataInfo: () => dispatch(getDataInfo()),
});

export default connect(null, mapDispatchToProps)(App);
