import { AppProps, AppInitialProps, AppContext } from 'next/app';
import React, { ReactElement } from 'react';

const NextJsLearning = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <div>
      aaaaaaaa
      <Component {...pageProps} />
    </div>
  );
};

NextJsLearning.getInitialProps = async ({
  Component,
  ctx,
}: AppContext): Promise<AppInitialProps> => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  return { pageProps };
};

export default NextJsLearning;
