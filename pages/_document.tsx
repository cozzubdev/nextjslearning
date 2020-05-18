import React, { ReactElement, ReactNode } from 'react';
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

class NextJsLearningDocument extends Document<
  Readonly<DocumentProps> & Readonly<{ children?: ReactNode }>
> {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<{
    styles: ReactElement;
    html: string;
    head?: (ReactElement | null)[] | undefined;
  }> {
    const { renderPage } = ctx;

    const sheet = new ServerStyleSheet();

    try {
      renderPage({
        enhanceApp: (App) => (props): ReactElement =>
          sheet.collectStyles(
            <>
              <GlobalStyles />
              <App {...props} />
            </>
          ),
      });

      const initialProps = await Document.getInitialProps(ctx);
      const returnedProps = {
        ...initialProps,
        styles: (
          <>
            {initialProps?.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
      return returnedProps;
    } finally {
      sheet.seal();
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
