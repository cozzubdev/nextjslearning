import { ReactElement } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Field, FieldProps } from 'formik';

export const FirstName = (): ReactElement => {
  return (
    <Grid item xs={12} sm={6}>
      <Field name='firstName'>
        {({
          field,
          meta: { touched, error },
        }: FieldProps<string>): ReactElement => (
          <TextField
            autoComplete='fname'
            variant='outlined'
            required
            fullWidth
            id='firstName'
            label='First Name'
            autoFocus
            {...field}
            helperText={touched && error}
          />
        )}
      </Field>
    </Grid>
  );
};
