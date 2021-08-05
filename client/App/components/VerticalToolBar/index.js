import React, { useState } from 'react';
import { IconButton, ButtonGroup } from '@material-ui/core';
import { Create, FlashOn, QueryBuilderOutlined, SupervisorAccount } from '@material-ui/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import FlashMenu from './FlashMenu';
import Row from '../../Layout/Row'

const ApolloVerticalToolBar = styled(ButtonGroup)`
   
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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const openMenu = ({currentTarget}) => {
    setAnchorEl(currentTarget);
  };

  const closeMenu = () =>{
    setAnchorEl(null)
  }

  const { push } = useHistory();

  const goToRoute = (path) =>{
    push(path)
  }

  return (
    <>
      <ApolloVerticalToolBar orientation="vertical" color="primary">
        <IconButton onClick={() => {goToRoute('/draw')}}>
          <Create />
        </IconButton>
        <IconButton onClick={openMenu}>
           <FlashOn />
        </IconButton>
        <FlashMenu anchorEl={anchorEl} open={open} onClose={closeMenu} />
        <IconButton>
          <QueryBuilderOutlined />
        </IconButton>
        <IconButton>
          <SupervisorAccount onClick={()=>{goToRoute('/users')}}/>
        </IconButton>
      </ApolloVerticalToolBar>
    </>
  );
};
