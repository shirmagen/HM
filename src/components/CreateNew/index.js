import React from 'react';
import { IconButton } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import styled, { keyframes } from 'styled-components';

// const hideAnimation = keyframes`
//   from {
//     transform: translate(0,0);
//   }

//   to {
//     transform: translate(0,100px);
//   }
// `;

// const showAnimation = keyframes`
//   from {
//     transform: translate(0,100px);
//   }

//   to {
//     transform: translate(0,0);
//   }
// `;

export default ({ currentMode, onClick }) => {
  const ApolloCreateButton = styled(IconButton)`
    position: absolute;
    left: 0;
    bottom: 0;
  `;

  return (
    <ApolloCreateButton>
      <IconButton onClick={onClick} color="primary">
        <AddCircle />
      </IconButton>
    </ApolloCreateButton>
  );
};
