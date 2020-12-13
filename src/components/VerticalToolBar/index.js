import React from 'react';
import { IconButton, ButtonGroup } from '@material-ui/core';
import { Create, FlashOn, QueryBuilderOutlined } from '@material-ui/icons';
import styled from 'styled-components';

export default () => {
  const ApolloVerticalToolBar = styled(ButtonGroup)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  `;

  return (
    <ApolloVerticalToolBar orientation="vertical" color="primary">
      <IconButton>
        <Create />
      </IconButton>
      <IconButton>
        <FlashOn />
      </IconButton>
      <IconButton>
        <QueryBuilderOutlined />
      </IconButton>
    </ApolloVerticalToolBar>
  );
};
