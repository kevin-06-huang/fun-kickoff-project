import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    minHeight: '100vh',
    paddingTop: 23,
  },
  container: {
    fontSize: 26,
    paddingBottom: 50,
    color: '#000000',
    fontWeight: 700,
    textAlign: 'center',
  },
}));

export default useStyles;
