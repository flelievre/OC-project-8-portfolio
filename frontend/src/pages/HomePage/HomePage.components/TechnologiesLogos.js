import React from 'react';
import {
  Box,
  Grid,
} from '@mui/material';

const TechnologiesLogos = ({
  t = (s) => s,
} = {}) => (
  <Box
    sx={{
      boxSizing: 'border-box',
      maxWidth: '100vw',
      mb: 4,
    }}
  >
    <Grid
      container
      component="section"
      sx={{
        animation: 'marquee 45s linear infinite',
        justifyContent: 'flex-start',
        display: 'flex',
        transformStyle: 'preserve-3d',
        maxWidth: '100vw',
        boxSizing: 'border-box',
        willChange: 'transform',
        '@keyframes marquee': {
          '0%': {
            transform: 'translate3d(-3000px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg);', // Départ à droite
          },
          '100%': {
            transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg);', // Arrivée à gauche
          },
        },
      }}
    >
      <Box
        style={{
          alignItems: 'center',
          display: 'flex',
          maxWidth: '100vw',
        }}
      >
        <img
          height="150"
          width="200"
          src="https://firebasestorage.googleapis.com/v0/b/openclassrooms-bucket.appspot.com/o/portfolio-web-developer%2Ftech%2Flogo-linux.png.webp?alt=media&token=967e6759-98e4-4931-b7e8-33387cf6ac80"
          alt={t('Logo of {techName}', { techName: 'Linux'})}
          style={{
            width: 'auto',
            height: '150px',
            marginRight: '50px',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        />
        <img
          height="150"
          width="200"
          src="https://firebasestorage.googleapis.com/v0/b/openclassrooms-bucket.appspot.com/o/portfolio-web-developer%2Ftech%2Flogo-certbot.png.webp?alt=media&token=0eac04b6-426d-48d5-b2fd-f6e663499f22"
          alt={t('Logo of {techName}', { techName: 'certbot'})}
          style={{
            width: 'auto',
            height: '150px',
            marginRight: '50px',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        />
        <img
          height="150"
          width="200"
          src="https://firebasestorage.googleapis.com/v0/b/openclassrooms-bucket.appspot.com/o/portfolio-web-developer%2Ftech%2Flogo-apache.png.webp?alt=media&token=9c0ad7c7-4504-4978-8102-2464f55a67e2"
          alt={t('Logo of {techName}', { techName: 'Apache'})}
          style={{
            width: 'auto',
            height: '150px',
            marginRight: '50px',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        />
        <img
          height="150"
          width="200"
          src="https://firebasestorage.googleapis.com/v0/b/openclassrooms-bucket.appspot.com/o/portfolio-web-developer%2Ftech%2Flogo-mongoose.png.webp?alt=media&token=ebb36894-222b-4824-9175-544f9d457eb7"
          alt={t('Logo of {techName}', { techName: 'Mongoose'})}
          style={{
            width: 'auto',
            height: '150px',
            marginRight: '50px',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        />
        <img
          height="150"
          width="200"
          src="https://firebasestorage.googleapis.com/v0/b/openclassrooms-bucket.appspot.com/o/portfolio-web-developer%2Ftech%2Flogo-mongodb.png.webp?alt=media&token=b6b1a782-0ec0-4ab8-9dcd-8cc265ff1322"
          alt={t('Logo of {techName}', { techName: 'mongoDB'})}
          style={{
            width: 'auto',
            height: '150px',
            marginRight: '50px',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        />
        <img
          height="150"
          width="200"
          src="https://firebasestorage.googleapis.com/v0/b/openclassrooms-bucket.appspot.com/o/portfolio-web-developer%2Ftech%2Flogo-material-ui.png.webp?alt=media&token=5cde9b7e-48a6-4e16-81a3-5ea8ad655020"
          alt={t('Logo of {techName}', { techName: 'Material UI'})}
          style={{
            width: 'auto',
            height: '150px',
            marginRight: '50px',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        />
        <img
          height="150"
          width="200"
          src="https://firebasestorage.googleapis.com/v0/b/openclassrooms-bucket.appspot.com/o/portfolio-web-developer%2Ftech%2Flogo-web-tech.png.webp?alt=media&token=788ac7b3-851d-4de0-9acd-f06c33f527f2"
          alt={t('Logo of {techName}', { techName: 'HTML JS CSS'})}
          style={{
            width: 'auto',
            height: '150px',
            marginRight: '50px',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        />
        <img
          height="150"
          width="200"
          src="https://firebasestorage.googleapis.com/v0/b/openclassrooms-bucket.appspot.com/o/portfolio-web-developer%2Ftech%2Flogo-react.png.webp?alt=media&token=a0e5cbc5-a139-44a8-95da-1d48b907f98d"
          alt={t('Logo of {techName}', { techName: 'React'})}
          style={{
            width: 'auto',
            height: '150px',
            marginRight: '50px',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        />
        <img
          height="150"
          width="200"
          src="https://firebasestorage.googleapis.com/v0/b/openclassrooms-bucket.appspot.com/o/portfolio-web-developer%2Ftech%2Flogo-nodejs.png.webp?alt=media&token=fa1f6dce-58c1-4cc8-a8c7-50eb36b117c8"
          alt={t('Logo of {techName}', { techName: 'NodeJS'})}
          style={{
            width: 'auto',
            height: '150px',
            marginRight: '50px',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        />
        <img
          height="150"
          width="200"
          src="https://firebasestorage.googleapis.com/v0/b/openclassrooms-bucket.appspot.com/o/portfolio-web-developer%2Ftech%2Flogo-firebase.png.webp?alt=media&token=1d49797a-4b68-487b-9ec8-45942d92be9d"
          alt={t('Logo of {techName}', { techName: 'Firebase'})}
          style={{
            width: 'auto',
            height: '150px',
            marginRight: '50px',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        />
      </Box>
    </Grid>
  </Box>
);

export default TechnologiesLogos;
