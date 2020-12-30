import React, { createContext, useState } from 'react';
import Map from '../components/Map';
import VerticalToolBar from '../components/VerticalToolBar';
import CreateButton from '../components/CreateNew';
import ApolloAppBar from '../components/AppBar';
import DrawToolBar from '../components/DrawToolBar';
import { Row } from 'mui-flex-layout';
import FlashMode from '../components/FlashMode';
import HomeContext from './HomeContext';

export default () => {
  return (
    // <HomeContext>
    <Row width={'100%'} height={'100%'}>
      {/* <ApolloAppBar /> */}
      <Map />
      <VerticalToolBar />
      <CreateButton />
      {/* <FlashMode /> */}
    </Row>
    // </HomeContext>
  );
};
