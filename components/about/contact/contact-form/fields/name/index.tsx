import { ReactElement } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { Field, FieldProps } from 'formik';

import { ContactFormFields } from '../../type';

export const Name = (): ReactElement => {
  return (
    <Grid item xs={12}>
      <Field name={ContactFormFields.NAME}>
        {({
          field,
          meta: { touched, error },
        }: FieldProps<string>): ReactElement => (
          <TextField
            required
            fullWidth
            id={ContactFormFields.NAME}
            label='Name'
            autoComplete={ContactFormFields.NAME}
            {...field}
            helperText={touched && error}
          />
        )}
      </Field>
    </Grid>
  );
};
