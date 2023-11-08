import { createTheme } from '@mui/material/styles';
import defaultTheme from './defaultTheme';

const createCustomTheme = (
  theme = {
    ...defaultTheme,
  },
) => createTheme({
  ...theme,
});

export default createCustomTheme;
