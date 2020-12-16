import React from 'react';
import styled, { css } from 'styled-components';

export default ({currentMode, showAnimation, hideAnimation, modeName, transition,children}) => { 
    const Mode = styled.div`
    ${currentMode == modeName
      ? css`
      animation: ${showAnimation} 1s ease-in forwards;
    `
      : hideAnimation};
    transition: ${transition};
    fill: blue;
  `;

  return (
      <Mode>
          {children}
      </Mode>
  )
};
