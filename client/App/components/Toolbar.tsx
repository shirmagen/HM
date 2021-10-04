import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

export const AppToolbar = () => {

  return <AppBar>
    <Toolbar>
      <Typography variant='h6'>חזיון שירים | מצעד 41</Typography>
      <Button variant='text'>
        <Typography variant='subtitle1'>ניהול ישויות</Typography>
      </Button>
      <Button variant='text'>
        <Typography variant='subtitle1'>הפצת שיר</Typography>
      </Button>
      <Button  variant='text'>
        <Typography variant='subtitle1'>מחשבונים</Typography>
      </Button>
      <Button variant='text'>
        <Typography variant='subtitle1'>אנשים</Typography>
      </Button>
    </Toolbar>
  </AppBar>;
};