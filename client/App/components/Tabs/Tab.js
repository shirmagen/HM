import React from 'react';

export const Tab = ({ value, index, children }) =>
  // shr bat zona she did style on html
  (<div style={{ height: '100%', width: '100%', background: '#0082a045' }}
        hidden={value !== index}>
    {children}
  </div>);
