import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { createGenerateId, JssProvider, SheetsRegistry } from "react-jss";

export default class JssDocument extends Document {
  static async getInitialProps(ctx) {
    const registry = new SheetsRegistry();
    const generateId = createGenerateId();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          (
            <JssProvider registry={registry} generateId={generateId}>
              <App {...props} />
            </JssProvider>
          ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id="server-side-styles">{registry.toString()}</style>
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            data-ui5-config
            type="application/json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                theme: "sap_fiori_3",
              }),
            }}
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
