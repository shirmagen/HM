import React, { FC } from 'react';
import { Grid } from '@mui/material';

export const Exterior: FC = ({ children }) => (
  <Grid sx={{ height: '100%' }} justifyContent='center' alignItems='center'>
    {children}
  </Grid>
);
