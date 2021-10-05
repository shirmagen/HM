import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Button, Grid, Box } from '@mui/material';
import styled from 'styled-components';

import Image from '../../../assets/404.png';

const ApolloNotFound = styled.img`
  height: 33%;
  width: 33%;
`;

export const NotFound = () => {
  const { push } = useHistory();

  const handleHome = () => push('/home');

  return (
    <Grid direction={'column'} justifyContent={'center'} alignItems={'center'}>
      <ApolloNotFound src={Image} />
      <Box p={2}>
        <Typography>{'The requested page was not found'}</Typography>
      </Box>
      <Box p={2}>
        <Button size={'large'} color={'primary'} variant={'contained'} onClick={handleHome}>
          {'Back to Home'}
        </Button>
      </Box>
    </Grid>
  );
};
