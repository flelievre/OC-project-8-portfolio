import HomePage from './src/pages/HomePage/HomePage.js';
import ErrorPage from './src/pages/ErrorPage/ErrorPage.js';
import ContactPage from './src/pages/ContactPage/ContactPage.js';
import ProjectPage from './src/pages/ProjectPage/ProjectPage.js';
import APP_SUPPORTED_LANGUAGES from './src/contexts/LanguageContext/LanguageContext.@constants/APP_SUPPORTED_LANGUAGES';

const genericRoutesData = [
  {
    path: '/:lang/',
    changefreq: 'monthly',
    label: 'Home',
    priority: '1.0',
    component: HomePage,
    metaTitle: 'Full-stack web developer in Paris',
    metaDescription: 'Hire François. Full-stack web developer in Paris.',
    // icon: 'solar:home-outline',
    showInDrawer: true,
  },
  {
    path: '/:lang/contact',
    changefreq: 'yearly',
    label: 'Contact',
    // icon: 'ion:mail-outline',
    component: ContactPage,
    priority: '0.6',
    metaTitle: 'Contact',
    metaDescription: 'Contact François. Full-stack web developer in Paris.',
    showInDrawer: true,
    isContactRoute : true,
  },
  {
    path: '/:lang/projects/:projectId',
    changefreq: 'yearly',
    label: 'Project',
    // icon: 'ion:mail-outline',
    component: ProjectPage,
    priority: '0.6',
    metaTitle: 'Project details',
    metaDescription: 'Discover the project developed by François, full-stack web developer in Paris.',
    showInDrawer: false,
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
