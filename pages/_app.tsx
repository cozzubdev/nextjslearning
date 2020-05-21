import { AppProps, AppInitialProps, AppContext } from 'next/app';
import React, { ReactElement } from 'react';
import { ConnectedRouter } from 'connected-next-router';
import { reduxWrapper } from 'store';
import { Store, StoreContext } from 'store/type';
import { Layout } from 'components/layout';

interface NextJsLearningProps extends AppProps {
  store?: Store;
}

interface NextJSContext extends AppContext {
  ctx: StoreContext;
}

const NextJsLearning = ({
  Component,
  pageProps,
}: NextJsLearningProps): ReactElement => {
  return (
    <ConnectedRouter>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ConnectedRouter>
  );
};

NextJsLearning.getInitialProps = async ({
  Component,
  ctx,
}: NextJSContext): Promise<AppInitialProps> => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  return { pageProps };
};

// const { withRedux } = reduxWrapper;
export default reduxWrapper.withRedux(NextJsLearning);
