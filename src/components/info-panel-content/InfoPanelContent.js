import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectLoadingInfoPanel } from '../../redux/ui/ui.selectors';

import News from '../news';
import Weather from '../weather';
import ExchangeRates from '../exchange-rates';

import withSkeleton from '../../hocs/with-skeleton';

const InfoPanelContent = () => (
  <>
    <Weather />
    <News />
    <ExchangeRates />
  </>
);

const mapStateToProps = createStructuredSelector({
  loading: selectLoadingInfoPanel,
});

export default connect(mapStateToProps)(withSkeleton(InfoPanelContent));
