import React from 'react';
import Tabs from '../Tabs';
import styled from 'styled-components';

export default () => {
  // const showAnimation = keyframes`
  //   from {
  //     transform: translate(0,100px);
  //   }

  //   to {
  //     transform: translate(0,0);
  //   }
  // `;

  const FlashTabs = styled.div`
    position: absolute;
    height: 100vh;
    background: white;
    z-index: 2;
  `;

  return (
    <FlashTabs>
      <Tabs />
    </FlashTabs>
  );
};
