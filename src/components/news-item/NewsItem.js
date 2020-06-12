import React from 'react';

import './newsItem.css';

export default ({ url, id, name, title }) => (
  <li className='todo-info__news-list__item' key={id || name}>
    <a href={url} target='_blank' rel='noopener noreferrer'>
      {title}
    </a>
    {/* <p>politico</p> */}
  </li>
);
