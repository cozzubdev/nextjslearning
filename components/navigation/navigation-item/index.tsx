import React, { ReactElement, useCallback } from 'react';
import Link from 'next/link';
import { NavigationItemWrapper, NavigationLink } from './style';
import { NavItemProps } from './type';

export const NavItem = ({ item }: NavItemProps): ReactElement => {
  return (
    <NavigationItemWrapper>
      {item === 'Home' ? (
        <Link href='/' as='/'>
          <NavigationLink>{item}</NavigationLink>
        </Link>
      ) : (
        <Link href={`/${item.toLowerCase()}`} as={`/${item.toLowerCase()}`}>
          <NavigationLink>{item}</NavigationLink>
        </Link>
      )}
    </NavigationItemWrapper>
  );
};
