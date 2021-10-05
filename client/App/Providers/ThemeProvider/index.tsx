import React, { useContext, createContext, FC } from 'react';
import { ThemeProvider } from 'styled-components';
import initialState from './initial.theme';
import { createTheme } from '@mui/material';

const theme = createTheme(initialState);
const ThemeContext = createContext(theme);

export const ApolloThemeProvider: FC = ({ children }) => {


  return (
    <ThemeContext.Provider value={theme}>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
