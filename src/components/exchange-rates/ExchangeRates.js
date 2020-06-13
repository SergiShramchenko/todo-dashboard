import React from 'react';
import dollarLogo from '../../assets/coin_dollar.svg';

import CurrencyList from '../currency-list/CurrencyList';

import './exchangeRates.css';

export default ({ rates }) => (
  <div className='todo-info__exchange-rate'>
    <div className='todo-info__exchange-rate-data'>
      <img className='dollar-icon' src={dollarLogo} alt='dollar_icon' />
      <CurrencyList rates={rates} />
    </div>
  </div>
);
