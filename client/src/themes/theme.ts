import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: '"Arial", "Roboto"',
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
    h3: {
      fontWeight: 'bold',
    },
    body1: {
      fontWeight: 'bold',
    },
  },
  palette: {
    primary: { main: '#ffffff' },
    secondary: { main: '#f14140' },
    info: { main: '#bbbbbb' },
  },
  shape: {
    borderRadius: 5,
  },
  spacing: 6,
});
