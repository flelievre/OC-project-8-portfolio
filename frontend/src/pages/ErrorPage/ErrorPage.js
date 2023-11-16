import React from 'react';
import {
  Link as ReactRouterLink,
} from 'react-router-dom';
import {  
  Typography,
  Grid,
} from '@mui/material';
import useErrorPage from './ErrorPage.logic/useErrorPage';

const ErrorPage = () => {
  const {
    generateAppRoute = ({ route = '' } = {}) => route,
    t = (s) => s,
  } = useErrorPage() || {};
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Typography
        component="h1"
        variant="h1"
        align="center"
        sx={{
          mt: 5,
          mb: 5,
        }}
      >
        404
      </Typography>
      <Typography
        component="h2"
        variant="h2"
        align="center"
        sx={{
          mb: 5,
        }}
      >
        {t('Page not found')}
      </Typography>
      <Typography
        component={ReactRouterLink}
        to={generateAppRoute({ route: '' })}
        sx={{
          mb: 10,
        }}
      >
        {t('Back to home page')}
      </Typography>
    </Grid>
  );
};

export default ErrorPage;
