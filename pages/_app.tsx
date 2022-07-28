import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';

import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '../utils/createEmotionCache';
import lightTheme from '../utils/theme/theme';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props: {
  Component: any;
  emotionCache?: EmotionCache | undefined;
  pageProps: any;
}) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <Fragment>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </Fragment>
  );
};

export default MyApp;
