import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectWeaher,
  selectNews,
  selectRates,
} from '../../redux/info/info.selectors';

import { getDataInfo } from '../../redux/info/info.actions';

import News from '../news';
import Weather from '../weather';
import ExchangeRates from '../exchange-rates';

import './InfoPanel.css';

class InfoPanel extends Component {
  componentDidMount = () => this.props.getDataInfo();

  render() {
    const { weather, news, rates } = this.props;
    return (
      <div className='todo-info'>
        <Weather weather={weather} />
        <News news={news} />
        <ExchangeRates rates={rates} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  news: selectNews,
  rates: selectRates,
  weather: selectWeaher,
});

const mapDispatchToProps = (dispatch) => ({
  getDataInfo: () => dispatch(getDataInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoPanel);
