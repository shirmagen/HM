import React from 'react';
import { Row } from 'mui-flex-layout';
import { Search } from '@material-ui/icons';
import SearchBox from './SearchBox/SearchBox';
import styled from 'styled-components';

const ApolloSearchIcon = styled(Search)`
  position: absolute;
  padding-top: 15px;
  paddinig-right: 5px;
  margin: 8px;
`;

export default () => {
  return (
    <Row width={'100%'}>
      <SearchBox />
      <ApolloSearchIcon />
    </Row>
  );
};
