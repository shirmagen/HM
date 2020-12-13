import React, { useState } from 'react';
import Map from '../components/Map';
import Drawer from '../components/Drawer';
import Tabs from '../components/Tabs';
import SearchBar from '../components/SearchBar';
import HMVerticalToolBar from '../components/VerticalToolBar';
import HMCreateButton from '../components/CreateNew';
import { Row, Column } from 'mui-flex-layout';
import { Toolbar, AppBar, IconButton, ButtonGroup, Button, TextField } from '@material-ui/core';
import { Menu, Create, FlashOn, QueryBuilderOutlined, AddCircle } from '@material-ui/icons';
import Autocomplete from '@material-ui/lab/Autocomplete';
import styled from 'styled-components';

const ShirsHamburger = styled(IconButton)`
  color: grey;
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
    <Row width={'100%'} height={'100%'}>
      <ShirsHamburger onClick={openDrawer}>
        <Menu />
      </ShirsHamburger>
      <Drawer onClose={closeDrawer} opened={openedDrawer} />
      <Column>
        <SearchBar />
        <Map />
      </Column>
      <HMVerticalToolBar />
      <HMCreateButton/>
    </Row>
  );
};
