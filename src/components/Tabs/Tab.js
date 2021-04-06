import { Visibility } from '@material-ui/icons';
import React from 'react';

export default ({ value, index, children }) => {
  return (
    <div
      style={{ height: '100%', width: '100%', background: '#0082a045' }}
      hidden={value !== index}
    >
      {children}
    </div>
  );
};
