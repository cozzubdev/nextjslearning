import { ReactElement } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { Field, FieldProps } from 'formik';

import { ContactFormFields } from '../../type';

export const Subject = (): ReactElement => {
  return (
    <Grid item xs={12}>
      <Field name={ContactFormFields.SUBJECT}>
        {({
          field,
          meta: { touched, error },
        }: FieldProps<string>): ReactElement => (
          <TextField
            required
            fullWidth
            id={ContactFormFields.SUBJECT}
            label='Subject'
            autoComplete={ContactFormFields.SUBJECT}
            {...field}
            helperText={touched && error}
          />
        )}
      </Field>
    </Grid>
  );
};
