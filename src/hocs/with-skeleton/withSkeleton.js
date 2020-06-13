import React from 'react';

import Skeleton from '../../components/skeleton';

export default (WrappedComponent) => ({ loading, ...otherProps }) =>
  loading ? <Skeleton /> : <WrappedComponent {...otherProps} />;
