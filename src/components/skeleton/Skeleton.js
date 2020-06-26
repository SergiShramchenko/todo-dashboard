import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import './skeleton.css';

export default () => (
  <div className='skeleton'>
    <SkeletonTheme color='#202020' highlightColor='#444'>
      <Skeleton
        duration={1.2}
        count={7}
        height={12}
        style={{ marginTop: 20, marginBottom: 20 }}
      />
    </SkeletonTheme>
  </div>
);
