import { ReactElement, useMemo } from 'react';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Container from '@material-ui/core/Container';

import { useCurrentPathname } from 'store/router/select';
import { useLoginsStatus } from 'store/app/select';

import { NavItem } from './navigation-item';

export const Navigation = (): ReactElement => {
  const route = useCurrentPathname();
  const loginStatus = useLoginsStatus();

  const registrationButton = useMemo(
    () => (loginStatus ? 'Logout' : 'Registration'),
    [loginStatus]
  );
  const navList = ['Home', 'About', 'Interests', registrationButton];

  const navListItemIndex = navList.indexOf(
    navList.find(
      (item: string) => route && item.toLowerCase() === route.split('/')[1]
    ) as string
  );

  const value = (navListItemIndex > 0 && navListItemIndex) || 0;

  return (
    <Container maxWidth='xl'>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor='primary'
          textColor='primary'
          aria-label='disabled tabs example'
          centered>
          {navList.map((item) => (
            <NavItem key={item} label={item} />
          ))}
        </Tabs>
      </Paper>
    </Container>
  );
};
