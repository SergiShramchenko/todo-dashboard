import React, { Component } from 'react';
import { connect } from 'react-redux';

import News from '../news';
import ExchangeRates from '../exchange-rates';
import Weather from '../weather';

import {
  getCurrentNewsInfo,
  getCurrentRatesInfo,
  getCurrentWeatherInfo,
} from '../../redux/info/info.actions';

import './InfoPanel.css';

class InfoPanel extends Component {
  async componentDidMount() {
    await this.props.getCurrentNewsInfo();
    await this.props.getCurrentRatesInfo();
    await this.props.getCurrentWeatherInfo();
  }
  render() {
    const {
      info: {
        news,
        rates: { EUR, USD, RUB },
      },
    } = this.props;
    return (
      <div className='todo-info'>
        <Weather />
        <News news={news} />
        <ExchangeRates currencies={{ EUR, USD, RUB }} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrentNewsInfo: () => dispatch(getCurrentNewsInfo()),
  getCurrentRatesInfo: () => dispatch(getCurrentRatesInfo()),
  getCurrentWeatherInfo: () => dispatch(getCurrentWeatherInfo()),
});

const mapStateToProps = ({ info }) => ({ info });

export default connect(mapStateToProps, mapDispatchToProps)(InfoPanel);
