import React from "react";
import Image from '../../../assets/map.jpg';
import InnerImageZoom from 'react-inner-image-zoom';
import styled from 'styled-components';

const ApolloInnerImageZoom = styled(InnerImageZoom)`
.iiz {
  margin: 0;
  position: relative;
  overflow: hidden;
  display: inline-block;
  cursor: zoom-in;
}

.iiz--drag .iiz__zoom-img--visible {
  cursor: grab;
}

.iiz__img {
  max-width: 100%;
  height: auto;
  display: block;
  pointer-events: none;
  visibility: visible;
  opacity: 1;
}

.iiz__img--invisible {
  visibility: hidden;
  opacity: 0;
}

.iiz__zoom-img {
  width: auto !important;
  max-width: none !important;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  display: block;
}

.iiz__zoom-img--visible {
  visibility: visible;
  opacity: 1;
  cursor: zoom-out;
}

.iiz__zoom-portal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.iiz__btn {
  background: rgba(255, 255, 255, 0.8);
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  padding: 0;
  position: absolute;
  text-decoration: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-appearance: none;
  appearance: none;
}

.iiz__btn:before {
  content: " ";
  background-position: center;
  background-repeat: no-repeat;
  display: block;
}

.iiz__hint {
  bottom: 10px;
  right: 10px;
  pointer-events: none;
}

.iiz__hint:before {
  content: " ";
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.9 19.9'%3E%3Cpath d='M13.9 7.4C13.9 3.8 11 .9 7.4.9S.9 3.8.9 7.4s2.9 6.5 6.5 6.5 6.5-2.9 6.5-6.5zm5.3 12.5l-6.7-7.2c-1.4 1.3-3.2 2.1-5.1 2.1-4.1 0-7.4-3.3-7.4-7.4S3.3 0 7.4 0s7.4 3.3 7.4 7.4c0 1.7-.6 3.4-1.7 4.7l6.8 7.2-.7.6z' fill='%23000222'/%3E%3C/svg%3E");
  width: 20px;
  height: 20px;
}

.iiz__close {
  top: 10px;
  right: 10px;
  visibility: hidden;
  opacity: 0;
}

.iiz__close--visible {
  visibility: visible;
  opacity: 1;
}

.iiz__close::before {
  content: " ";
  width: 29px;
  height: 29px;
  background-image: linear-gradient(#222, #222), linear-gradient(#222, #222);
  background-size: 100% 1px, 1px 100%;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
`;
export default () => (
  <ApolloInnerImageZoom src={Image} zoomSrc={Image} />
)