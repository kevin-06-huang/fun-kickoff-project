import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import { CircularProgress, Typography, Grid } from '@mui/material';
import { Navbar } from '../../components/Navbar/Navbar';
import { RandomFacts } from '../../components/RandomFacts/RandomFacts';
import useStyles from './useStyles';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { SidebarData } from '../../components/Sidebar/SidebarData';
import Paper from '@mui/material/Paper';
import { EditProfile } from '../../components/EditProfile/EditProfile';

export default function Dashboard(): JSX.Element {
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();
  const history = useHistory();
  const [currentComponent, setView] = useState('RandomFacts');

  useEffect(() => {
    initSocket();
  }, [initSocket]);

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }
  const renderSwitch = (param: string) => {
    switch (param) {
      case 'EditProfile':
        return <EditProfile loggedInUser={loggedInUser} />;
      default:
        return <RandomFacts />;
    }
  };

  return (
    <>
      <Navbar />
      <Grid container>
        <Grid sx={{ padding: 5 }} container rowSpacing={5} columnSpacing={2}>
          <Grid item xs={3}>
            <Sidebar setView={setView} />
          </Grid>
          <Grid container xs={7} component={Paper} className={classes.container}>
            {renderSwitch(currentComponent)}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
