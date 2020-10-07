import styled from 'styled-components';
import { Media } from 'config/medias';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export const Container = styled(Paper)`
  margin: 0;
  flex-grow: 1;
  height: '100%';

  @media ${Media.md} {
    margin-top: 20px;
  }
`;

export const ContactContainer = styled(Grid)`
  padding: 15px 30px;
`;

export const GridContainer = styled(Grid)`
  height: '100%';
`;

export const MapContainer = styled(Grid)`
  margin: 0;
  padding: 0;
  flex: 1;
  width: '100%';
  height: '100%';
  min-height: 300;
`;
