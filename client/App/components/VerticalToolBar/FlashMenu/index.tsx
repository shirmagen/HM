import React from 'react';
import { Menu,MenuItem } from '@material-ui/core';
import styled from 'styled-components';
import { useHistory } from 'react-router';

type FlashMenuProps = {
  open: boolean,
  anchorEl: HTMLElement,
  onClose: () => void;
}

export const FlashMenu = ({open,anchorEl,onClose}: FlashMenuProps) => {

  const ApolloFlashMenu = styled(Menu)`
    opacity:0.8;
  `;

  const { push } = useHistory();
  const menuOptions = ['create','update','delete'];
  
  const goToFlashOption = (option: string) => {
      push(`/flash/${option}`)
  };
  
  const renderOptions = () =>
                        menuOptions.map(option=>
                        <MenuItem onClick={()=>goToFlashOption(`${option}`)}>
                            {option}
                        </MenuItem>
                        );
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

