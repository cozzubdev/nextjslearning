import React, { ReactElement, useCallback, useMemo } from 'react';
import Router from 'next/router';
import { Form, Formik, FormikHelpers } from 'formik';
import { string, object } from 'yup';
import { Container } from 'components/layout/container';
import { GridRow } from 'components/layout/grid';
import { Email } from 'components/registration/email';
import { EmailField } from 'components/registration/email/type';
import { PasswordField } from 'components/registration/password/type';
import { Password } from 'components/registration/password';
import { RegistrationValues } from './type';
import { SubmitButton, SubmitButtonWrapper } from './style';

export const Registration = (): ReactElement => {
  const initialValues: RegistrationValues = useMemo(
    () => ({ [EmailField.EMAIL]: '', [PasswordField.PASSWORD]: '' }),
    []
  );

  const registrationSchema = useMemo(
    () =>
      object().shape({
        [EmailField.EMAIL]: string().required('This field is required!'),
        [PasswordField.PASSWORD]: string().required('This field is required!'),
      }),
    []
  );

  const onSubmit = useCallback(
    (
      values: RegistrationValues,
      helpers: FormikHelpers<RegistrationValues>
    ) => {
      try {
        Object.keys(values).forEach((key) =>
          localStorage.setItem(key, values[key])
        );
      } catch (error) {
        helpers.setErrors(error.errors);
      } finally {
        helpers.setSubmitting(false);
        Router.replace('/about', '/about');
      }
    },
    []
  );
  return (
    <Container>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={registrationSchema}>
        {({
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
        }): ReactElement => {
          return (
            <Form>
              <GridRow>
                <Email
                  errors={errors}
                  touched={touched}
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <Password
                  errors={errors}
                  touched={touched}
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
              </GridRow>
              <SubmitButtonWrapper>
                <SubmitButton type='submit'>Submit</SubmitButton>
              </SubmitButtonWrapper>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};
