import React from 'react';
import styled from "styled-components";

const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default (props) => (
  props.show ? <Backdrop onClick={props.clicked}/> : null
);