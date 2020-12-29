import React, { useState } from 'react';
import { Row } from 'mui-flex-layout';
import { IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import SearchBar from '../SearchBar';
import Drawer from '../Drawer';
import Mode from '../Mode';
import styled, { keyframes } from 'styled-components';

const hideAnimation = keyframes`
  from {
    transform: translate(0,0);
  }

  to {
    transform: translate(300px,0);
  }
`;

const showAnimation = keyframes`
from {
  transform: translate(300px,0);
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
    width: 250px;
    height: 50px;
    background: white;
    z-index: 1;
  `;

  const props = { currentMode, modeName: 'main', hideAnimation, showAnimation };

  return (
    <Mode {...props}>
      <ApolloAppBar>
        <ApolloMenu onClick={openDrawer}>
          <Menu />
        </ApolloMenu>
        <SearchBar />
        <Drawer onClose={closeDrawer} opened={openedDrawer} />
      </ApolloAppBar>
    </Mode>
  );
};
