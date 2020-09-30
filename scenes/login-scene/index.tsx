import { ReactElement, useCallback, useMemo } from 'react';
import Router from 'next/router';

import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import { string, object } from 'yup';

import { useStyles } from 'hooks/useStyles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { FirstName } from 'components/registration/fields/first-name';
import { LastName } from 'components/registration/fields/last-name';

import { signIn } from 'services/registration';

import { LoginValues } from './type';
import { RegistrationFields } from '../registration-scene/type';

export const Login = (): ReactElement => {
  const classes = useStyles();

  const initialValues: LoginValues = useMemo(
    () => ({
      [RegistrationFields.EMAIL]: '',
      [RegistrationFields.PASSWORD]: '',
    }),
    []
  );

  const registrationSchema = useMemo(
    () =>
      object().shape({
        [RegistrationFields.EMAIL]: string().required(
          'This field is required!'
        ),
        [RegistrationFields.PASSWORD]: string().required(
          'This field is required!'
        ),
      }),
    []
  );

  const onSubmit = useCallback(
    (values: LoginValues, helpers: FormikHelpers<LoginValues>) => {
      try {
        signIn(values);
      } catch (error) {
        helpers.setErrors(error.errors);
      } finally {
        helpers.setSubmitting(false);
        Router.replace('/home', '/home');
      }
    },
    []
  );

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <Formik
          onSubmit={onSubmit}
          validationSchema={registrationSchema}
          initialValues={initialValues}>
          {({ values }: FormikProps<LoginValues>): ReactElement => {
            return (
              <Form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <FirstName />
                  <LastName />
                </Grid>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  color='primary'
                  className={classes.submit}>
                  Log In
                </Button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Container>
  );
};
