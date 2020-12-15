import React, {useState} from 'react';
import { IconButton, ButtonGroup } from '@material-ui/core';
import { Create, FlashOn, QueryBuilderOutlined } from '@material-ui/icons';
import styled, { css, keyframes } from 'styled-components';

export default ({isMainMode, setMainMode}) => {

  const hideToolBarAnimation = keyframes`
  from {
    transform: translate(0,0);
  }

  to {
    transform: translate(-40px,0);
  }
`;
  const ApolloVerticalToolBar = styled(ButtonGroup)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    animation: ${isMainMode == false ? css`${hideToolBarAnimation} 1s ease-in forwards` : ``};
    `;

  const [toolBarVisibility, setVisibleToolbar] = useState('visible');

  const showToolBar = () => {
    setVisibleToolbar('visible');
  };

  const hideToolBar = () => {
    setMainMode(false);
  };

  return (
    <ApolloVerticalToolBar orientation="vertical" color="primary">
      <IconButton onClick={hideToolBar}>
        <Create />
      </IconButton>
      <IconButton>
        <FlashOn />
      </IconButton>
      <IconButton>
        <QueryBuilderOutlined />
      </IconButton>
    </ApolloVerticalToolBar>
  );
};
