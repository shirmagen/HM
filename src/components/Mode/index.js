import React from 'react';
import styled, { css } from 'styled-components';

export default ({currentMode, showAnimation, hideAnimation, modeName, children}) => { 
    const Mode = styled.div`
    ${currentMode == modeName
      ? css`animation: ${showAnimation} 1s ease-in forwards;`
      : 
        (hideAnimation ? 
        css`animation: ${hideAnimation} 1s ease-in forwards` :
        css`visibility: hidden`)};
  `;

  return (
      <Mode>
          {children}
      </Mode>
  )
};
