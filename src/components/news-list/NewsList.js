import React from 'react';

import NewsItem from '../news-item';

import './newsList.css';

export default ({ news }) => (
  <ul className='todo-info__news-list'>
    {news.map(({ title, url, source: { id, name } }) => (
      <NewsItem key={id || name} url={url} title={title} />
    ))}
  </ul>
);
