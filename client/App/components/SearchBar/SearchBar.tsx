import React from 'react';
import { Search } from '@mui/icons-material';
import {SearchBox} from './SearchBox/SearchBar';
import styled from 'styled-components';
import { Grid } from '@mui/material';

const ApolloSearchIcon = styled(Search)`
  position: absolute;
  padding-top: 15px;
  paddinig-right: 5px;
  margin: 8px;
`;

export const SearchBar = () =>
  (
    <Grid>
      <SearchBox/>
      <ApolloSearchIcon/>
    </Grid>
  );
