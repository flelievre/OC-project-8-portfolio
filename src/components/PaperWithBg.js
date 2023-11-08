import React from 'react';
import {
  Link as ReactRouterLink,
} from 'react-router-dom';
import {
  Grid,
  Typography,
  Box,
  Paper,
  Button,
} from '@mui/material';

const PaperWithBg = ({
  bgUrl = '',
  text = '',
  component = 'h3',
  variant = 'h3',
  t = (s) => s,
  minHeight = 300,
  actionButtonText = '',
  actionButtonLink = '',
  xs = 12,
  sm = 12,
  md = 4,
  textSx = {},
  cursor = 'pointer',
  theme: {
    palette: {
      primary: {
        main = '#000',
      } = {},
    } = {},
  } = {},
}) => (
  <Grid
    item
    xs={xs}
    sm={sm}
    md={md}
  >
    <Paper
      elevation={1}
      sx={{
        position: 'relative',
        backgroundImage: `url("${bgUrl}")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: {
          xs: 150,
          sm: minHeight,
        },
        display: 'flex',
        justifyContent: 'end',
        flexDirection: 'column',
        alignItems: 'baseline',
        p: 2,
        cursor: cursor,
        '&:hover': {
          boxShadow: `0 0 10px ${main}`,
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: {
            xs: 150,
            sm: minHeight,
          },
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))',
        }}
      />
      <Typography
        component={component}
        variant={variant}
        sx={{
          color: 'white',
          zIndex: 2,
          ...textSx,
        }}
      >
        {t(text)}
      </Typography>
      {actionButtonText && (
        <Box
          sx={{
            width: '100%',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Button
            variant="contained"
            component={ReactRouterLink}
            to={actionButtonLink}
            sx={{
              zIndex: 2,
            }}
          >
            {t(actionButtonText)}
          </Button>
        </Box>
      )}
    </Paper>
  </Grid>
);

export default PaperWithBg;
