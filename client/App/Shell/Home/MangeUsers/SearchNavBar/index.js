import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { Search } from '@material-ui/icons';

export default ({ users, setViewUsersList }) => {
  const filterUsers = ({ target: { value } }) => {
    value != ''
      ? setViewUsersList(users.filter(user => isSearchUser(user, value)))
      : setViewUsersList(users);
  };

  const isSearchUser = ({ name: { first, last }, username, email }, searchValue) =>
    [first, last, username, email].some(field => field.includes(searchValue));

  return (
    <Grid container spacing={1} alignItems="flex-end">
      <Grid item>
        <Search />
      </Grid>
      <Grid item>
        <TextField id="input-with-icon-grid" label="חפש משתתף" onChange={filterUsers} />
      </Grid>
    </Grid>
  );
};
