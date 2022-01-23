import React, { useEffect } from 'react';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import { CircularProgress, Typography, Grid } from '@mui/material';
import { Navbar } from '../../components/Navbar/Navbar';
import { RandomFactCard } from '../../components/FactCard/RandomFactCard';
import { facts } from '../../mocks/mockFacts';
import useStyles from './useStyles';
import { Sidebar } from '../../components/Sidebar/Sidebar';

export default function Dashboard(): JSX.Element {
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();
  const history = useHistory();

  useEffect(() => {
    initSocket();
  }, [initSocket]);

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }

  return (
    <>
      <Navbar />
      <Grid container>
        <Grid sx={{ padding: 5 }} container rowSpacing={5} columnSpacing={2}>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
          <Grid container xs={8} className={classes.container}>
            <Grid xs={12} className={classes.welcome}>
              <Typography variant="h4" component="h1">
                Welcome to random facts!
              </Typography>
            </Grid>
            {facts.map(({ id, fact, coverUrl: cover }) => (
              <Grid item key={id} xs={4} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                <RandomFactCard fact={fact} cover={cover} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
