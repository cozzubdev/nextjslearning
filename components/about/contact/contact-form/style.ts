import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

export const Container = styled(Paper)`
  margin: 0;
  padding: 15px 30px;
  flex-grow: 1;
`;

export const Heading = styled.h2`
  margin-top: 15px;
  margin-bottom: 0;
`;

export const SubmitButton = styled(Button)`
  color: white;
  margin: 20px 0;
`;
