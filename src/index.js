import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import Router from './routes';
import '../styles.css';

const rootComponentRender = () =>
  render(
    // <App>
    <AppContainer>
      <Router />
    </AppContainer>,
    // </App>,
    document.querySelector('#root')
  );

rootComponentRender();

module.hot.accept();
