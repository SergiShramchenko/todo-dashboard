import React from 'react';

import CurrencyName from '../currency-name';
import CurrencyRate from '../currency-rate';

import './currencyItem.css';

export default ({ name, currency }) => (
  <div className='currency-item'>
    <CurrencyName name={name} />
    <CurrencyRate currency={currency} />
  </div>
);
