import React from 'react';
import { IconButton } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import styled, { css, keyframes } from 'styled-components';

const hideCreationAnimation = keyframes`
  from {
    transform: translate(0,0);
  }

  to {
    transform: translate(0,100px);
  }
`;

export default ({ isMainMode }) => {
  const ApolloCreateButton = styled(IconButton)`
    position: absolute;
    right: 0;
    bottom: 0;
    animation: ${isMainMode == false
      ? css`
          ${hideCreationAnimation} 1s ease-in forwards
        `
      : ``};
  `;

  return (
    <ApolloCreateButton>
      <IconButton color="primary">
        <AddCircle />
      </IconButton>
    </ApolloCreateButton>
  );
};
