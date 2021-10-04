import lightTheme from './light.theme';
import { ThemeOptions } from '@mui/material';

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
