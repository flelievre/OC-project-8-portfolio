import React from 'react';
import {
  Link as ReactRouterLink,
} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import useFooter from './Footer.logic/useFooter';
import { Icon } from '@iconify/react';
import {
  capitalizeFirstLetter,
} from '../../../functions';

const Footer = () => {
  const {
    t,
    routesOfLanguage,
    generateAppRoute,
    redirectAppTo,
    contactRouteUrl,
  } = useFooter() || {};
  return (
    <Paper
      elevation={5}
      component="footer"
      sx={{ display: 'flex', overflow: 'hidden', pb: 5 }}
    >
      <Container sx={{ mt: 5, display: 'flex', position: 'relative' }}>
        <Grid container spacing={5}>
          <Grid item md={4} xs={12} justifyContent="center">
            <Stack>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/openclassrooms-bucket.appspot.com/o/portfolio-web-developer%2Ftech%2Flogo-francois.png.webp?alt=media&token=de922cab-7eba-4e72-8482-3c3f2cc246e9"
                alt="François logo"
                style={{
                  width: 175,
                  cursor: 'pointer',
                }}
                onClick={() => redirectAppTo({ route: routes.HOME })}
              />
              <Container>
                <a
                  href="https://www.linkedin.com/in/francois-lelievre-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('Navigate to francois\'s LinkedIn profile')}
                >
                  <Button size="small" aria-label={t('Navigate to francois\'s LinkedIn profile')}>
                    <Icon icon="ri:linkedin-line" width={25} height={25} aria-hidden="true" />
                  </Button>
                </a>
              </Container>
            </Stack>
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            component="section"
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <Typography component="p" variant="caption">
                {t('Developped by François')}
              </Typography>
              <Typography component="p" variant="h6" sx={{ mt: 2 }}>
                {t('Have a project ?')}
              </Typography>
              <Button
                variant="contained"
                component={ReactRouterLink}
                to={contactRouteUrl}
                sx={{
                  borderRadius: 20,
                  mr: 2.5,
                  mt: 1,
                  background: 'linear-gradient(90deg,#9d77f4 5%,#4D67F6 43%,#2AD7FB 95%)',
                }}
              >
                {t('Hire me')}
              </Button>
            </Grid>
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            component="section"
          >
            <Grid
              container
              spacing={2}
              justifyContent="flex-end"
              alignItems="flex-end"
              direction="column"
            >
              <Typography component="h2" variant="h5">
                {t('Pages')}
              </Typography>
              <List>
                {(routesOfLanguage
                  .filter(({
                    showInDrawer,
                  }) => (
                    showInDrawer
                  ))
                  .filter(({
                    onlyIfHasReservation,
                  }) => (
                    !onlyIfHasReservation 
                    || (
                      onlyIfHasReservation
                      && hasReservation
                    )
                  ))
                  .map(({
                    label = '',
                    path = '',
                  }) => (
                    <ListItem
                      disablePadding
                      key={path}
                    >
                      <ListItemText
                        primary={t(label)}
                        primaryTypographyProps={{
                          variant: 'body1',
                          component: ReactRouterLink,
                          to: generateAppRoute({ route: path.replace(/\/:lang\//, '') }),
                        }}
                      />
                    </ListItem>
                  ))
                )}
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Footer;
