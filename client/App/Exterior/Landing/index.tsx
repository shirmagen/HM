import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';

const Logo = styled.img`
  margin-right: 15px;
  height: 100px;
`;

const ApolloLanding = styled(Grid)`
  background: linear-gradient(45deg, #000000f5, #004d79);
`;

const Title = styled(Typography)`
  font-weight: 500;
  color: white;
  letter-spacing: 0.05rem;
`;

const AuthButton = styled(Button)`
  color: white;
  border-radius: 15px;
  margin-right: 15px;
`;

export const Landing = () => {
  const { push } = useHistory();

  const gotoLogin = () => {
    push('/login');
  };

  return (
    <ApolloLanding direction={'column'}>
      <Grid sx={{height: '15%'}} width={'100%'} alignItems={'center'}>
        <Grid alignItems={'center'}>
          <Grid alignItems={'center'} justifyContent={'space-between'}>
            <Grid alignItems={'center'} justifyContent={'center'}>
              <Title variant={'h3'} color={'inherit'}>
                {'Hm'}
              </Title>
            </Grid>
            <Grid>
              <AuthButton
                onClick={gotoLogin}
                size={'large'}
                color={'primary'}
                variant={'contained'}
              >
                {'Log in'}
              </AuthButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ApolloLanding>
  );
};
