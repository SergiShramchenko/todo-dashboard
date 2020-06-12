import React from 'react';

import './exchangeRates.css';

export default ({ rates: { EUR, GBP, RUB } }) => (
  <div className='todo-info__exchange-rate'>
    <h3>Currencies</h3>
    <div className='todo-info__exchange-rate-data'>
      <p className='usd'>
        1 <span>usd</span>
      </p>
      <div className='todo-info__exchange-rate-data-list'>
        <p>GBP {GBP}</p>
        <p>EUR {EUR}</p>
        <p>RUB {RUB}</p>
      </div>
    </div>
  </div>
);
