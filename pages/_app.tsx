import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { makeStore } from '../store/makeStore';
import '../stylesheet/main.css';

type Props = {
    Component: React.Component;
    store: any;
};

class MyApp extends App<Props> {
    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <div>
                <Head>
                    <title>simple blog</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </div>
        );
    }
}

export default withRedux(makeStore)(MyApp);
