import React from 'react';
import { IconButton, ButtonGroup } from '@material-ui/core';
import {
  BorderColorOutlined,
  BrushOutlined,
  ChangeHistoryOutlined,
  CloseOutlined,
  ColorizeOutlined,
  GestureOutlined,
  RadioButtonUncheckedOutlined,
  StopOutlined,
} from '@material-ui/icons';
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
        <IconButton>
          <BorderColorOutlined />
        </IconButton>
        <IconButton>
          <BrushOutlined />
        </IconButton>
        <IconButton>
          <ChangeHistoryOutlined />
        </IconButton>
        <IconButton>
          <ColorizeOutlined />
        </IconButton>
        <IconButton>
          <RadioButtonUncheckedOutlined />
        </IconButton>
        <IconButton>
          <GestureOutlined />
        </IconButton>
        <IconButton>
          <StopOutlined />
        </IconButton>
        <IconButton
          onClick={() => {
            push('/home');
          }}
        >
          <CloseOutlined />
        </IconButton>
      </ApolloDrawToolBar>
    </Row>
  );
};
