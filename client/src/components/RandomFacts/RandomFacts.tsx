import React from 'react';
import { facts } from '../../mocks/mockFacts';
import useStyles from './useStyles';
import { Grid, Typography } from '@mui/material';
import { RandomFactCard } from '../FactCard/RandomFactCard';

const RandomFacts: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Grid xs={12} className={classes.welcome}>
        <Typography variant="h4" component="h1">
          Welcome to random facts!
        </Typography>
      </Grid>
      {facts.map(({ id, fact, coverUrl: cover }) => (
        <Grid
          item
          key={id}
          xs={3.5}
          sx={{
            margin: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <RandomFactCard fact={fact} cover={cover} />
        </Grid>
      ))}
    </>
  );
};

export { RandomFacts };
