import React, {useState} from "react";
import Map from '../components/Map';
import Drawer from '../components/Drawer';
import Tabs from '../components/Tabs';
import SearchBar from '../components/SearchBar';
import {Row, Column} from 'mui-flex-layout';
import {Toolbar, AppBar, IconButton, ButtonGroup, Button, TextField} from '@material-ui/core';
import {Menu, Create, FlashOn, QueryBuilderOutlined, AddCircle} from '@material-ui/icons';
import Autocomplete from '@material-ui/lab/Autocomplete';
import styled from 'styled-components';

const ShirsHamburger = styled(IconButton)`
  color: grey;
  width: 50px;
  height: 50px;
`;

const HMVerticalToolBar = styled(ButtonGroup)`
  position:absolute;
  top:0;
  left:0;
  bottom:0;
`;

const HMCreateButton = styled(IconButton)`
  position:absolute;
  right:0;
  bottom:0;
`;

export default () => {
  const [openedDrawer, setOpenedDrawer] = useState(false);

  const openDrawer = () => {
    setOpenedDrawer(true);
  }

  const closeDrawer = () => {
    setOpenedDrawer(false);
  }

  return (
    <Row width={'100%'} height={'100%'}>
    <ShirsHamburger onClick={openDrawer}><Menu/></ShirsHamburger>
      <Column>
       <SearchBar/>
        <Map/>
      </Column>
      <Drawer onClose={closeDrawer} opened={openedDrawer} />
      <HMVerticalToolBar
        orientation="vertical"
        color="primary">
        <IconButton><Create/></IconButton>
        <IconButton><FlashOn/></IconButton>
        <IconButton><QueryBuilderOutlined/></IconButton>
      </HMVerticalToolBar>
      <HMCreateButton><IconButton><AddCircle/></IconButton></HMCreateButton>
      </Row>
  );
};
