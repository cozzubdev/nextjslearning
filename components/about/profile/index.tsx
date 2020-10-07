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

export const Profile = (): ReactElement => {
  return (
    <Container>
      <Grid item direction='column' spacing={0} container>
        <StyledProfile item container spacing={0}>
          <Grid item lg={5} xs={12}>
            <ProfilePhoto src='assets/avatar.jpg' alt='Durachok' />
          </Grid>
          <Grid item xs={1} />
          <Grid item lg={6} xs={12} container spacing={0} direction='column'>
            <ProfileInfo item>
              <div>
                <Bubble content='Hello' />
              </div>
              <ProfileTitle>
                <ProfileTitleStart>I&apos;m</ProfileTitleStart> Kozubov Mykola
              </ProfileTitle>
              <ProfilePosition>Front-End Developer</ProfilePosition>
            </ProfileInfo>
            <ContactInfo />
          </Grid>
        </StyledProfile>
        <ProfileSocial item container spacing={0}>
          <SocialIcons color='white' />
        </ProfileSocial>
      </Grid>
    </Container>
  );
};
