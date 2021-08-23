import React from 'react';
import { IconButton, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';
import { Column } from 'mui-flex-layout';
import styled from 'styled-components';

const ToolBarLabel = styled(Typography)`
  text-align: center;
  font-size: 12px;
`;

const ToolBarIconButton = styled(IconButton)`
  padding: 0 !important;
`;

const baseIconsProps = {
  fontSize: 'large',
};

export const ApolloToolBarButton = ({ url, Icon, message = '', ...otherProps }) => {
  const { push } = useHistory();

  const handleClick = () => {
    push(url);
  };

  return (
    <Column>
      <ToolBarIconButton onClick={handleClick} {...otherProps}>
        <Icon {...baseIconsProps} />
      </ToolBarIconButton>
      <ToolBarLabel>{message}</ToolBarLabel>
    </Column>
  );
};
