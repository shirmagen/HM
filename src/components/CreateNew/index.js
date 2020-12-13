import React from 'react';
import { IconButton } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import styled from 'styled-components';

const HMCreateButton = styled(IconButton)`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export default () => (
  <HMCreateButton>
    <IconButton>
      <AddCircle />
    </IconButton>
  </HMCreateButton>
);
