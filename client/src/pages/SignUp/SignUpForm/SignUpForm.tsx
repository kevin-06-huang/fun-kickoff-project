import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import useStyles from './useStyles';

interface Props {
  handleSubmit: (
    {
      username,
      email,
      password,
    }: {
      email: string;
      password: string;
      username: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      email: string;
      password: string;
      username: string;
    }>,
  ) => void;
}

const SignUpForm = ({ handleSubmit }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        username: '',
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required('Username is required').max(40, 'Username is too long'),
        email: Yup.string().required('Email is required').email('Email is not valid'),
        password: Yup.string()
          .required('Password is required')
          .max(100, 'Password is too long')
          .min(6, 'Password too short'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <FormControl id="email" fullWidth={true} margin="normal">
            <FormLabel>
              <Typography className={classes.label}>EMAIL ADDRESS</Typography>
            </FormLabel>
            <OutlinedInput
              className={classes.inputs}
              name="email"
              autoComplete="email"
              error={touched.email && Boolean(errors.email)}
              value={values.email}
              placeholder="Your email"
              onChange={handleChange}
            />
            <FormHelperText>{touched.email ? errors.email : ''}</FormHelperText>
          </FormControl>
          <FormControl id="username" fullWidth={true} margin="normal">
            <FormLabel>
              <Typography className={classes.label}>USERNAME</Typography>
            </FormLabel>
            <OutlinedInput
              className={classes.inputs}
              name="username"
              autoComplete="username"
              autoFocus={true}
              error={touched.username && Boolean(errors.username)}
              value={values.username}
              placeholder="Your username"
              onChange={handleChange}
            />
            <FormHelperText>{touched.username ? errors.username : ''}</FormHelperText>
          </FormControl>
          <FormControl id="password" fullWidth={true} margin="normal">
            <FormLabel>
              <Typography className={classes.label}>PASSWORD</Typography>
            </FormLabel>
            <OutlinedInput
              className={classes.inputs}
              name="password"
              autoComplete="current-password"
              type="password"
              error={touched.password && Boolean(errors.password)}
              value={values.password}
              placeholder="Create a password"
              onChange={handleChange}
            />
            <FormHelperText>{touched.password ? errors.password : ''}</FormHelperText>
          </FormControl>

          <Box textAlign="center" marginTop={5}>
            <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
              {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'SIGN UP'}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default SignUpForm;
