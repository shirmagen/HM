import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {FormControl, Select} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const handleChange = (event) => {
  const name = event.target.name;
  setState({
    ...state,
    [name]: event.target.value,
  });
};

export default function BasicTextFields() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  return (
    <FormControl className={classes.formControl}>
      <TextField id="standard-basic" label="Standard" /><br></br>
      <TextField id="filled-basic" label="Filled" variant="filled" /><br></br>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" /><br></br>
      <Select
          native
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
    </FormControl>
  );
}
