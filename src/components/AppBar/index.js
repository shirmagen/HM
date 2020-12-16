import React, { useState } from 'react';
import { Row } from 'mui-flex-layout';
import { IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import SearchBar from '../SearchBar';
import Drawer from '../Drawer';
import CreateNew from '../CreateNew'
import styled, { css, keyframes } from 'styled-components';

const hideAppBarAnimation = keyframes`
  from {
    transform: translate(0,0);
  }

  to {
    transform: translate(110%,0);
  }
`;

const showToolBarAnimation = keyframes`
from {
  transform: translate(110%,0);
}

to {
  transform: translate(0,0);
}
`;

const ApolloMenu = styled(IconButton)`
  width: 50px;
  height: 50px;
`;

export default ({ currentMode }) => {
  const [openedDrawer, setOpenedDrawer] = useState(false);

  const openDrawer = () => {
    setOpenedDrawer(true);
  };

  const closeDrawer = () => {
    setOpenedDrawer(false);
  };

  const ApolloAppBar = styled(Row)`
    color: grey;
    position: absolute;
    width: 30%;
    height: 50px;
    background: white;
    z-index: 1;
    animation: ${currentMode != 'main'
      ? css`
          ${hideAppBarAnimation} 1s ease-in forwards
        `
      : css`${showToolBarAnimation} 1s ease-in forwards`};
  `;

  return (
    <ApolloAppBar>
      <ApolloMenu onClick={openDrawer}>
        <Menu />
      </ApolloMenu>
      <SearchBar />
      <Drawer onClose={closeDrawer} opened={openedDrawer} />
    </ApolloAppBar>
  );
};
