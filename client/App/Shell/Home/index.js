import React from 'react';
import Map from '../../components/Map';
import VerticalToolBar from '../../components/VerticalToolBar';
import CreateButton from '../../components/CreateNew/CreateNewButton';
import ApolloAppBar from '../../components/AppBar';
import { Row } from 'mui-flex-layout';

export default () => {
  return (
    <Row width={'100%'} height={'100%'}>
      <ApolloAppBar />
      <Map />
      <VerticalToolBar />
      <CreateButton />
    </Row>
  );
};
