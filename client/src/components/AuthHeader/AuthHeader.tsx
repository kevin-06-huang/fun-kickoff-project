import Button from '@mui/material/Button';
import { AppBar, Toolbar, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';

interface Props {
  linkTo: string;
  asideText: string;
  btnText: string;
}

const AuthFooter = ({ linkTo, asideText, btnText }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          p={1}
          display="flex"
          justifyContent="flex-end"
          alignSelf="flex-end"
          marginRight={5}
          flexGrow={1}
          className={classes.authHeader}
        >
          <Button component={Link} to={linkTo} color="inherit" className={classes.accBtn} variant="contained">
            {btnText}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AuthFooter;
