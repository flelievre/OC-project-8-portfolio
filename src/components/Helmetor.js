import React, {
  useContext,
  useState,
  useEffect,
} from 'react';
import {
  useLocation,
  matchPath,
} from 'react-router-dom';
import {
  Helmet,
} from 'react-helmet-async';
import {
  WebAppContext,
} from '../contexts';
import {
  capitalizeFirstLetter,
} from '../functions';
import routes from '../../routes';

const Helmetor = ({
  metaTitle: routeMetaTitle = '',
  metaDescription: routeMetaDescription = '',
}) => {
  const {
    t,
    shouldCSR,
    currentLanguage,
    alternateLangLinksData,
    fullUrl,
  } = useContext(WebAppContext);

  const metaTitle = `François -${routeMetaTitle ? ` ${t(routeMetaTitle)} |` : ''}`;
  
  const metaDescription = t(
    routeMetaDescription,
  );

  return shouldCSR && (
    <Helmet>
      {metaTitle && (<title>{t(metaTitle)}</title>)}
      {metaDescription && (<meta name="description" content={metaDescription} />)}
      {alternateLangLinksData
        .map(({
          hrefLang = '',
          href = '',
        }) => (
          <link rel="alternate" key={hrefLang} href={href} hreflang={hrefLang} />
        ))
      }
      {alternateLangLinksData
        .filter(({
          hrefLang = '',
        }) => (
          hrefLang === 'fr'
        ))
        .map(({
          hrefLang = '',
          href = '',
        }) => (
          <link rel="alternate" key="x-default" href={href} hreflang="x-default" />
        ))
      }
      {metaTitle && (<meta property="og:title" content={t(metaTitle)} />)}
      {metaDescription && (<meta property="og:description" content={metaDescription} />)}
      {fullUrl && (<meta property="og:url" content={fullUrl} />)}
      {metaTitle && (<meta name="twitter:title" content={t(metaTitle)} />)}
      {metaDescription && (<meta name="twitter:description" content={metaDescription} />)}
    </Helmet>
  );
};

export default Helmetor;
