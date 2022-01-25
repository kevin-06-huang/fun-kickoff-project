import React from 'react';
import { facts } from '../../mocks/mockFacts';
import useStyles from './useStyles';
import { Grid, Typography } from '@mui/material';
import { RandomFactCard } from '../FactCard/RandomFactCard';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import { User } from '../../interface/User';
import Avatar from '@mui/material/Avatar';

import { Formik, FormikHelpers } from 'formik';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import * as Yup from 'yup';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

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
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().required('Email is required').email('Email is not valid'),
        })}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <FormControl id="email" fullWidth={true} margin="dense">
              <FormLabel>
                <Typography className={classes.label}>EMAIL ADDRESS</Typography>
              </FormLabel>
              <OutlinedInput
                className={classes.inputs}
                name="email"
                autoComplete="email"
                autoFocus={true}
                error={touched.email && Boolean(errors.email)}
                value={values.email}
                placeholder="Your email"
                onChange={handleChange}
              />
              <FormHelperText>{touched.email ? errors.email : ''}</FormHelperText>
            </FormControl>
            <Box textAlign="center" marginTop={5}>
              <Button type="submit" size="large" variant="contained" color="secondary" className={classes.submit}>
                {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Save'}
              </Button>
            </Box>
            <Box height={95} />
          </form>
        )}
      </Formik>
    </>
  );
};

export { EditProfile };
