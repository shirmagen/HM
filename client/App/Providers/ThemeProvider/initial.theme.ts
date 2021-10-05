import lightTheme from './light.theme';
import { createTheme } from '@mui/material';

export const INITIAL_PALETTE_TYPE = 'light';

export default createTheme({
  direction: 'rtl',
  ...lightTheme,
  typography: {
    fontFamily: "'Open Sans', Roboto, sans-serif",
    button: {
      textTransform: 'none'
    }
  }
});
