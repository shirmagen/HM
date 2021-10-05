import React from 'react';
import { Button, Typography, TextField, Grid, Box } from '@mui/material';
import styled from 'styled-components';
import { Form, Field, Formik, FormikHelpers } from 'formik';
import schema from './login-form.schema';

const FullForm = styled(Form)`
  width: 45%;
`;

const Header = styled(Typography)`
  color: #3a3636;
  font-weight: bolder;
`;

const initialValues = { email: '', password: '' };

type LoginFormProps = {
  handleSubmit: (values: Login, formikHelpers: FormikHelpers<Login>) => void | Promise<any>;
}

export const LoginForm = ({ handleSubmit }: LoginFormProps) =>
  (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
      <Grid direction={'column'} justifyContent={'center'} alignItems={'center'}>
        <Header variant={'h3'}>{'Log in'}</Header>
        <Grid sx={{height: '5%'}}/>

        <FullForm>
          <Box m={1}>
            <Field fullWidth type="email" label="Email" name="email" component={TextField}/>
          </Box>
          <Box m={1}>
            <Field fullWidth type="password" label="Password" name="password" component={TextField}/>
          </Box>
          <Box m={1}>
            <Button fullWidth color={'primary'} variant={'contained'} type={'submit'}>
              {'Log in'}
            </Button>
          </Box>
        </FullForm>
      </Grid>
    </Formik>
  );