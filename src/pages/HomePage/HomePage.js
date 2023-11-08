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

const HomePage = () => {
  const {
    t,
    currentLanguage,
    theme,
    contactRouteUrl,
    demoLink,
    contactLink,
  } = useHomePage() || {};
  return (
    <>
      <TitlesSection
        demoLink=""
        contactLink=""
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
      {/*<PaperWithBg
        bgUrl="https://firebasestorage.googleapis.com/v0/b/ubar-firebase-prod.appspot.com/o/website%2Fkomdab-click-and-collect-delivery-for-restaurants.jpg.webp?alt=media&token=8a6509a1-61e4-4fde-a314-2094e4897ad6&_gl=1*xrz4r0*_ga*ODk0MDA1MDg5LjE2ODYwNjA2ODA.*_ga_CW55HF8NVT*MTY5ODkzMDUwNi4zMTUuMS4xNjk4OTMxNTY5LjU2LjAuMA.."
        text="For the restaurants"
        t={t}
        theme={theme}
        actionButtonText="I'm a restaurateur"
        actionButtonLink=""
      />
      <PaperWithBg
        bgUrl="https://firebasestorage.googleapis.com/v0/b/ubar-firebase-prod.appspot.com/o/website%2Fkomdab-digital-cantine-for-business.jpg.webp?alt=media&token=9ad6acbd-eb1b-400c-b632-80f9dc10a1b9&_gl=1*1dgx3ag*_ga*ODk0MDA1MDg5LjE2ODYwNjA2ODA.*_ga_CW55HF8NVT*MTY5ODkzMDUwNi4zMTUuMS4xNjk4OTMxOTY2LjQwLjAuMA.."
        text="For business"
        t={t}
        textSx={{
          maxWidth: 200,
          textAlign: 'left',
        }}
        theme={theme}
        actionButtonText="I need a digital canteen"
        actionButtonLink=""
      />
      <PaperWithBg
        bgUrl="https://firebasestorage.googleapis.com/v0/b/ubar-firebase-prod.appspot.com/o/website%2Fkomdab-order-food-in-click-and-collect-and-delivery.jpg.webp?alt=media&token=27fd2933-a166-4bdb-a001-e3b55de84b3c&_gl=1*19ulg2g*_ga*ODk0MDA1MDg5LjE2ODYwNjA2ODA.*_ga_CW55HF8NVT*MTY5ODkzMDUwNi4zMTUuMS4xNjk4OTMyNjIyLjU4LjAuMA.."
        text="For the gourmets"
        t={t}
        theme={theme}
        actionButtonText="I'm hungry"
        actionButtonLink=""
      />*/}

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
                to={demoLink}
                sx={{
                  borderRadius: 20,
                  mr: 2.5,
                  background: 'linear-gradient(90deg,#9d77f4 5%,#4D67F6 43%,#2AD7FB 95%)',
                }}
              >
                {t('Request a demo')}
              </Button>
              <Button
                variant="outlined"
                component={ReactRouterLink}
                to={contactLink}
                sx={{
                  borderRadius: 20,
                }}
              >
                {t('Contact us')}
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
            <Grid
              item
              xs={12}
              sm={4}
            >
              <CardWithImage
                imageUrl="https://firebasestorage.googleapis.com/v0/b/ubar-firebase-prod.appspot.com/o/website%2Fkomdab-livraison-restaurant-pour-entreprise.png?alt=media&token=6667d9c2-4ecc-4ff0-8afe-874996d6a7b8&_gl=1*1jhxidz*_ga*ODk0MDA1MDg5LjE2ODYwNjA2ODA.*_ga_CW55HF8NVT*MTY5OTAzNTgxOS4zMjAuMS4xNjk5MDM3MDk1LjQyLjAuMA.."
                imageAlt="Happy restaurateur using Komdab as Click and Collect and Delivery solution for restaurants"
                header="Booki"
                description="Travel agency website"
                t={t}
                imageMaxWidth={110}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
            >
              <CardWithImage
                imageUrl="https://firebasestorage.googleapis.com/v0/b/ubar-firebase-prod.appspot.com/o/website%2Fkomdab-livraison-pour-restaurant.png?alt=media&token=0daa89b4-365a-402b-9289-d3e7e2c84705&_gl=1*oj9nbw*_ga*ODk0MDA1MDg5LjE2ODYwNjA2ODA.*_ga_CW55HF8NVT*MTY5OTAzNTgxOS4zMjAuMS4xNjk5MDM2NDUzLjQ1LjAuMA.."
                imageAlt="Happy restaurateur using Komdab as Click and Collect and Delivery solution for restaurants"
                header="Sophie Bluel"
                description="Interior architect portfolio"
                t={t}
                imageMaxWidth={150}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
            >
              <CardWithImage
                imageUrl="https://firebasestorage.googleapis.com/v0/b/ubar-firebase-prod.appspot.com/o/website%2Fkomdab-livraison-pour-restaurant.png?alt=media&token=0daa89b4-365a-402b-9289-d3e7e2c84705&_gl=1*oj9nbw*_ga*ODk0MDA1MDg5LjE2ODYwNjA2ODA.*_ga_CW55HF8NVT*MTY5OTAzNTgxOS4zMjAuMS4xNjk5MDM2NDUzLjQ1LjAuMA.."
                imageAlt="Happy restaurateur using Komdab as Click and Collect and Delivery solution for restaurants"
                header="Nina Carducci"
                description="Photographer portfolio"
                t={t}
                imageMaxWidth={150}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
            >
              <CardWithImage
                imageUrl="https://firebasestorage.googleapis.com/v0/b/ubar-firebase-prod.appspot.com/o/website%2Fkomdab-livraison-pour-restaurant.png?alt=media&token=0daa89b4-365a-402b-9289-d3e7e2c84705&_gl=1*oj9nbw*_ga*ODk0MDA1MDg5LjE2ODYwNjA2ODA.*_ga_CW55HF8NVT*MTY5OTAzNTgxOS4zMjAuMS4xNjk5MDM2NDUzLjQ1LjAuMA.."
                imageAlt="Happy restaurateur using Komdab as Click and Collect and Delivery solution for restaurants"
                header="Kasa"
                description="Property rental web application"
                t={t}
                imageMaxWidth={150}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
            >
              <CardWithImage
                imageUrl="https://firebasestorage.googleapis.com/v0/b/ubar-firebase-prod.appspot.com/o/website%2Fkomdab-livraison-pour-restaurant.png?alt=media&token=0daa89b4-365a-402b-9289-d3e7e2c84705&_gl=1*oj9nbw*_ga*ODk0MDA1MDg5LjE2ODYwNjA2ODA.*_ga_CW55HF8NVT*MTY5OTAzNTgxOS4zMjAuMS4xNjk5MDM2NDUzLjQ1LjAuMA.."
                imageAlt="Happy restaurateur using Komdab as Click and Collect and Delivery solution for restaurants"
                header="Mon Vieux Grimoir"
                description="Book review social network"
                t={t}
                imageMaxWidth={150}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
