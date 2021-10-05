import React from 'react';
import { Typography, Paper, Divider, Grid } from '@mui/material';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import useAuthApi from '../../hooks/api/auth.hook';
import { useAlert } from '../../Providers/AlertProvider';
import { useAuth } from '../../Providers/AuthProvider';
import {LoginForm} from './LoginForm/Form';
import { FormikHelpers } from 'formik';

const LoginPaper = styled(Paper)`
  && {
    width: 80%;
    height: 80%;
    border-radius: 15px;
    background: linear-gradient(45deg, #000000f5, #004d79);
  }
`;

const Title = styled(Typography)`
  font-weight: 500;
  font-size: 50px;
  color: white;
  letter-spacing: 0.05rem;
`;

const LayoutDivider = styled(Divider)`
  height: 100%;
  width: 2px;
`;

const Icon = styled.img`
  margin: 10px;
`;

const ApolloLogin = styled(Grid)`
  background: linear-gradient(45deg, #000000f5, #004d79);
`;

const AuthWrapper = styled(Grid)`
  background-color: white;
`;

export const Login = () => {
  const { push } = useHistory();
  const { login } = useAuthApi();
  const { setAuth } = useAuth();
  const { open } = useAlert();

  const handleLogin = async ({email, password}: Login, { setSubmitting }: FormikHelpers<Login>) => {
    try {
      const {token, newUser} = await login(email, password);
      await setAuth(token, newUser);
      
      push('/home');
    } catch (error) {
      open('מייל או סיסמא שגויים', 'error');
      setSubmitting(false);
    }
  };

  return (
    <ApolloLogin width={'100%'} height={'100%'} justifyContent={'center'} alignItems={'center'}>
      <LoginPaper elevation={0}>
        <Grid alignItems={'center'} justifyContent={'flex-start'}>
          <Grid alignItems={'center'} justifyContent={'center'}>
            <Title>{'HM'}</Title>
          </Grid>
          <LayoutDivider />
          <AuthWrapper
            direction={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <LoginForm handleSubmit={handleLogin} />
          </AuthWrapper>
        </Grid>
      </LoginPaper>
    </ApolloLogin>
  );
};
