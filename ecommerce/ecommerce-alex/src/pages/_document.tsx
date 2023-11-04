import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
        {<link
       rel="stylesheet"
       href="https://fonts.googleapis.com/icon?family=Material+Icons"
       />}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
