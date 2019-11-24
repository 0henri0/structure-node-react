import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import Store from '../redux/store';

import '../styles/styles.less';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const store = Store();
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;
