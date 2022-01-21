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
      name,
      password,
    }: {
      email: string;
      password: string;
      name: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      email: string;
      password: string;
      name: string;
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
        name: '',
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Name is required'),
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
              error={touched.email && Boolean(errors.email)}
              value={values.email}
              placeholder="Your email"
              onChange={handleChange}
            />
            <FormHelperText>{touched.email ? errors.email : ''}</FormHelperText>
          </FormControl>
          <FormControl id="name" fullWidth={true} margin="dense">
            <FormLabel>
              <Typography className={classes.label}>NAME</Typography>
            </FormLabel>
            <OutlinedInput
              className={classes.inputs}
              name="name"
              autoComplete="name"
              autoFocus={true}
              error={touched.name && Boolean(errors.name)}
              value={values.name}
              placeholder="Your name"
              onChange={handleChange}
            />
            <FormHelperText>{touched.name ? errors.name : ''}</FormHelperText>
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
