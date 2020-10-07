import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import { Media } from 'config/medias';

export const Heading = styled.h2`
  display: block;
  margin: auto;
`;

export const WorkContainer = styled(Grid)`
  width: 100%;

  @media ${Media.sm} {
    width: auto;
  }
`;
