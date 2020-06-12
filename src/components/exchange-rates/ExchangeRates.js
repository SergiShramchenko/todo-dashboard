import React from 'react';

import './exchangeRates.css';

export default ({ currencies: { EUR, RUB, USD } }) => (
  <div className='todo-info__exchange-rate'>
    <h3>Excahgne</h3>
    <div className='todo-info__exchange-rate-data'>
      <h3>For 1 USD:</h3>
      <p>{EUR}</p>
      <p>{RUB}</p>
      <p>{USD}</p>
    </div>
  </div>
);
