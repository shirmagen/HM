import React, { FC, useState } from 'react';
import { IconButton, ButtonGroup } from '@mui/material';
import { Create, FlashOn, QueryBuilderOutlined, SupervisorAccount } from '@mui/icons-material';
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
  const [anchorEl, setAnchorEl] = useState<HTMLElement>({} as HTMLElement);
  const open = !!anchorEl;

  const openMenu = (currentTarget: HTMLElement) => {
    setAnchorEl(currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl({} as HTMLElement);
  };

  const { push } = useHistory();

  const goToRoute = (path: string) => {
    push(path);
  };

  return <>
    <ApolloVerticalToolBar orientation="vertical" color="primary">
      <IconButton
        onClick={() => {
          goToRoute('/draw');
        }}
        size="large">
        <Create/>
      </IconButton>
      <IconButton onClick={({currentTarget}) => openMenu(currentTarget)} size="large">
        <FlashOn/>
      </IconButton>
      <FlashMenu anchorEl={anchorEl} open={open} onClose={closeMenu}/>
      <IconButton size="large">
        <QueryBuilderOutlined/>
      </IconButton>
      <IconButton size="large">
        <SupervisorAccount
          onClick={() => {
            goToRoute('/users');
          }}
        />
      </IconButton>
    </ApolloVerticalToolBar>
  </>;
};
