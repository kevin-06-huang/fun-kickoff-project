import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
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
    marginTop: 50,
    marginBottom: 50,
    color: '#000000',
    fontWeight: 700,
    alignItems: 'center',
    textAlign: 'center',
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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  label: {
    fontSize: 19,
    color: 'rgb(0,0,0,1)',
  },
  inputs: {
    height: '3.5rem',
    padding: '5px',
  },
  forgot: {
    paddingRight: 10,
    color: '#3a8dff',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    fontSize: 16,
    backgroundColor: '#3a8dff',
    fontWeight: 'bold',
  },
}));

export default useStyles;
