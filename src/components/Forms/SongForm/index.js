import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button, FormControl, Select} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const handleChange = (event) => {
  const name = event.target.name;
  setState({
    ...state,
    [name]: event.target.value,
  });
};

const submit = () => {
  alert('ok');
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
        <Button onClick={submit}>save</Button>
    </FormControl>
  );
}
