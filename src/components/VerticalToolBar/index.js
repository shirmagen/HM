import React, { useState } from 'react';
import { IconButton, ButtonGroup } from '@material-ui/core';
import { Create, FlashOn, QueryBuilderOutlined } from '@material-ui/icons';
import Mode from '../Mode';
import styled, { css, keyframes } from 'styled-components';

export default ({ currentMode, setMode }) => {
  const hideAnimation = keyframes`
  from {
    transform: translate(0,0);
  }

  to {
    transform: translate(-40px,0);
  }
`;

  const showAnimation = keyframes`
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
  `;

  const props = {currentMode, modeName: 'main', showAnimation, hideAnimation};

  return (
    <Mode {...props}>
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
    </Mode>
  );
};
