import React, {useState} from "react";
import Map from '../components/Map';
import Drawer from '../components/Drawer';
import Tabs from '../components/Tabs';
import {Row, Column} from 'mui-flex-layout';
import {Toolbar, AppBar, IconButton} from '@material-ui/core';
import {Menu} from '@material-ui/icons';

export default () => {
  const [openedDrawer, setOpenedDrawer] = useState(false);

  const openDrawer = () => {
    setOpenedDrawer(true);
  }

  const closeDrawer = () => {
    setOpenedDrawer(false);
  }

  return (
    <Column width={'100%'} height={'100%'}>
    <AppBar position={'static'} color={'primary'}>
    <Toolbar variant={'dense'}>
      <IconButton onClick={openDrawer}><Menu/></IconButton>
      {'My Toolbar'}
      </Toolbar>
      </AppBar>
      <Tabs/>
      <Map/>
      <Drawer onClose={closeDrawer} opened={openedDrawer} />
      </Column>
  );
};
