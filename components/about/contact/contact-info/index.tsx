import { ReactElement } from 'react';

import Grid from '@material-ui/core/Grid';

import {
  ProfileListItem,
  ProfileListItemValue,
  ProfileValueAItemValue,
} from './style';

import { ContactInfoProps } from './type';

export const ContactInfo = ({ basics }: ContactInfoProps): ReactElement => {
  const { email, location, phone } = basics;
  const { city, region, address } = location;
  return (
    <Grid container item spacing={1} direction='column'>
      <Grid container item direction='row' justify='space-evenly' spacing={3}>
        <ProfileListItem item xs={12} md={3}>
          Address:
        </ProfileListItem>
        <ProfileListItemValue item xs={12} md={9}>
          {city}, {region}, {address}
        </ProfileListItemValue>
      </Grid>
      <Grid container item direction='row' justify='center' spacing={3}>
        <ProfileListItem item xs={12} md={3}>
          Email:
        </ProfileListItem>
        <ProfileListItemValue item xs={12} md={9}>
          <ProfileValueAItemValue href='mailto:cozzub@gmail.com'>
            {email}
          </ProfileValueAItemValue>
        </ProfileListItemValue>
      </Grid>
      <Grid container item justify='center' direction='row' spacing={3}>
        <ProfileListItem item xs={12} md={3}>
          Phone:
        </ProfileListItem>
        <ProfileListItemValue item xs={12} md={9}>
          <ProfileValueAItemValue href='tel:+380996672171'>
            +{phone}
          </ProfileValueAItemValue>
        </ProfileListItemValue>
      </Grid>
    </Grid>
  );
};
