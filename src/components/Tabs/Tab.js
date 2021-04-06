import { Visibility } from '@material-ui/icons';
import React from 'react';

export default ({ value, index, children }) => {
  console.log(`tab ${index} is ${value !== index} hidden`);

  return (
    <div style={{ height: 400, width: '100%' }} hidden={value !== index}>
      {children}
    </div>
  );
};
