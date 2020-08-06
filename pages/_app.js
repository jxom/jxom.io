import * as React from 'react';
import NextApp from 'next/app';
import Head from 'next/head';
import { Provider as BumbagProvider, css, breakpoint, palette } from 'bumbag';

const theme = {
  breakpoints: {
    mobile: 480
  },
  global: {
    styles: {
      base: css`
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
    styles: {
      base: styleProps => css`
        font-family: 'Roboto Slab', sans-serif;

        ${breakpoint(
          'mobile',
          css`
            font-size: 1.75rem !important;
          `
        )(styleProps)};
      `
    },
    h1: {
      styles: {
        base: css`
          font-size: 2.5rem;
        `
      }
    }
  },
  Link: {
    styles: {
      base: styleProps => css`
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
      <BumbagProvider theme={theme}>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:700&display=swap" rel="stylesheet" />
          <title>Jake Moxey</title>
        </Head>
        <Component {...pageProps} />
      </BumbagProvider>
    );
  }
}
