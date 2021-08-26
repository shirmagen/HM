import React, { useState } from 'react';
import { AppBar, Grid, Toolbar } from '@material-ui/core';
import styled from 'styled-components';

const ApolloToolbar = styled(Toolbar)`
background-color: white;
color: black;
`;

export const NavBar = () => {
  return (
    <AppBar>
      <ApolloToolbar>
        צהריים טובים נגה
      </ApolloToolbar>
    </AppBar>
  )
};
