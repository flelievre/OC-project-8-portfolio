import React, {
  useContext,
  useEffect,
} from 'react';
import {
  setTranslations,
  setDefaultLanguage,
} from 'react-multi-lang';
import {
  HelmetProvider,
} from 'react-helmet-async';
import {
  Route,
  Routes,
} from 'react-router-dom';
import ThemeProvider from './src/contexts/ThemeContext/context/ThemeProvider';
import ThemeContext from './src/contexts/ThemeContext/context/ThemeContext';
import {
  Container,
  Typography,
  Box,
  CssBaseline,
  Link,
  Toolbar,
} from '@mui/material';
import routes from './routes';
import LanguageProvider from './src/contexts/LanguageContext/LanguageProvider';
import WebAppProvider from './src/contexts/WebAppContext/WebAppProvider';
import WebAppContext from './src/contexts/WebAppContext/WebAppContext';
import IsPageAtTopProvider from './src/contexts/IsPageAtTopContext/IsPageAtTopProvider';
import IsPageAtTopContext from './src/contexts/IsPageAtTopContext/IsPageAtTopContext';
import DrawerAndHeader from './src/app/App.components/DrawerAndHeader/DrawerAndHeader';
import Footer from './src/app/App.components/Footer/Footer';
import {
  Helmetor,
} from './src/components';
/* [+] LanguageContext constants imports */
import APP_SUPPORTED_LANGUAGES from './src/contexts/LanguageContext/LanguageContext.@constants/APP_SUPPORTED_LANGUAGES';

const App = ({
  userLanguage = 'fr',
  serverUrl = '',
  userTheme = 'light',
}) => {
  const defaultTranslations = APP_SUPPORTED_LANGUAGES.reduce((translationsAcc, translation) => ({
    ...translationsAcc,
    [translation.lang]: {
      ...translation.translations,
    },
  }), {});

  setTranslations({
    ...defaultTranslations,
  });

  setDefaultLanguage(userLanguage);

  return (
    <ThemeProvider
      initialTheme={userTheme}
    > 
      <ThemedApp
        userLanguage={userLanguage}
        serverUrl={serverUrl}
      />
    </ThemeProvider>
  );
}

const ThemedApp = ({
  userLanguage = 'fr',
  serverUrl = '',
}) => {
  const {
    theme,
    themeName,
  } = useContext(ThemeContext);
  return (
    <>
      <CssBaseline />
      <LanguageProvider
        language={userLanguage}
      >
        <WebAppProvider
          theme={theme}
          themeName={themeName}
          serverUrl={serverUrl}
        >
          <LanguageApp />
        </WebAppProvider>
      </LanguageProvider>
    </>
  );
}

const LanguageApp = () => {
  const {
    currentLanguage,
  } = useContext(WebAppContext);
  return (
    <AppWithLanguage
      currentLanguage={currentLanguage}
    />
  );
};

const AppWithLanguage = ({
  currentLanguage = 'fr',
}) => (
  <HelmetProvider>
    {/*<script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(sharedJsonSchema),
      }}
    />*/}
    <IsPageAtTopProvider>
      <div
        style={{
          transition: 'transform 1s 1s',
          transform: 'translateX(-50%) scaleY(.995)',
          transformOrigin: '2900px 100%',
          zIndex: -1,
          position: 'absolute',
          top: 0,
          left: 0,
          transform: 'translateX(-50%)',
          transform: 'skewY(12deg)',
          width: '100%',
          height: '100%',
        }}
    >
      <canvas
        style={{
          opacity: 1,
          transition: 'opacity 1.8s ease-in 50ms',
          position: 'relative',
          background: 'radial-gradient(#3859fc 23%,rgba(255,203,87,0) 67% 100%) 385px -24px,radial-gradient(#7a8ef0 0,rgba(169,96,238,0) 60% 100%) -940px 290px,radial-gradient(#90e0ff 10%,rgba(144,224,255,0) 60% 100%) -120px 250px,radial-gradient(#7a8ef0 40%,rgba(169,96,238,0) 57% 100%) 495px -44px,radial-gradient(#60d2ee 30%,rgba(169,96,238,0) 67% 100%) 122px -120px,radial-gradient(#60d2ee 10%,rgba(169,96,238,0) 60% 100%) -420px 120px,radial-gradient(#90e0ff 15%,rgba(144,224,255,0) 50% 100%) -620px 0,radial-gradient(#90e0ff 25%,rgba(144,224,255,0) 50% 100%) 520px -250px,#a960ee',
          backgroundRepeat: 'repeat-y',
          display: 'block',
          width: 'inherit',
          height: '100%',
        }}
      />
    </div>
      <Box sx={{ display: 'flex' }}>
        <Routes>
          {(routes[currentLanguage]
            .map(({
              path,
              component: C,
              metaTitle,
              metaDescription,
            }) => (
              <Route
                key={path}
                path={path}
                element={(
                  <>
                    <Helmetor
                      metaTitle={metaTitle}
                      metaDescription={metaDescription}
                    />
                    <TopPageBox>
                      <DrawerAndHeader />
                      <Toolbar />
                      <ContainerRefreshingScrollDetection maxWidth="lg">
                        <C />
                      </ContainerRefreshingScrollDetection>
                      <Footer />
                    </TopPageBox>
                  </>
                )}
              />
            ))
          )}
        </Routes>
      </Box>
    </IsPageAtTopProvider>
  </HelmetProvider>
);

const TopPageBox = ({ children = <></> } = {}) => {
  const {
    refTopComponent,
  } = useContext(IsPageAtTopContext);

  return (
    <Box
      component="main"
      sx={{
        overflowX: 'hidden',
        minWidth: '100vw',
      }}
    >
      {children}
    </Box>
  );
};

const ContainerRefreshingScrollDetection = ({
  children = <></>,
} = {}) => {
  const {
    refresh,
  } = useContext(IsPageAtTopContext);

  useEffect(() => {
    refresh();
    // eslint-disable-next-line
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{ mt: 1, mb: 4 }}
    >
      {children}
    </Container>
  );
};


export default App;
