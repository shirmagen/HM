import React, { useState } from 'react';
import { IconButton, ButtonGroup } from '@material-ui/core';
import { Create, FlashOn, QueryBuilderOutlined } from '@material-ui/icons';
import styled, { css, keyframes } from 'styled-components';

export default ({ currentMode, setMode }) => {
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
    transform: translate(-40px,0);
  }

  to {
    transform: translate(0,0);
  }
`;
  const ApolloVerticalToolBar = styled(ButtonGroup)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    animation: ${currentMode != 'main'
      ? css`
          ${hideToolBarAnimation} 1s ease-in forwards
        `
      : css`
          ${showToolBarAnimation} 1s ease-in forwards
        `};
  `;

  return (
    <ApolloVerticalToolBar orientation="vertical" color="primary">
      <IconButton onClick={() => setMode('draw')}>
        <Create />
      </IconButton>
      <IconButton onClick={() => setMode('flash')}>
        <FlashOn />
      </IconButton>
      <IconButton>
        <QueryBuilderOutlined />
      </IconButton>
    </ApolloVerticalToolBar>
  );
};
