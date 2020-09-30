import { ReactElement, useCallback, useEffect, useMemo } from 'react';
import NextLink from 'next/link';
import Router from 'next/router';

import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import { string, object } from 'yup';

import { useLoginsStatus } from 'store/app/select';
import { useStyles } from 'hooks/useStyles';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { FirstName } from 'components/registration/fields/first-name';
import { LastName } from 'components/registration/fields/last-name';
import { Email } from 'components/registration/fields/email';
import { Password } from 'components/registration/fields/password';

import { signUp } from 'services/registration';

import { parseCookies } from 'nookies';

import { StoreContext } from 'store/type';
import { RegistrationValues, RegistrationFields } from './type';

export const Registration = (): ReactElement => {
  const classes = useStyles();
  const loginStatus = useLoginsStatus();

  const initialValues: RegistrationValues = useMemo(
    () => ({
      [RegistrationFields.FIRST_NAME]: '',
      [RegistrationFields.LAST_NAME]: '',
      [RegistrationFields.EMAIL]: '',
      [RegistrationFields.PASSWORD]: '',
    }),
    []
  );

  const registrationSchema = useMemo(
    () =>
      object().shape({
        [RegistrationFields.FIRST_NAME]: string().required(
          'This field is required!'
        ),
        [RegistrationFields.LAST_NAME]: string().required(
          'This field is required!'
        ),
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
    async (
      values: RegistrationValues,
      helpers: FormikHelpers<RegistrationValues>
    ) => {
      try {
        const user = await signUp(values);
      } catch (error) {
        helpers.setErrors(error.errors);
      } finally {
        helpers.setSubmitting(false);
      }
    },
    []
  );

  useEffect(() => {
    if (loginStatus) Router.push('/', '/');
  }, [loginStatus]);

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
          {({ values }: FormikProps<RegistrationValues>): ReactElement => {
            return (
              <Form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <FirstName />
                  <LastName />
                  <Email />
                  <Password />
                </Grid>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  color='primary'
                  className={classes.submit}>
                  Sign Up
                </Button>
                <Grid container justify='flex-end'>
                  <Grid item>
                    <NextLink href='/login' as='/login'>
                      <Link variant='body2'>
                        Already have an account? Sign in
                      </Link>
                    </NextLink>
                  </Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Container>
  );
};

Registration.getInitialProps = async (
  ctx: StoreContext
): Promise<Record<string, unknown>> => {
  const { res } = ctx;
  const { token } = parseCookies(ctx);
  console.info(token);
  if (token) {
    if (typeof window === 'undefined' && res) {
      res.writeHead(302, {
        Location: `/`,
        'Content-Type': 'text/html; charset=utf-8',
      });
      res.end();

      return {};
    }
    await Router.replace('/', `/`);
  }

  return {};
};
