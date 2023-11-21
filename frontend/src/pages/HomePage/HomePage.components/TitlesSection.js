import React from 'react';
import {
  Link as ReactRouterLink,
} from 'react-router-dom';
import {  
  Grid,
  Typography,
  Paper,
  Button,
  Box,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import {
  CardWithImage,
} from '../../../components';

const TitlesSection = ({
  contactRouteUrl = '',
  t = (s) => s,
} = {}) => {
  return (
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
        md={6}
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
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="h3"
              component="h1"
            >
              {t('Full-stack web developer in Paris')}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="body1"
              component="h2"
            >
              {t('As a full-stack web developer, I can help you with the web development of your projects')}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 5,
            }}
          >
            <Button
              variant="contained"
              component={ReactRouterLink}
              to={contactRouteUrl}
              sx={{
                borderRadius: 20,
                background: 'linear-gradient(90deg,#9d77f4 5%,#4D67F6 43%,#2AD7FB 95%)',
              }}
            >
              {t('I need a web developer')}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
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
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <CardWithImage
              imageUrl="https://firebasestorage.googleapis.com/v0/b/openclassrooms-bucket.appspot.com/o/portfolio-web-developer%2Flogo-openclassroom.jpg.webp?alt=media&token=21bfe550-2e7a-4073-b464-dcd648e19101"
              imageAlt="OpenClassrooms logo"
              header="Certified web developer"
              description="Certified “Web Developer“ by Open Classrooms, web applications I develop respects coding best practices"
              t={t}
              imageMaxWidth={125}
            />
            <CardWithImage
              imageUrl="https://firebasestorage.googleapis.com/v0/b/openclassrooms-bucket.appspot.com/o/portfolio-web-developer%2Flogo-google.png.webp?alt=media&token=992b8e0e-2135-498e-b8a3-f36d2449a016"
              imageAlt="Google logo"
              header="Web applications optimized SEO"
              description="With a know-how in SEO for web applications, I ensure a strong visibility to your web applications"
              t={t}
              imageMaxWidth={125}
            />
            <CardWithImage
              imageUrl="https://firebasestorage.googleapis.com/v0/b/openclassrooms-bucket.appspot.com/o/portfolio-web-developer%2Flogo-OSCP.png.webp?alt=media&token=cd1dfa29-45aa-45b3-9806-916f1825f0dc"
              imageAlt="OSCP logo"
              header="Web applications secured"
              description="Certified “Offensive Security Certified Pentester“ by OffSec, apps I develop respect OWASP secure development best practices"
              t={t}
              imageMaxWidth={125}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TitlesSection;
