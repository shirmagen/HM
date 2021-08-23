import React from 'react';
import { Map } from '../../components/Map';
import { VerticalToolBar } from '../../components/VerticalToolBar';
import { Column, Row } from 'mui-flex-layout';
import { ApolloFooterBar } from '../../components/FooterBar';

export const Home = () => (
  <Column>
    <Row width={'100%'} height={'100%'}>
      <Map />
      <VerticalToolBar />
    </Row>
    <ApolloFooterBar />
  </Column>
);
