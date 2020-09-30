import { ReactElement } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Field, FieldProps } from 'formik';

export const Email = (): ReactElement => {
  return (
    <Grid item xs={12}>
      <Field name='email'>
        {({
          field,
          meta: { touched, error },
        }: FieldProps<string>): ReactElement => (
          <TextField
            variant='outlined'
            required
            fullWidth
            id='email'
            label='Email Address'
            autoComplete='email'
            {...field}
            helperText={touched && error}
          />
        )}
      </Field>
    </Grid>
  );
};
