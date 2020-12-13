import React, { useState } from 'react';
import { Row } from 'mui-flex-layout';
import { IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import SearchBar from '../../components/SearchBar';
import Drawer from '../../components/Drawer';

import styled from 'styled-components';

const ApolloAppBar = styled(Row)`
  color: grey;
  position: absolute;
  width: 300px;
  height: 50px;
`;

const ApolloMenu = styled(IconButton)`
  width: 50px;
  height: 50px;
`;

export default () => {
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
      <Drawer onClose={closeDrawer} opened={openedDrawer} />
    </ApolloAppBar>
  );
};
