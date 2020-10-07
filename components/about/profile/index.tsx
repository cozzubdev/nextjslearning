import { ReactElement } from 'react';

import Grid from '@material-ui/core/Grid';

import { ContactInfo } from 'components/about/contact/contact-info';

import { SocialIcons } from './social';
import { Bubble } from './bubble';

import {
  Container,
  StyledProfile,
  ProfilePhoto,
  ProfileInfo,
  ProfileTitle,
  ProfileTitleStart,
  ProfilePosition,
  ProfileSocial,
} from './style';

import { ProfileProps } from './type';

export const Profile = ({ basics }: ProfileProps): ReactElement => {
  const { image, name, label } = basics;
  return (
    <Container>
      <Grid item direction='column' spacing={0} container>
        <StyledProfile item container spacing={0}>
          <Grid item lg={5} xs={12}>
            <ProfilePhoto src={image} alt='Durachok' />
          </Grid>
          <Grid item xs={1} />
          <Grid item lg={6} xs={12} container spacing={0} direction='column'>
            <ProfileInfo item>
              <div>
                <Bubble content='Hello' />
              </div>
              <ProfileTitle>
                <ProfileTitleStart>I&apos;m</ProfileTitleStart> {name}
              </ProfileTitle>
              <ProfilePosition>{label}</ProfilePosition>
            </ProfileInfo>
            <ContactInfo basics={basics} />
          </Grid>
        </StyledProfile>
        <ProfileSocial item container spacing={0}>
          <SocialIcons color='white' />
        </ProfileSocial>
      </Grid>
    </Container>
  );
};
