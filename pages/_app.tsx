import { AppProps, AppInitialProps, AppContext } from 'next/app';
import React, { ReactElement } from 'react';
import { ConnectedRouter } from 'connected-next-router';
import { reduxWrapper } from 'store';
import { Store } from 'store/type';
import { Layout } from 'components/layout';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from 'global/theme';

interface NextJsLearningProps extends AppProps {
  store?: Store;
}

const NextJsLearning = ({
  Component,
  pageProps,
}: NextJsLearningProps): ReactElement => {
  return (
    <ConnectedRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <CssBaseline />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ConnectedRouter>
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

export default reduxWrapper.withRedux(NextJsLearning);
