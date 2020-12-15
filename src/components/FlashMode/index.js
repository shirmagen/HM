import { Grid, Slider,Button } from '@material-ui/core';
import { Row } from 'mui-flex-layout';
import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

export default ({ isMainMode, setMainMode }) => {
  const [value, setValue] = useState(30);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ApolloFlashGrid = styled(Grid)`
    position: absolute;
    left: 100px;
    bottom: 100px;
    height: 50px;
    ${isMainMode != 'flash'
      ? css`
          visibility: hidden;
        `
      : css`
        //   animation: ${showToolBarAnimation} 1s ease-in forwards;
        visibility: visible;
        `};
    transition: visibility 1s ease-in forwards;
  `;

  const showToolBarAnimation = keyframes`
    from {
      transform: translate(0,100px);
    }
  
    to {
      transform: translate(0,0);
    }
  `;

  return (
      <Row>
    <ApolloFlashGrid item xs>
      <Slider value={value} onChange={handleChange} />
      <Button variant="contained" color="secondary">flash</Button>
    </ApolloFlashGrid>
    </Row>
    
  );
};
