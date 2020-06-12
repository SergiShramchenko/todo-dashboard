import React from 'react';

import NewsList from '../news-list';

import './news.css';

export default ({ news }) => (
  <div className='todo-info__news'>
    <h3>News</h3>
    <NewsList news={news} />
  </div>
);
