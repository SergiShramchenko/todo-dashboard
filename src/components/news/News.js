import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectNews } from '../../redux/info/info.selectors';

import NewsList from '../news-list';

import './news.css';

const News = ({ news }) => (
  <div className='todo-info__news'>
    <h3>News</h3>
    <NewsList news={news} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  news: selectNews,
});

export default connect(mapStateToProps)(News);
