import HomePage from './src/pages/HomePage/HomePage.js';
import ErrorPage from './src/pages/ErrorPage/ErrorPage.js';
import ContactPage from './src/pages/ContactPage/ContactPage.js';
import APP_SUPPORTED_LANGUAGES from './src/contexts/LanguageContext/LanguageContext.@constants/APP_SUPPORTED_LANGUAGES';

const genericRoutesData = [
  {
    path: '/:lang/',
    changefreq: 'monthly',
    label: 'Home',
    priority: '1.0',
    component: HomePage,
    metaTitle: 'Full-stack web developer in Paris',
    metaDescription: 'Full-stack web developer in Paris',
    // icon: 'solar:home-outline',
    showInDrawer: true,
    onlyIfHasReservation: false,
  },
  {
    path: '/:lang/contact',
    changefreq: 'yearly',
    label: 'Contact',
    // icon: 'ion:mail-outline',
    component: ContactPage,
    priority: '0.6',
    metaTitle: 'Contact',
    metaDescription: 'Contact',
    showInDrawer: true,
    isContactRoute : true,
    onlyIfHasReservation: false,
  },
  {
    path: '*',
    component: ErrorPage,
    metaTitle: 'Error 404',
  },
];

const routes = {};

APP_SUPPORTED_LANGUAGES.forEach(({ lang }) => (
  routes[lang] = [
    ...genericRoutesData,
  ]
));

export default routes;
