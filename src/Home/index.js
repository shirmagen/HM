import React from 'react';
import Map from '../components/Map';
import Drawer from '../components/Drawer';
import SearchBar from '../components/SearchBar';
import VerticalToolBar from '../components/VerticalToolBar';
import CreateButton from '../components/CreateNew';
import ApolloAppBar from '../components/AppBar';
import { Row, Column } from 'mui-flex-layout';
import { IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import styled from 'styled-components';

export default () => {
  return (
    <Row width={'100%'} height={'100%'}>
      <ApolloAppBar/>
        <Map />
      <VerticalToolBar />
      <CreateButton />
    </Row>
  );
};
