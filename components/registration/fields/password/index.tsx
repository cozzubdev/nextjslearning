import React, { ReactElement } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Field, FieldProps } from 'formik';

export const Password = (): ReactElement => {
  return (
    <Grid item xs={12}>
      <Field name='password'>
        {({
          field,
          meta: { touched, error },
        }: FieldProps<string>): ReactElement => (
          <TextField
            variant='outlined'
            required
            fullWidth
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            {...field}
            helperText={touched && error}
          />
        )}
      </Field>
    </Grid>
  );
};
