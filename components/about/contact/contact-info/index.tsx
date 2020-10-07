import { ReactElement } from 'react';

import Grid from '@material-ui/core/Grid';

import {
  ProfileListItem,
  ProfileListItemValue,
  ProfileValueAItemValue,
} from './style';

export const ContactInfo = (): ReactElement => {
  return (
    <Grid container item spacing={1} direction='column'>
      <Grid container item direction='row' justify='space-evenly' spacing={3}>
        <ProfileListItem item xs={12} md={3}>
          Address:
        </ProfileListItem>
        <ProfileListItemValue item xs={12} md={9}>
          Kharkiv, Ukraine
        </ProfileListItemValue>
      </Grid>
      <Grid container item direction='row' justify='center' spacing={3}>
        <ProfileListItem item xs={12} md={3}>
          Email:
        </ProfileListItem>
        <ProfileListItemValue item xs={12} md={9}>
          <ProfileValueAItemValue href='mailto:cozzub@gmail.com'>
            cozzub@gmail.com
          </ProfileValueAItemValue>
        </ProfileListItemValue>
      </Grid>
      <Grid container item justify='center' direction='row' spacing={3}>
        <ProfileListItem item xs={12} md={3}>
          Phone:
        </ProfileListItem>
        <ProfileListItemValue item xs={12} md={9}>
          <ProfileValueAItemValue href='tel:+380996672171'>
            +380996672171
          </ProfileValueAItemValue>
        </ProfileListItemValue>
      </Grid>
    </Grid>
  );
};
