import React from 'react';

import {Map} from '../../components/Map';
import {VerticalToolBar} from '../../components/VerticalToolBar';
import {CreateButton} from '../../components/CreateNew/CreateNewButton';
import {AppBar} from '../../components/AppBar';
import { Grid } from '@mui/material';

export const Home = () =>
  (
    <Grid sx={{height: '100%'}}>
      <AppBar/>
      <Map/>
      <VerticalToolBar/>
      <CreateButton/>
    </Grid>
  );
