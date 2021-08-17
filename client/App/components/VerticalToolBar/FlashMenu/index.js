import React from 'react';
import { Menu,MenuItem } from '@material-ui/core';
import styled from 'styled-components';
import { useHistory } from 'react-router';

export const FlashMenu = ({open,anchorEl,onClose}) => {

  const ApolloFlashMenu = styled(Menu)`
    opacity:0.8;
  `;

  const { push } = useHistory();
  const menuOptions = ['create','update','delete'];
  
  const goToFlashOption =(option) => {
      push(`/flash/${option}`)
  };
  
  const renderOptions = () =>
                        menuOptions.map(option=>
                        <MenuItem onClick={()=>goToFlashOption(`${option}`)}>
                            {option}
                        </MenuItem>
                        )
  return (
    <ApolloFlashMenu open={open}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          anchorEl={anchorEl}
          onClose={onClose}>
        {renderOptions()}
    </ApolloFlashMenu>  
  );
};

