import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default () => (
  <SkeletonTheme color='#202020' highlightColor='#444'>
    <Skeleton width={100} height={10} duration={1} count={3} />
  </SkeletonTheme>
);
