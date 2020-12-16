import React from 'react';

export default ({value, index, children}) => { 
   
    return (
      <div style={{ height: 400, width: '100%' }} hidden={value !== index}>
         {children}
      </div>
    );
  }
  