import React from 'react';
import { IconButton, ButtonGroup } from '@mui/material';
import {
  BorderColorOutlined,
  BrushOutlined,
  ChangeHistoryOutlined,
  CloseOutlined,
  ColorizeOutlined,
  GestureOutlined,
  RadioButtonUncheckedOutlined,
  StopOutlined,
} from '@mui/icons-material';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import {Map} from '../Map';
import { Row } from 'mui-flex-layout';

const ApolloDrawToolBar = styled(ButtonGroup)`
  position: absolute;
  left: 20px;
  bottom: 20px;
  height: 50px;
  border-color: gray;
  border-style: outset;
  border-width: thin;
  z-index: 2;
`;

export const DrawToolBar = () => {
  let { push } = useHistory();

  return (
    <Row width={'100%'} height={'100%'}>
      <Map />
      <ApolloDrawToolBar color="primary">
        <IconButton size="large">
          <BorderColorOutlined />
        </IconButton>
        <IconButton size="large">
          <BrushOutlined />
        </IconButton>
        <IconButton size="large">
          <ChangeHistoryOutlined />
        </IconButton>
        <IconButton size="large">
          <ColorizeOutlined />
        </IconButton>
        <IconButton size="large">
          <RadioButtonUncheckedOutlined />
        </IconButton>
        <IconButton size="large">
          <GestureOutlined />
        </IconButton>
        <IconButton size="large">
          <StopOutlined />
        </IconButton>
        <IconButton
          onClick={() => {
            push('/home');
          }}
          size="large">
          <CloseOutlined />
        </IconButton>
      </ApolloDrawToolBar>
    </Row>
  );
};
