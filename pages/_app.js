import App from 'next/app';
import Head from 'next/head';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <html>
        <Head>
          <title>Minesweeper</title>
        </Head>
        <Component {...pageProps} />
      </html>
    );
  }
}
