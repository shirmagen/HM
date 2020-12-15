import React, { useEffect, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Row } from 'mui-flex-layout';
import { Search } from '@material-ui/icons';
import SearchBox from './SearchBox';
import styled from 'styled-components';

const HMSearchIcon = styled(Search)`
   padding-top: 15px;
   paddinig-right: 5px;
   margin: 8px;
`;

export default () => {
  return (
    <Row width={'100%'}>
      <SearchBox/>
        <HMSearchIcon />
    </Row>
  );
};