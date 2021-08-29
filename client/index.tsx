import React from 'react';
import { render } from 'react-dom';
import { Router } from './routes';
import '../styles.css';

const rootComponentRender = () =>
  render(
    <Router/>,
    document.querySelector('#root')
  );

rootComponentRender();
