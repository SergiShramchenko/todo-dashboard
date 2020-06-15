import React from 'react';

import ExchageIcon from '../exchange-icon';
import CurrencyList from '../currency-list';

import './exchangeData.css';

export default ({ rates }) => (
  <div className='todo-info__exchange-rate-data'>
    <ExchageIcon />
    <CurrencyList rates={rates} />
  </div>
);
