import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  sidebarMenu: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#ffffff',
    position: 'relative',
    top: 0,
    transition: '0.6s',
    paddingLeft: '20%',
    paddingTop: '15%',
  },
  menuItems: {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    width: '100%',
    paddingBottom: '5%',
  },
  menuItemLinks: {
    '&:hover': {
      color: '#000000',
    },
  },
}));

export default useStyles;
