import { ReactElement } from 'react';

import Grid from '@material-ui/core/Grid';

import { useContactInfoStyles } from 'hooks/useStyles';

export const ContactInfo = (): ReactElement => {
  const classes = useContactInfoStyles();
  return (
    <Grid container item spacing={10} direction='column'>
      <Grid container item direction='row' justify='space-evenly' spacing={9}>
        <Grid className={classes.profileListItem} item xs={12} md={3}>
          Address:
        </Grid>
        <Grid className={classes.profileListItemValue} item xs={12} md={9}>
          Kharkiv, Ukraine
        </Grid>
      </Grid>
      <Grid container item direction='row' justify='center' spacing={10}>
        <Grid className={classes.profileListItem} item xs={12} md={3}>
          Email:
        </Grid>
        <Grid className={classes.profileListItemValue} item xs={12} md={9}>
          <a
            className={classes.profileValueAItemValue}
            href='mailto:cozzub@gmail.com'>
            cozzub@gmail.com
          </a>
        </Grid>
      </Grid>
      <Grid container item justify='center' direction='row' spacing={10}>
        <Grid className={classes.profileListItem} item xs={12} md={3}>
          Phone:
        </Grid>
        <Grid className={classes.profileListItemValue} item xs={12} md={9}>
          <a
            className={classes.profileValueAItemValue}
            href='tel:+380996672171'>
            +380996672171
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
};
