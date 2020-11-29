import React, {useState} from 'react';
import {Button, FormControl, Select, TextField, MenuItem} from '@material-ui/core';
import styled from 'styled-components';

export default ({onSubmit}) => {
  const [age, setAge] = useState('');

  const handleChange = ({target: {value}}) => {
    setAge(value);
  };

  const handleClick = () => {
    // Much shit
    onSubmit();
  };

  return (
    <FormControl>
      <TextField label='Standard' />
      <TextField label='Filled' variant='filled' />
      <TextField label='Outlined' variant='outlined' />
      <Select
        value={age}
        onChange={handleChange}
      >
        <MenuItem value='' />
        <MenuItem value={10}>{'Ten'}</MenuItem>
        <MenuItem value={20}>{'Twenty'}</MenuItem>
        <MenuItem value={30}>{'Thirty'}</MenuItem>
      </Select>
      <Button onClick={handleClick}>{'Save'}</Button>
    </FormControl>
  );
};
