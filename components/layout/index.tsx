import React, { ReactElement } from 'react';
import { Header } from 'components/header';
import { Container } from './container';
import { LayoutProps } from './type';

export const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};
