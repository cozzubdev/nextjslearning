import { ReactElement, useCallback } from 'react';
import Link from 'next/link';

import Tab from '@material-ui/core/Tab';

import { logOut } from 'services/registration';

import { NavItemProps } from './type';

export const NavItem = ({ label }: NavItemProps): ReactElement => {
  const logoutHandler = useCallback(async () => {
    await logOut();
  }, []);

  if (label === 'Logout') return <Tab label={label} onClick={logoutHandler} />;

  return label === 'Home' ? (
    <Link href='/' as='/'>
      <Tab label={label} />
    </Link>
  ) : (
    <Link href={`/${label.toLowerCase()}`} as={`/${label.toLowerCase()}`}>
      <Tab label={label} />
    </Link>
  );
};
