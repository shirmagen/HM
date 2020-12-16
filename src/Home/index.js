import React, { useState } from 'react';
import Map from '../components/Map';
import VerticalToolBar from '../components/VerticalToolBar';
import CreateButton from '../components/CreateNew';
import ApolloAppBar from '../components/AppBar';
import DrawToolBar from '../components/DrawToolBar';
import { Row } from 'mui-flex-layout';
import FlashMode from '../components/FlashMode';

export default () => {
  const [currentMode, setMode] = useState('main');
  
  const props = {currentMode, setMode};
  
  return (
    <Row width={'100%'} height={'100%'}>
      <ApolloAppBar {...props}/>
        <Map />
      <VerticalToolBar {...props}/>
      <CreateButton {...props}/>
      <DrawToolBar {...props}/>
      <FlashMode {...props}/>
    </Row>
  );
};
