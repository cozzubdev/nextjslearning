import styled from 'styled-components';
import { Media } from 'config/medias';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export const Container = styled(Paper)`
  @media ${Media.sm} {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const StyledProfile = styled(Grid)`
  padding: 57px 50px 15px 50px;
  margin-bottom: 10px;
  @media ${Media.sm} {
    padding: 30px 20px 15px 20px;
  }
  @media ${Media.md} {
    padding: 30px 20px 15px 20px;
  }
  @media ${Media.lg} {
    padding: 50px 40px 15px 40px;
  } ;
`;

export const ProfilePhoto = styled.img`
  max-width: 100%;
`;

export const ProfileInfo = styled(Grid)`
  color: '#3d4451';
  padding-bottom: 25px;
  margin-bottom: 25px;
  border-bottom: 1px solid #dedede;
  @media ${Media.md} {
    border-bottom: 0px;
  } ;
`;

export const ProfileTitle = styled.h1`
  font-size: 32px;
  line-height: 1.1;
  font-weight: 700;
  margin-bottom: 5px;

  @media ${Media.md} {
    font-size: 20px;
  } ;
`;

export const ProfileTitleStart = styled.span`
  font-weight: 200;
`;

export const ProfilePosition = styled.h2`
  font-size: 18px;

  font-weight: 400;
  line-height: 1.1;
  margin-bottom: 0;
  @media ${Media.md} {
    font-size: 16px;
  } ;
`;

export const ProfileSocial = styled(Grid)`
  background-color: rgb(59, 75, 149);
`;
