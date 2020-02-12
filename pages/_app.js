import App from 'next/app';
import Head from 'next/head';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Minesweeper</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
