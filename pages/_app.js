import * as React from 'react';
import NextApp from 'next/app';
import Head from 'next/head';
import { Provider as FannypackProvider, css, palette } from 'fannypack';

const theme = {
  global: {
    css: {
      root: styleProps => css`
        html,
        body {
          background-color: #cfebff;
          min-height: 100vh;
          line-height: 1.4;
        }
      `
    }
  },
  Card: {
    defaultProps: {
      altitude: '300'
    }
  },
  Heading: {
    css: {
      root: css`
        font-family: 'Roboto Slab', sans-serif;
      `
    }
  },
  Link: {
    css: {
      root: styleProps => css`
        text-decoration: none;

        &:hover {
          color: ${palette('primary')(styleProps)};
          text-decoration: underline;
        }
      `
    }
  }
};

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <FannypackProvider theme={theme}>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:700&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </FannypackProvider>
    );
  }
}
