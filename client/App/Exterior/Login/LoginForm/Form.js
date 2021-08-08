import React from 'react';
import { Column, Row, Padded } from 'mui-flex-layout';
import { TextField } from 'formik-material-ui';
import { Button, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { Form, Field } from 'formik';

const FullForm = styled(Form)`
  width: 45%;
`;

const Header = styled(Typography)`
  color: #3a3636;
  font-weight: bolder;
`;

export default () => {
  return (
    <Column height={'100%'} width={'100%'} justifyContent={'center'} alignItems={'center'}>
      <Header variant={'h3'}>{'Log in'}</Header>
      <Row height={'5%'} />

      <FullForm>
        <Padded>
          <Field
            fullWidth
            type="email"
            label="Email"
            name="email"
            data-testid="email"
            component={TextField}
          />
        </Padded>
        <Padded>
          <Field
            fullWidth
            type="password"
            label="Password"
            name="password"
            component={TextField}
            data-testid="password"
          />
        </Padded>
        <Padded m={1}>
          <Button fullWidth color={'primary'} variant={'contained'} type={'submit'}>
            {'Log in'}
          </Button>
        </Padded>
      </FullForm>
    </Column>
  );
};
