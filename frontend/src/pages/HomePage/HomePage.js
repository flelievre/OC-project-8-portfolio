import React from 'react';
import {  
  Grid,
  Typography,
  Paper,
  Button,
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
} from '@mui/material';
import {
  Link as ReactRouterLink,
} from 'react-router-dom';
import {
  Title,
  PaperWithBg,
  ColoredPaper,
  CardWithImage,
} from '../../components';
import useHomePage from './HomePage.logic/useHomePage';
import {
  TechnologiesLogos,
  TitlesSection,
} from './HomePage.components';
import {
  PROJECTS_INFOS,
} from '../../constants';

const HomePage = () => {
  const {
    t,
    currentLanguage,
    theme,
    contactRouteUrl,
    generateAppRoute,
  } = useHomePage() || {};
  return (
    <>
      <TitlesSection
        contactRouteUrl={contactRouteUrl}
        t={t}
      />
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        direction="row"
      >
        <Grid
          item
          xs={10}
        >
          <Typography
            variant="h5"
            component="h3"
            sx={{
              mt: 4,
              mb: 4,
              textAlign: 'center',
              fontWeight: 100,
            }}
          >
            <strong
              style={{
                maxWidth: 400,
                fontWeight: 700,
                backgroundImage: 'linear-gradient(90deg,#9d77f4 5%,#4D67F6 43%,#2AD7FB 95%)',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t('Web development technologies I master')}
            </strong>
            <br />
            {t('are necessarily adapted to your web applications and sites development needs')}
          </Typography>
          <TechnologiesLogos
            t={t}
          />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        component="section"
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
        >
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              item
              xs={10}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Stack>
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontWeight: 700,
                    backgroundImage: 'linear-gradient(90deg,#9d77f4 5%,#4D67F6 43%,#2AD7FB 95%)',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {t('Portfolio')}
                </Typography>
                <Typography
                  variant="h4"
                  component="h2"
                >
                  {t('As a full-stack web developer, I love coding cutting-edge web applications')}
                </Typography>
              </Stack>
            </Grid>
            <Grid
              item
              xs={10}
              sx={{
                display: 'flex',
                justifyContent: 'left',
              }}
            >
              <Typography
                variant="body1"
                component="h2"
              >
                {t('Below are some web applications I developped')}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                my: 3,
              }}
            >
              <Button
                variant="contained"
                component={ReactRouterLink}
                to={contactRouteUrl}
                sx={{
                  borderRadius: 20,
                  mr: 2.5,
                  background: 'linear-gradient(90deg,#9d77f4 5%,#4D67F6 43%,#2AD7FB 95%)',
                }}
              >
                {t('Let\'s discuss your project!')}
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          sx={{
            mb: 10,
          }}
        >
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {PROJECTS_INFOS.map(({
              name = '',
              description = '',
              id = '',
              text = '',
            }) => (
              <Grid
                key={id}
                item
                xs={12}
                sm={4}
              >
                <CardWithImage
                  imageUrl=""
                  imageAlt=""
                  header={name}
                  description={description}
                  buttonLink={generateAppRoute({ route: `projects/${id}` })}
                  buttonText={text}
                  t={t}
                  imageMaxWidth={110}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
