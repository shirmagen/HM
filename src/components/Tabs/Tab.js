import React from 'react';
import {Typography, Box} from '@material-ui/core';

export default ({value, index, children}) => {  
    return (
      <div
        hidden={value !== index}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  