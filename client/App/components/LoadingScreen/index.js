import React from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import { Column } from 'mui-flex-layout';
import styled from 'styled-components';

const LargeCircularProgress = styled(CircularProgress)`
  width: 150px !important;
  height: 150px !important;
`;

const SmallFavorite = styled(Favorite)`
  height: 0.8em !important;
  width: 0.8em !important;
`;

const MarkedBox = styled(Column)`
  border-radius: 10px;
  border: 1px dotted black;
`;

export const LoadingScreen = () => (
  <Column height={'100%'} width={'100%'} alignItems={'center'} justifyContent={'center'}>
    <LargeCircularProgress color={'secondary'} />
    <MarkedBox p={2} m={5} justifyContent={'center'} alignItems={'center'}>
    </MarkedBox>
  </Column>
);
