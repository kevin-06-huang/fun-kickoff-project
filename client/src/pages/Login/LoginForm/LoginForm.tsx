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
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      email: string;
      password: string;
    }>,
  ) => void;
}

export default function Login({ handleSubmit }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
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
          <FormControl id="password" fullWidth={true} margin="dense">
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
              placeholder="Your password"
              onChange={handleChange}
            />
            <FormHelperText>{touched.email ? errors.email : ''}</FormHelperText>
          </FormControl>
          <Box textAlign="center" marginTop={5}>
            <Button type="submit" size="large" variant="contained" color="secondary" className={classes.submit}>
              {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Login'}
            </Button>
          </Box>
          <Box height={95} />
        </form>
      )}
    </Formik>
  );
}
