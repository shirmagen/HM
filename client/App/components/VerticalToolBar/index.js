import React from 'react';
import { IconButton, ButtonGroup } from '@material-ui/core';
import { Create, FlashOn, QueryBuilderOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const ApolloVerticalToolBar = styled(ButtonGroup)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  `;

export default () => {
  //   const hideAnimation = keyframes`
  //   from {
  //     transform: translate(0,0);
  //   }

  //   to {
  //     transform: translate(-40px,0);
  //   }
  // `;

  //   const showAnimation = keyframes`
  //   from {
  //     transform: translate(-40px,0);
  //   }

  //   to {
  //     transform: translate(0,0);
  //   }
  // `;

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
