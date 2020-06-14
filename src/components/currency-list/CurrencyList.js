import React from 'react';

import CurrencyItem from '../currency-item';

import './currencyList.css';

export default ({ rates: { GBP, EUR, RUB } }) => (
  <div className='todo-info__exchange-rate-data-list'>
    <CurrencyItem name={'gbp'} currency={GBP} />
    <CurrencyItem name={'eur'} currency={EUR} />
    <CurrencyItem name={'rub'} currency={RUB} />
  </div>
);
