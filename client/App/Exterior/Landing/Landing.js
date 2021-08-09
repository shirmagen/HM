import React from 'react';
import styled from 'styled-components';
import { Row, Column } from 'mui-flex-layout';
import { useHistory } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';

const Logo = styled.img`
  margin-right: 15px;
  height: 100px;
`;

const Landing = styled(Column)`
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

export default () => {
  const { push } = useHistory();

  const gotoLogin = () => {
    push('/login');
  };

  return (
    <Landing width={'100%'} height={'100%'}>
      <Row height={'15%'} width={'100%'} alignItems={'center'}>
        <Row width={'100%'} height={'100%'} alignItems={'center'}>
          <Row width={'100%'} alignItems={'center'} justifyContent={'space-between'}>
            <Row alignItems={'center'} justifyContent={'center'} width={'20%'}>
              <Title variant={'h3'} color={'inherit'}>
                {'Hm'}
              </Title>
            </Row>
            <Row m={2}>
              <AuthButton
                onClick={gotoLogin}
                size={'large'}
                color={'primary'}
                variant={'contained'}
              >
                {'Log in'}
              </AuthButton>
            </Row>
          </Row>
        </Row>
      </Row>
    </Landing>
  );
};
