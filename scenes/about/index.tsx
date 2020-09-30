import { ReactElement } from 'react';
import { Container } from 'components/layout/container';
import { GridRow } from 'components/layout/grid';
import { getInfo } from 'services/linked-in/linkedin.service';
import { StoreContext } from 'store/type';

export interface AboutProps {
  profileInfo: unknown;
}

export const AboutPage = (): ReactElement => {
  return (
    <Container>
      <GridRow>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</GridRow>
    </Container>
  );
};

AboutPage.getInitialProps = async (ctx: StoreContext): Promise<AboutProps> => {
  const profileInfo = await getInfo();

  return { profileInfo };
};
