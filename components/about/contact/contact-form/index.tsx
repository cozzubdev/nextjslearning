import { ReactElement, useCallback, useMemo } from 'react';

import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import { string, object } from 'yup';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { useContactFormStyles } from 'hooks/useStyles';

import { sendMail } from 'services/mail/send';

import { Name } from 'components/about/contact/contact-form/fields/name';
import { Message } from 'components/about/contact/contact-form/fields/message';
import { Subject } from 'components/about/contact/contact-form/fields/subject';
import { Email } from 'components/registration/fields/email';

import { ContactFormFields, ContactFormValues } from './type';

export const ContactForm = (): ReactElement => {
  const classes = useContactFormStyles();

  const onSubmit = useCallback(
    async (
      values: ContactFormValues,
      helpers: FormikHelpers<ContactFormValues>
    ) => {
      try {
        const response = await sendMail(values);
      } catch (error) {
        helpers.setErrors(error.errors);
      } finally {
        helpers.setSubmitting(false);
      }
    },
    []
  );

  const initialValues: ContactFormValues = useMemo(
    () => ({
      [ContactFormFields.NAME]: '',
      [ContactFormFields.EMAIL]: '',
      [ContactFormFields.SUBJECT]: '',
      [ContactFormFields.MESSAGE]: '',
    }),
    []
  );

  const registrationSchema = useMemo(
    () =>
      object().shape({
        [ContactFormFields.NAME]: string().required('This field is required!'),
        [ContactFormFields.EMAIL]: string().required('This field is required!'),
        [ContactFormFields.SUBJECT]: string().required(
          'This field is required!'
        ),
        [ContactFormFields.MESSAGE]: string().required(
          'This field is required!'
        ),
      }),
    []
  );
  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={registrationSchema}
      initialValues={initialValues}>
      {({ values }: FormikProps<ContactFormValues>) => {
        return (
          <Paper className={classes.container}>
            <Form>
              <Grid container direction='column' spacing={0} justify='center'>
                <h2 className={classes.heading}>Feel free to contact me</h2>
                <Name />
                <Email />
                <Subject />
                <Message />
                <div>
                  <Button
                    variant='contained'
                    color='primary'
                    type='submit'
                    className={classes.button}>
                    SEND
                  </Button>
                </div>
              </Grid>
            </Form>
          </Paper>
        );
      }}
    </Formik>
  );
};
