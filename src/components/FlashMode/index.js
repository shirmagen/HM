import React from 'react';
import Tabs from '../Tabs';
import Mode from '../Mode';
import styled, { css, keyframes } from 'styled-components';

export default ({ currentMode }) => {
  const showAnimation = keyframes`
    from {
      transform: translate(0,100px);
    }
  
    to {
      transform: translate(0,0);
    }
  `;

  const FlashTabs = styled.div`
    position: absolute;
    height: 100vh;
    ${currentMode == 'flash' ? css` background: white;` : ``};
    z-index: 2;
  `;

  const props = { currentMode, modeName: 'flash', showAnimation };

  return (
      <FlashTabs>
    <Mode {...props}>
      <Tabs />
    </Mode>
    </FlashTabs>
  );
};
