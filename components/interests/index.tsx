import React, { ReactElement } from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { useStyles } from 'hooks/useStyles';

import { Interest } from './interest-item';
import { InterestListProps } from './type';

export const InterestList = ({ data }: InterestListProps): ReactElement => {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth='xl'>
      <Grid container spacing={4}>
        {data?.map((interest) => (
          <Interest key={interest?.id} data={interest} />
        ))}
      </Grid>
    </Container>
  );
};
