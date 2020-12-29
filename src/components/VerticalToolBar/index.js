import React, { useContext, useState } from 'react';
import { IconButton, ButtonGroup } from '@material-ui/core';
import { Create, FlashOn, QueryBuilderOutlined } from '@material-ui/icons';
import Mode from '../Mode';
import styled, { css, keyframes } from 'styled-components';
import { useHistory } from 'react-router';
import { HomeContext } from '../../Home/HomeContext';

export default () => {
  const { currentMode, setMode } = useContext(HomeContext);
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

  console.log(`vertical currentMode ${currentMode}`);
  const props = { currentMode, modeName: 'main', showAnimation, hideAnimation };
  let history = useHistory();

  const handleClick = () => {
    history.push('/draw');
  };

  return (
    <Mode {...props}>
      <ApolloVerticalToolBar orientation="vertical" color="primary">
        <IconButton
          onClick={() => {
            setMode('draw');
            handleClick();
          }}
        >
          <Create />
        </IconButton>{' '}
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
