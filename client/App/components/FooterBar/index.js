import React from 'react';
import { ApolloToolBarButton } from '../ToolBarButton';
import { footerBarOptions } from './footerBarOptions';
import { Row } from 'mui-flex-layout';
import styled from 'styled-components';
import { Box } from '@material-ui/core';

const FooterBarDivider = styled(Box)`
  width: 30px;
  height: 2px;
  background-color: black;
  align-self: center;
`;

const FooterBarRow = styled(Row)`
  height: 15%;
  width: 95%;
  justify-content: space-evenly;
  align-self: flex-end;
`;

export const ApolloFooterBar = () => {
  const renderOptions = () =>
    footerBarOptions.map(({ ...props }) => (
      <ApolloToolBarButton {...props} color={'primary'} />
    ));

  return <FooterBarRow>{renderOptions()}</FooterBarRow>;
};
