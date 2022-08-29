import React, { Fragment, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { StylesProvider, createGenerateClassName } from '@mui/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import Grow from '@mui/material/Grow';
import createEmotionCache from '../utils/createEmotionCache';
import lightTheme from '../utils/mui/theme';
import ClientOnly from '../components/ClientOnly';
import '../styles/globals.css';
import { Provider as ReduxProvider } from 'react-redux';
import store from './../components/store/store';
import { SnackbarProvider } from 'notistack';
import { SnackbarUtilsConfigurator } from '../utils/notistack';

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
          <ReduxProvider store={store}>
            {' '}
            <CacheProvider value={emotionCache}>
              <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                <StylesProvider generateClassName={generateClassName}>
                  <SnackbarProvider    maxSnack={3}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  TransitionComponent={Grow}>
                    {' '}
                    <SnackbarUtilsConfigurator /> <Component {...pageProps} />
                  </SnackbarProvider>
                </StylesProvider>
              </ThemeProvider>
            </CacheProvider>
          </ReduxProvider>
        </ClientOnly>
      </StyledEngineProvider>
    </Fragment>
  );
};

export default MyApp;
