import React from 'react';
import { CircularProgress} from '@mui/material';
import { Favorite } from '@mui/icons-material';
import styled from 'styled-components';
import Grid from '@mui/material';

const LargeCircularProgress = styled(CircularProgress)`
  width: 150px !important;
  height: 150px !important;
`;

const SmallFavorite = styled(Favorite)`
  height: 0.8em !important;
  width: 0.8em !important;
`;

const MarkedBox = styled(Grid)`
  border-radius: 10px;
  border: 1px dotted black;
`;

export const LoadingScreen = () => (
  <Grid direction={'column'} alignItems={'center'} justifyContent={'center'}>
    <LargeCircularProgress color={'secondary'} />
    <MarkedBox direction={'column'} m={5} justifyContent={'center'} alignItems={'center'}>
    </MarkedBox>
  </Grid>
);
