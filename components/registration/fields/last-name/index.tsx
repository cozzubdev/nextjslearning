import React, { ReactElement } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Field, FieldProps } from 'formik';

export const LastName = (): ReactElement => {
  return (
    <Grid item xs={12} sm={6}>
      <Field name='lastName'>
        {({
          field,
          meta: { touched, error },
        }: FieldProps<string>): ReactElement => (
          <TextField
            variant='outlined'
            required
            fullWidth
            id='lastName'
            label='Last Name'
            autoComplete='lname'
            {...field}
            helperText={touched && error}
          />
        )}
      </Field>
    </Grid>
  );
};
