import { AppProps, AppInitialProps, AppContext } from 'next/app';
import { ReactElement, useEffect } from 'react';
import { ConnectedRouter } from 'connected-next-router';
import { reduxWrapper } from 'store';
import { Store } from 'store/type';
import { Layout } from 'components/layout';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from 'global/theme';
import { appActions } from 'store/app/action';
import { useDispatch } from 'react-redux';
import { parseCookies } from 'nookies';

interface NextJsLearningProps extends AppProps {
  store: Store;
}

const NextJsLearning = ({
  Component,
  pageProps,
}: NextJsLearningProps): ReactElement => {
  const dispatch = useDispatch();
  const { token } = parseCookies();

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles && jssStyles.parentNode)
      // eslint-disable-next-line unicorn/prefer-node-remove
      jssStyles.parentNode.removeChild(jssStyles);
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(appActions.setLogin(true));
      return;
    }
    dispatch(appActions.setLogin(false));
  }, [dispatch, token]);

  return (
    <ConnectedRouter>
      <StyledThemeProvider theme={theme}>
        <MaterialThemeProvider theme={theme}>
          <Layout>
            <CssBaseline />
            <Component {...pageProps} />
          </Layout>
        </MaterialThemeProvider>
      </StyledThemeProvider>
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
