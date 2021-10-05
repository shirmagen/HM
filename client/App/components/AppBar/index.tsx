import React, { useState } from 'react';
import { Grid, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import {SearchBar} from '../SearchBar/SearchBar';
import {ApolloDrawer} from '../Drawer';
import styled from 'styled-components';

const ApolloMenu = styled(IconButton)`
  width: 50px;
  height: 50px;
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
    <Grid>
      <ApolloMenu onClick={openDrawer}>
        <Menu />
      </ApolloMenu>
      <SearchBar />
      <ApolloDrawer onClose={closeDrawer} opened={openedDrawer} />
    </Grid>
  );
};
