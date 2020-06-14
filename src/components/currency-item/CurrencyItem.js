import React from 'react';

import './currencyItem.css';

export default ({ name, currency }) => (
  <div className='currency-item'>
    <div className='currency-item-name'>
      <p>{name}</p>
    </div>
    <div className='currency-item-rate'>
      <span>{currency}</span>
    </div>
  </div>
);
