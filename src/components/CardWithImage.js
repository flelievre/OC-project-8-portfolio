import React from 'react';
import {
  Link as ReactRouterLink,
} from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Button,
  Typography,
} from '@mui/material';

const CardWithImage = ({
  imageUrl = '',
  imageAlt = '',
  header = '',
  headerVariant = 'h5',
  description = '',
  imageMaxWidth = 100,
  t = (s) => s,
  cardSx = {},
  buttonText = '',
  buttonLink = '',
} = {}) => (
  <Card
    sx={{
      display: 'flex',
      justifyContent: (header || description) ? 'space-between' : 'center',
      borderRadius: 5,
      ...cardSx,
    }}
    component={Paper}
    elevation={1}
  >
    {(header || description) && (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          // px: 1,
        }}
      >
        <CardContent
          sx={{
            flex: '1 0 auto',
          }}>
          <Typography
            component="div"
            variant={headerVariant}
          >
            {t(header)}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {t(description)}
          </Typography>
          {buttonText && (
            <Button
              component={ReactRouterLink}
              to={buttonLink}
              variant="outlined"
            >
              {t(buttonText)}
            </Button>
          )}
        </CardContent>
      </Box>
    )}
    {imageUrl && (
      <CardMedia
        component="img"
        sx={{
          maxWidth: imageMaxWidth,
        }}
        image={imageUrl}
        alt={t(imageAlt)}
      />
    )}
  </Card>
);

export default CardWithImage;
