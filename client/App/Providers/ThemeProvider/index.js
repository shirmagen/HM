import React, { useContext, createContext } from 'react';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import initialState from './initial.theme';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

const ThemeContext = createContext(initialState);

export default props => {
  const theme = createTheme(initialState);
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

  const { children } = props;

  return (
    <ThemeContext.Provider
      value={{
        theme
      }}
      {...props}
    >
      <StylesProvider jss={jss}>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
