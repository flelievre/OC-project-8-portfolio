import * as React from 'react';
import express from 'express';
import {
  renderToString,
} from 'react-dom/server';
import {
  StaticRouter,
} from 'react-router-dom/server';
import {
  CacheProvider,
} from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import serialize from 'serialize-javascript';
import createEmotionCache from './createEmotionCache';
import App from './App';
import routes from './routes';
import APP_SUPPORTED_LANGUAGES from './src/contexts/LanguageContext/LanguageContext.@constants/APP_SUPPORTED_LANGUAGES';
import {
  getActiveRouteInfos,
} from './src/functions';
import defaultT from './translations/t';

const canonicalLang = 'fr';

const {
  IS_EXECUTED_TRHOUGH_PROXY = false,
  NODE_ENV = 'development',
} = process.env;

const supportedLanguagesCodes = APP_SUPPORTED_LANGUAGES.map(({
  lang = '',
} = {}) => (
  lang
));

const OG_IMAGE_URL = '';
const TWITTER_IMAGE_URL = '';

const renderFullPage = ({
  html,
  css,
  data = {},
  data: {
    userLanguage = canonicalLang,
  } = {},
  metaTitle = '',
  metaDescription = '',
  metaNoIndex = false,
  alternateLangLinksData = [],
  canonicalLangLink = '',
  favico = '',
  fullUrl = '',
}) => (`<!DOCTYPE html>
<html lang="${userLanguage}">
  <head>
    <title>${metaTitle}</title>${canonicalLangLink ? `\n\t${canonicalLangLink}` : ''}${(alternateLangLinksData.length > 0) ? `\n\t${alternateLangLinksData.map(({
      hrefLang = '',
      href = '',
    }) => (
      `<link rel="alternate" href="${href}" hreflang="${hrefLang}" data-rh="true" />`
    )).join('\n\t')}` : ''}${(alternateLangLinksData.length > 0) ? `\n\t${alternateLangLinksData.filter(({ hrefLang = '' }) => (hrefLang === 'fr')).map(({
      hrefLang = '',
      href = '',
    }) => (
      `<link rel="alternate" href="${href}" hreflang="x-default" data-rh="true" />`
    )).join('\n\t')}` : ''}
    <meta charset="UTF-8">
    <link rel="icon" href="favicon.ico" />
    <meta name="description" content="${metaDescription}" data-rh="true">${metaNoIndex ? '\n\t<meta name="robots" content="noindex, nofollow">' : ''}
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <meta name="author" content="François" />
    <meta property="og:title" content="${metaTitle}" data-rh="true" />
    <meta property="og:description" content="${metaDescription}" data-rh="true" />
    <meta property="og:image" content="${OG_IMAGE_URL}" data-rh="true" />
    <meta property="og:url" content="${fullUrl}" data-rh="true" />
    <meta property="og:type" content="website" />
    <meta name="twitter:title" content="${metaTitle}" data-rh="true" />
    <meta name="twitter:description" content="${metaDescription}" data-rh="true" />
    <meta name="twitter:image" content="${TWITTER_IMAGE_URL}" />
    <meta name="ahrefs-site-verification" content="b59db0f074adc46440e2c58746fda8ba260a2084e0818fef5ce22708939141b1">
    <script>
      window.__INITIAL_DATA__ = ${serialize(data)}
    </script>
    <meta name="emotion-insertion-point" content="" />
    ${css}
  </head>
  <body>
    <div id="root">${html}</div>
    <script async src="/build/bundle.js"></script>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Sen:wght@300;400;500;600;700&display=swap"
    />
  </body>
</html>`);

const handleRender = async (req, res) => {
  const cache = createEmotionCache();

  const {
    extractCriticalToChunks,
    constructStyleTagsFromChunks,
  } = createEmotionServer(cache);

  const {
    userLanguage = canonicalLang,
    userTheme = 'light',
    url: currentRoute = '',
    protocol = 'https',
  } = req;

  let url = `${protocol}://${req.get('host')}`;

  if (Boolean(IS_EXECUTED_TRHOUGH_PROXY)) {
    url = `https://${req.headers['x-forwarded-host']}`;
  }

  const {
    activeRoute,
    activeRouteIndex,
    alternateLangLinksData,
    isRouteErrorRoute,
    cleanedUrl,
    fullUrl,
  } = getActiveRouteInfos({
    url,
    routes,
    currentRoute,
    currentLanguage: userLanguage,
    supportedLanguagesCodes,
  });

  const {
    metaTitle: routeMetaTitle = '',
    metaDescription: routeMetaDescription = '',
    metaKeyword: routeMetaKeyword = [],
    metaNoIndex = false,
    path,
  } = activeRoute || {};

  const t = (s, params) => defaultT({
    s,
    params,
    supportedLanguages: APP_SUPPORTED_LANGUAGES,
    currentLanguage: userLanguage,
  });

  const isPathErrorPath = isRouteErrorRoute;

  const metaTitle = `François -${routeMetaTitle ? ` ${t(routeMetaTitle)} |` : ''}`;

  const metaDescription = t(
    routeMetaDescription,
  );

  const metaKeyword = routeMetaKeyword.map((keyword) => t(keyword));

  const html = renderToString(
    <CacheProvider value={cache}>
      <StaticRouter location={req.url} >
        <App
          userLanguage={userLanguage}
          serverUrl={cleanedUrl}
          userTheme={userTheme}
        />
      </StaticRouter>
    </CacheProvider>,
  );

  // Grab the CSS from emotion
  const emotionChunks = extractCriticalToChunks(html);
  const emotionCss = constructStyleTagsFromChunks(emotionChunks);


  if (isPathErrorPath) {
    res.status(404);
  }

  res.send(
    renderFullPage({
      html,
      css: emotionCss,
      data: {
        serverUrl: cleanedUrl,
        userLanguage,
        userTheme,
      },
      metaTitle,
      metaDescription,
      metaKeyword,
      metaNoIndex,
      canonicalLangLink: '',
      alternateLangLinksData,
      fullUrl,
    }),
  );
}

const app = express();
app.use(cookieParser());
app.use(compression());
app.use('/build', express.static('build'));
app.use('/robots.txt', async (req, res) => {
  const {
    protocol = 'https',
  } = req;

  let url = `${protocol}://${req.get('host')}`;

  if (Boolean(IS_EXECUTED_TRHOUGH_PROXY)) {
    url = `https://${req.headers['x-forwarded-host']}`;
  }

  const isDemo = (NODE_ENV !== 'production')

  // Generate the robots.txt content dynamically
  const robotsTxtContent = `User-agent: *
Disallow:${isDemo ? ' *' : ''}
${(!isDemo) ? `Sitemap: ${url}/sitemap.xml` : ''}
`;

  // Set the content type to plain text
  res.type('text/plain');

  // Send the dynamically generated robots.txt content
  res.send(robotsTxtContent);
});

app.use('/sitemap.xml', async (req, res, next) => {
  const {
    protocol = 'https',
  } = req;
  
  let url = `${protocol}://${req.get('host')}`;

  if (Boolean(IS_EXECUTED_TRHOUGH_PROXY)) {
    url = `https://${req.headers['x-forwarded-host']}`;
  }

  const isDemo = (NODE_ENV !== 'production')

  // if (isDemo) {
  //   next();
  // } else {

    // Generate the robots.txt content dynamically
    let sitemapContext = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`;
    const routesWithOrWithoutReservation = {};
    Object.keys(routes).map((lang) => {
      const routesFiltered = routes[lang]
        .filter(({
          path = '',
        }) => (
          path !== '*'
        ))
      routesWithOrWithoutReservation[lang] = routesFiltered;
    });
    const langs = Object.keys(routesWithOrWithoutReservation).map((lang) => lang);
    Object.keys(routesWithOrWithoutReservation).forEach((lang) => (
      routesWithOrWithoutReservation[lang]
        .filter(({
          path = '',
        }) => (
          path !== '*'
        ))
        .map(({
          path = '',
          priority = '1.0',
          changefreq = 'yearly',
        }, index) => {
          const langPath = path.replace(/\/:lang/, lang);
          const frenchPath = routesWithOrWithoutReservation['fr'][index].path.replace(/\/:lang/, 'fr');
          sitemapContext += `
      <url>
            <loc>${url}/${langPath}</loc>
            <priority>${priority}</priority>
            <changefreq>${changefreq}</changefreq>
            <xhtml:link rel="alternate" hreflang="x-default" href="${url}/${frenchPath}" />`
          langs.forEach((otherLang) => {
            const otherLangPath = routesWithOrWithoutReservation[otherLang][index].path.replace(/\/:lang/, otherLang);
            sitemapContext += `
            <xhtml:link rel="alternate" hreflang="${otherLang}" href="${url}/${otherLangPath}" />`
          })
          sitemapContext += `
      </url>`
        })
    ));
    sitemapContext += `
  </urlset>`;

    // Set the content type to plain text
    res.type('text/plain');

    // Send the dynamically generated robots.txt content
    res.send(sitemapContext);
  // }
});

app.use(express.static('public'));

app.use((req, res, next) => {
  let domain = req.get('host');

  if (Boolean(IS_EXECUTED_TRHOUGH_PROXY)) {
    domain = req.headers['x-forwarded-host'];
  }

  if (domain && domain.startsWith('www.')) {
    const newHost = domain.slice(4); // Remove 'www.'
    const newUrl = `https://${newHost}${req.originalUrl}`;
    return res.redirect(301, newUrl);
  }
  next();
});

// Middleware #1 to set language cookie if requested
app.use((req, res, next) => {
  console.log('Middleware #1');
  const urlParts = req.path.split('/');
  const langCode = (urlParts.length > 1)
    ? urlParts[1]
    : '';

  if (supportedLanguagesCodes.includes(langCode)) {
    req.userLanguage = langCode;
    res.cookie('userLanguage', langCode, { maxAge: 30 * 24 * 60 * 60 * 1000 });
  }
  next();
});

// Redirection middleware #2 based on user's preferred language
app.use((req, res, next) => {
  const {
    cookies: {
      userLanguage: userLanguageCookie,
      userTheme = 'light',
    } = {},
    userLanguage: userLanguageInUrl = '',
  } = req || {};

  const acceptedLanguages = req.acceptsLanguages();
  let userLanguage = canonicalLang; // Default to French

  if (supportedLanguagesCodes.includes(userLanguageInUrl)) {
    userLanguage = userLanguageInUrl;
  } else if (supportedLanguagesCodes.includes(userLanguageCookie)) {
    userLanguage = userLanguageCookie;
  } else {
    // Detect user's preferred language
    for (const lang of acceptedLanguages) {
      if (supportedLanguagesCodes.includes(lang)) {
        userLanguage = lang;
        break;
      }
    }
  }

  req.userTheme = userTheme;
  req.userLanguage = userLanguage;

  if (userLanguage !== userLanguageCookie) {
    res.cookie(
      'userLanguage',
      userLanguage,
      {
        maxAge: 30 * 24 * 60 * 60 * 1000,
      },
    );
  }

  if (req.path === '/') {
    return res.redirect(301, `/${userLanguage}/`);
  }

  const languageCode = req.path.split('/')[1];

  const langCodePattern = new RegExp(`^/(${supportedLanguagesCodes.join('|')})$`);

  if (langCodePattern.test(req.path)) {
    return res.redirect(301, `/${userLanguage}/`);
  }

  if (!supportedLanguagesCodes.includes(languageCode)) {
    return res.redirect(301, `/${userLanguage}${req.path}`);
  }

  next();
});

  
// Handle language-specific routes
app.get('/:lang', (req, res, next) => {
  if (supportedLanguagesCodes.includes(req.params.lang)) {
    req.userLanguage = req.params.lang;
    return handleRender(req, res);
  } else {
    return next();
  }
});

app.use(handleRender);

const {
  SERVER_PORT = 3391,
} = process.env;

app.listen(SERVER_PORT, () => {
  console.log(`Listening on ${SERVER_PORT}`);
});