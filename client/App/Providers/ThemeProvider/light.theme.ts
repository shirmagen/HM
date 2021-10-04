import { blue } from '@mui/material/colors';

const { A100: LIGHT_SECONDARY_MAIN } = blue;
const LIGHT_BACKGROUND = '#fafafa';

export default {
  palette: {
    mode: 'light',
    primary: {
      main: '#1648ff'
    },
    secondary: {
      main: LIGHT_SECONDARY_MAIN
    }
  },
  background: {
    default: LIGHT_BACKGROUND
  }
};
