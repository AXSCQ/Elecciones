import React, { useEffect } from 'react';

const FullWidthContainer = ({ children }) => {
  // The useEffect hook that manipulated document and body styles has been removed.
  // The component now acts as a simpler wrapper.
  return (
    <div style={{ width: '100%' }}>
      {children}
    </div>
  );
};

export default FullWidthContainer;
