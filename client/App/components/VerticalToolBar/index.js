import React, { useState } from 'react';
import { IconButton, ButtonGroup } from '@material-ui/core';
import { Create, FlashOn, QueryBuilderOutlined, SupervisorAccount } from '@material-ui/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import {FlashMenu} from './FlashMenu';

const ApolloVerticalToolBar = styled(ButtonGroup)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  `;

export const VerticalToolBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = !!anchorEl;

  const openMenu = ({ currentTarget }) => {
    setAnchorEl(currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const { push } = useHistory();

  const goToRoute = (path) => {
    push(path);
  };

  return (
    <>
      <ApolloVerticalToolBar orientation="vertical" color="primary">
        <IconButton
          onClick={() => {
            goToRoute('/draw');
          }}
        >
          <Create/>
        </IconButton>
        <IconButton onClick={openMenu}>
          <FlashOn/>
        </IconButton>
        <FlashMenu anchorEl={anchorEl} open={open} onClose={closeMenu}/>
        <IconButton>
          <QueryBuilderOutlined/>
        </IconButton>
        <IconButton>
          <SupervisorAccount
            onClick={() => {
              goToRoute('/users');
            }}
          />
        </IconButton>
      </ApolloVerticalToolBar>
    </>
  );
};
