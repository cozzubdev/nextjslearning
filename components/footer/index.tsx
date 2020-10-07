import { ReactElement } from 'react';

import { useStyles } from 'hooks/useStyles';

import Typography from '@material-ui/core/Typography';

import { Copyright } from 'components/registration/copyright';

export const Footer = (): ReactElement => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant='h6' align='center' gutterBottom>
        Mykola`s Site
      </Typography>
      <Typography
        variant='subtitle1'
        align='center'
        color='textSecondary'
        component='p'>
        Done with love.
      </Typography>
      <Copyright />
    </footer>
  );
};
