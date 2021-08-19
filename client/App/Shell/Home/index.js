import React from 'react';
import {Map} from '../../components/Map';
import {VerticalToolBar} from '../../components/VerticalToolBar';
import {CreateButton} from '../../components/CreateNew/CreateNewButton';
import {AppBar} from '../../components/AppBar';
import { Row } from 'mui-flex-layout';

export const Home = () =>
  (
    <Row width={'100%'} height={'100%'}>
      <AppBar/>
      <Map/>
      <VerticalToolBar/>
      <CreateButton/>
    </Row>
  );
