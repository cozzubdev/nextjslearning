import React, { ReactElement } from 'react';
import { Container } from 'components/layout/container';
import { Navigation } from 'components/navigation';

export const Header = (): ReactElement => {
  return (
    <Container>
      <Navigation />
    </Container>
  );
};
