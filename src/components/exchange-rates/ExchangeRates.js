import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectRates } from '../../redux/info/info.selectors';

import ExchangeData from '../exchange-data';

import './exchangeRates.css';

const ExchangeRate = ({ rates }) => (
  <div className='todo-info__exchange-rate'>
    <ExchangeData rates={rates} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  rates: selectRates,
});

export default connect(mapStateToProps)(ExchangeRate);
