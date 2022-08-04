import React, { Fragment, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { StylesProvider, createGenerateClassName } from '@mui/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import createEmotionCache from '../utils/createEmotionCache';
import lightTheme from '../utils/mui/theme';
import ClientOnly from '../components/ClientOnly';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();
const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
});

const MyApp = (props: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: any;
  emotionCache?: EmotionCache | undefined;
  pageProps: AppProps;
}) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <Fragment>
      <StyledEngineProvider injectFirst>
        <ClientOnly>
          <CacheProvider value={emotionCache}>
            <ThemeProvider theme={lightTheme}>
              <CssBaseline />
              <StylesProvider generateClassName={generateClassName}>
                <Component {...pageProps} />
              </StylesProvider>
            </ThemeProvider>
          </CacheProvider>
        </ClientOnly>
      </StyledEngineProvider>
    </Fragment>
  );
};

export default MyApp;
