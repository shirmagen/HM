import React from 'react';
import { Row } from 'mui-flex-layout';
import { Search } from '@material-ui/icons';
import {SearchBox} from './SearchBox';
import styled from 'styled-components';

const ApolloSearchIcon = styled(Search)`
  position: absolute;
  padding-top: 15px;
  paddinig-right: 5px;
  margin: 8px;
`;

export const SearchBar = () =>
  (
    <Row width={'100%'}>
      <SearchBox/>
      <ApolloSearchIcon/>
    </Row>
  );
