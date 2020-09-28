import React, { Fragment, ReactElement, ReactNode } from 'react';
import Document, {
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { GlobalStyles } from 'global/styles';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';

class NextJsLearningDocument extends Document<
  Readonly<DocumentProps> & Readonly<{ children?: ReactNode }>
> {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<{
    styles: ReactElement[];
    html: string;
    head?: (ReactElement | null)[] | undefined;
  }> {
    const { renderPage } = ctx;

    const styledSheet = new ServerStyleSheet();
    const materialSheets = new ServerStyleSheets();

    try {
      renderPage({
        enhanceApp: (App) => (props): ReactElement =>
          styledSheet.collectStyles(
            <>
              <GlobalStyles />
              {materialSheets.collect(<App {...props} />)}
            </>
          ),
      });

      const initialProps = await Document.getInitialProps(ctx);
      const returnedProps = {
        ...initialProps,
        styles: [
          <Fragment key='styles'>
            {initialProps?.styles}
            {materialSheets.getStyleElement()}
            {styledSheet.getStyleElement()}
          </Fragment>,
        ],
      };
      return returnedProps;
    } finally {
      styledSheet.seal();
    }
  }

  render(): ReactElement {
    return (
      <Html dir='ltr'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:wght@300;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default NextJsLearningDocument;
