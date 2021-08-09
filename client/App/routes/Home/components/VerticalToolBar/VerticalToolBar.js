import React from 'react';
import { IconButton, ButtonGroup } from '@material-ui/core';
import { Create, FlashOn, QueryBuilderOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router';

export default () => {
  const ApolloVerticalToolBar = styled(ButtonGroup)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  `;

  const { push } = useHistory();

  const goToDrawMode = () => {
    push('/draw');
  };

  const goToFlashMode = () => {
    push('/flash');
  };

  return (
    <ApolloVerticalToolBar orientation="vertical" color="primary">
      <IconButton
        onClick={() => {
          goToDrawMode();
        }}
      >
        <Create />
      </IconButton>
      <IconButton onClick={() => goToFlashMode()}>
        <FlashOn />
      </IconButton>
      <IconButton>
        <QueryBuilderOutlined />
      </IconButton>
    </ApolloVerticalToolBar>
  );
};
