import React from 'react';

import './exchangeRates.css';
import ExchangeData from '../exchange-data';

export default ({ rates }) => (
  <div className='todo-info__exchange-rate'>
    <ExchangeData rates={rates} />
  </div>
);
