import React, { useState } from 'react';
import { Row } from 'mui-flex-layout';
import { IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import {SearchBar} from '../SearchBar/SearchBar';
import {ApolloDrawer} from '../Drawer';
import styled from 'styled-components';

const ApolloMenu = styled(IconButton)`
  width: 50px;
  height: 50px;
`;

const ApolloAppBar = styled(Row)`
color: grey;
position: absolute;
width: 250px;
height: 50px;
background: white;
z-index: 1;
`;

export const AppBar = () => {
  const [openedDrawer, setOpenedDrawer] = useState(false);

  const openDrawer = () => {
    setOpenedDrawer(true);
  };

  const closeDrawer = () => {
    setOpenedDrawer(false);
  };

  return (
    <ApolloAppBar>
      <ApolloMenu onClick={openDrawer}>
        <Menu />
      </ApolloMenu>
      <SearchBar />
      <ApolloDrawer onClose={closeDrawer} opened={openedDrawer} />
    </ApolloAppBar>
  );
};
