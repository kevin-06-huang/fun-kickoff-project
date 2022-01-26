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
  },
  container: {
    fontSize: 26,
    marginTop: 50,
    marginBottom: 50,
    color: '#000000',
    fontWeight: 700,
    alignItems: 'center',
    textAlign: 'left',
  },
  welcome: {
    fontSize: 26,
    minHeight: '10%',
    paddingTop: 50,
    paddingBottom: 50,
    color: '#000000',
    fontWeight: 700,
    textAlign: 'center',
  },
}));

export default useStyles;
