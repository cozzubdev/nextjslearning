import { ReactElement } from 'react';
import { Header } from 'components/header';
import { Footer } from 'components/footer';
import Container from '@material-ui/core/Container';
import { LayoutProps } from './type';

export const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <>
      <Header />
      <Container>
        <>{children}</>
      </Container>
      <Footer />
    </>
  );
};
