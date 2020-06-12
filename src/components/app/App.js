import React from 'react';

import InfoPanel from '../info-panel';
import TasksPanel from '../tasks-panel';

import './App.css';

// const openWeatherMapApiKey = '7f70d7aad0ed68b8146bb8b1ba3352c5';

const App = () => (
  <div className='app-container'>
    <div className='todo'>
      <InfoPanel />
      <TasksPanel />
    </div>
  </div>
);

export default App;
