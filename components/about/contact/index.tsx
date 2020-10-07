import { ReactElement } from 'react';

import Grid from '@material-ui/core/Grid';

import { useContactStyles } from 'hooks/useStyles';

import { ContactForm } from './contact-form';
import { Map } from './map';

export const Contact = (): ReactElement => {
  const classes = useContactStyles();
  return (
    <Grid
      alignItems='center'
      direction='column'
      container
      className={classes.container}
      spacing={0}>
      <h2>Contact Me</h2>
      <Grid
        container
        direction='row'
        alignItems='stretch'
        justify='space-between'
        spacing={0}>
        <Grid item lg={6} xs={12} className={classes.itemContainer}>
          <ContactForm />
        </Grid>
        <Grid item lg={6} xs={12} className={classes.itemContainer}>
          <Map />
        </Grid>
      </Grid>
    </Grid>
  );
};
