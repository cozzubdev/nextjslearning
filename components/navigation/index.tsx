import React, { ReactElement } from 'react';
import { Container } from 'components/layout/container';
import { NavigationWrapper } from './style';
import { NavItem } from './navigation-item';

export const Navigation = (): ReactElement => {
  const navList = ['About', 'Interests', 'Registration'];
  return (
    <Container>
      <NavigationWrapper>
        {navList.map((item) => (
          <NavItem key={item} item={item} />
        ))}
      </NavigationWrapper>
    </Container>
  );
};