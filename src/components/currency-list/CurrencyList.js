import React from 'react';

import CurrencyItem from '../currency-item';

import './currencyList.css';

export default ({ rates: { GBP, EUR, RUB } }) => (
  <div className='todo-info__exchange-rate-data-list'>
    <CurrencyItem currency={GBP} />
    <CurrencyItem currency={EUR} />
    <CurrencyItem currency={RUB} />
  </div>
);
