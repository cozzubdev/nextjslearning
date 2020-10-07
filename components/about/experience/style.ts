import styled from 'styled-components';
import { Media } from 'config/medias';

import Grid from '@material-ui/core/Grid';

export const Heading = styled.h2`
  display: block;
  margin: auto;
`;

export const WorkContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media ${Media.md} {
    flex-direction: row;
  }
`;
