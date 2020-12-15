import React, { useState } from 'react';
import { IconButton, ButtonGroup } from '@material-ui/core';
import {
  BorderColorOutlined,
  BrushOutlined,
  ChangeHistoryOutlined,
  CloseOutlined,
  ColorizeOutlined,
  Create,
  FlashOn,
  GestureOutlined,
  QueryBuilderOutlined,
  RadioButtonUncheckedOutlined,
  StopOutlined,
} from '@material-ui/icons';
import styled, { css, keyframes } from 'styled-components';

export default ({ isMainMode, setMainMode }) => {
  const hideToolBarAnimation = keyframes`
  from {
    transform: translate(0,0);
  }

  to {
    transform: translate(-40px,0);
  }
`;

  const showToolBarAnimation = keyframes`
  from {
    transform: translate(0,100px);
  }

  to {
    transform: translate(0,0);
  }
`;

  const ApolloDrawToolBar = styled(ButtonGroup)`
    position: absolute;
    left: 20px;
    bottom: 20px;
    height: 50px;
    border-color: gray;
    border-style: outset;
    border-width: thin;
    ${isMainMode != 'draw'
      ? css`
          visibility: hidden;
        `
      : css`
          animation: ${showToolBarAnimation} 1s ease-in forwards;
        `};
    transition: visibility 1s ease-in forwards;
  `;
  //
  //   const [toolBarVisibility, setVisibleToolbar] = useState('visible');

  //   const showToolBar = () => {
  //     setVisibleToolbar('visible');
  //   };

  //   const hideToolBar = () => {
  //     setMainMode(false);
  //   };

  return (
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
          setMainMode('main');
        }}
      >
        <CloseOutlined />
      </IconButton>
    </ApolloDrawToolBar>
  );
};
