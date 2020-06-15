import React from 'react';

import RingLoader from 'react-spinners/RingLoader';

export default (WrappedComponent) => ({ loading, ...otherProps }) =>
  loading ? (
    <RingLoader
      size={50}
      css={`
        margin: auto;
      `}
    />
  ) : (
    <WrappedComponent {...otherProps} />
  );
