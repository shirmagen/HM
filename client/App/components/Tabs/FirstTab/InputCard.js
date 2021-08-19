import React from 'react';
import { Card, TextField } from '@material-ui/core';

export const InputCard = ({ text, onKeyPress, value, onChange, error, helperText }) => {
  return (
    <Card style={{ padding: '8px', height: '50px', width: '70px', margin: '10px' }}>
      <TextField
        label={text}
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        style={{ background: 'white' }}
        onKeyPress={onKeyPress}
        value={value}
        onChange={onChange}
        error={error}
        helperText={helperText}
      ></TextField>
      {value}
    </Card>
  );
};
