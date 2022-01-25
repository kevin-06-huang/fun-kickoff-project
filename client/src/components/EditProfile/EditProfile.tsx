import React from 'react';
import { facts } from '../../mocks/mockFacts';
import useStyles from './useStyles';
import { Grid, Typography } from '@mui/material';
import { RandomFactCard } from '../FactCard/RandomFactCard';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import { User } from '../../interface/User';
import Avatar from '@mui/material/Avatar';

import { Formik, FormikHelpers } from 'formik';

/*
  first name, last name, gender, birth date, email address, phone number,where you live, describe yourself
*/

interface Props {
  loggedInUser: User;
  handleSubmit: (
    {
      email,
    }: {
      email: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      email: string;
    }>,
  ) => void;
}

const EditProfile: React.FC<Props> = ({ loggedInUser, handleSubmit }) => {
  const classes = useStyles();
  function makeid() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
  return (
    <>
      <Grid xs={12} className={classes.welcome}>
        <Typography variant="h4" component="h1">
          Welcome to profile edit!
        </Typography>
      </Grid>
      {[...Array(30)].map((id) => (
        <Avatar key={id} alt="Profile Image" src={`https://robohash.org/${makeid()}.png`} />
      ))}
    </>
  );
};

export { EditProfile };
