import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

/**
 * Modified _document file with getInitialProps to support SSR for Styled-Components.
 *
 * More info: https://styled-components.com/docs/advanced#nextjs
 */
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }
}
