import React, { useContext, createContext, FC } from 'react';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import initialState from './initial.theme';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

const theme = createTheme(initialState);
const ThemeContext = createContext(theme);

export const ApolloThemeProvider: FC = ({ children }) => {
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

  return (
    <ThemeContext.Provider value={theme}>
      <StylesProvider jss={jss}>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
