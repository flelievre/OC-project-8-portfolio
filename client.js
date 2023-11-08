import * as React from 'react';
import {
  hydrateRoot,
} from 'react-dom/client';
import { CacheProvider } from '@emotion/react';
import App from './App';
import createEmotionCache from './createEmotionCache';
import { BrowserRouter } from 'react-router-dom';

const cache = createEmotionCache();

const Client = ({
  data: {
    userLanguage = 'fr',
    userTheme = 'light',
    serverUrl = '',
  } = {},
}) => {
  return (
    <CacheProvider value={cache}>
      <BrowserRouter>
        <App
          userLanguage={userLanguage}
          userTheme={userTheme}
          serverUrl={serverUrl}
        />
      </BrowserRouter>
    </CacheProvider>
  );
};

hydrateRoot(
  document.getElementById('root'),
  <Client data={{ ...window.__INITIAL_DATA__ }} />,
);
