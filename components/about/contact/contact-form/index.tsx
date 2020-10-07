import { ReactElement, useCallback, useMemo } from 'react';

import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import { string, object } from 'yup';

import Grid from '@material-ui/core/Grid';

import { sendMail } from 'services/mail/send';

import { Name } from 'components/about/contact/contact-form/fields/name';
import { Message } from 'components/about/contact/contact-form/fields/message';
import { Subject } from 'components/about/contact/contact-form/fields/subject';
import { Email } from 'components/registration/fields/email';

import { Container, SubmitButton, Heading } from './style';
import { ContactFormFields, ContactFormValues } from './type';

export const ContactForm = (): ReactElement => {
  const onSubmit = useCallback(
    async (
      values: ContactFormValues,
      helpers: FormikHelpers<ContactFormValues>
    ) => {
      try {
        const response = await sendMail(values);
        console.log(response);
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
          <Container>
            <Form>
              <Grid container direction='column' spacing={2} justify='center'>
                <Heading>Feel free to contact me</Heading>
                <Name />
                <Email />
                <Subject />
                <Message />
                <div>
                  <SubmitButton
                    variant='contained'
                    color='primary'
                    type='submit'>
                    SEND
                  </SubmitButton>
                </div>
              </Grid>
            </Form>
          </Container>
        );
      }}
    </Formik>
  );
};
