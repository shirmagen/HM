import React from 'react';
import { IconButton } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import Mode from '../Mode';
import styled, { keyframes } from 'styled-components';

const hideAnimation = keyframes`
  from {
    transform: translate(0,0);
  }

  to {
    transform: translate(0,100px);
  }
`;

const showAnimation = keyframes`
  from {
    transform: translate(0,100px);
  }

  to {
    transform: translate(0,0);
  }
`;

export default ({ currentMode }) => {
  const props = { currentMode, modeName:'main', showAnimation, hideAnimation };
  const ApolloCreateButton = styled(IconButton)`
    position: absolute;
    left: 0;
    bottom: 0;
  `;

  return (
    <Mode {...props}>
      <ApolloCreateButton>
        <IconButton color="primary">
          <AddCircle />
        </IconButton>
      </ApolloCreateButton>
    </Mode>
  );
};
