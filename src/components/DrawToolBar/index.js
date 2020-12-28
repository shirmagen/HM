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
import Mode from '../Mode';
import styled, { keyframes } from 'styled-components';

export default ({ currentMode, setMode }) => {
  const showAnimation = keyframes`
  from {
    transform: translate(0,100px);
  }

  to {
    transform: translate(0,0);
  }
`;

  const props = { currentMode, showAnimation, modeName: 'draw'};

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

  return (
    <Mode {...props}>
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
            setMode('main');
          }}
        >
          <CloseOutlined />
        </IconButton>
      </ApolloDrawToolBar>
    </Mode>
  );
};
