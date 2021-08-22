import { deepOrange } from '@material-ui/core/colors';
import lightTheme from './light.theme';
import { Theme, ThemeOptions } from '@material-ui/core';

export const { 500: ERROR_MAIN } = deepOrange;
export const INITIAL_PALETTE_TYPE = 'light';

export default <ThemeOptions>{
  direction: 'rtl',
  ...lightTheme,
  typography: {
    fontFamily: "'Open Sans', Roboto, sans-serif",
    button: {
      textTransform: 'none'
    }
  }
};
