import React from 'react';
import { IconButton } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const ApolloCreateButton = styled(IconButton)`
    position: absolute;
    left: 0;
    bottom: 0;
  `;

export const CreateButton = () => {

  const { push } = useHistory();
  const goToCreateNew = () => push('/create-new-song');

  return (
    <ApolloCreateButton color="primary" onClick={() => goToCreateNew()}>
      <AddCircle />
    </ApolloCreateButton>
  );
};
