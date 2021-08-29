import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import {Router} from './routes';
import '../styles.css';

const rootComponentRender = () =>
  render(
    <AppContainer>
      <Router />
    </AppContainer>,
    document.querySelector('#root')
  );

rootComponentRender();

if (module.hot)
{
  module.hot.accept();
}
