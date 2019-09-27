import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import Store from '../redux/store';
import 'bootstrap/dist/css/bootstrap.css';

class MyApp extends App {

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