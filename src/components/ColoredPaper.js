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

const ColoredPaper = ({
  bgColor = '',
  text = '',
  subText = '',
  t = (s) => s,
  minHeight = 300,
  xs = 12,
  sm = 12,
  md = 4,
  textSx = {},
  subTextSx = {},
  linearOpacity = false,
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
        backgroundColor: `rgba(${bgColor}, 0.1)`,
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
      {linearOpacity && (
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
      )}
      <Typography
        component="h3"
        variant="h3"
        sx={{
          color: 'white',
          zIndex: 2,
          ...textSx,
        }}
      >
        {t(text)}
      </Typography>
      {subText && (
        <Box
          sx={{
            width: '100%',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Typography
            component="h3"
            variant="body1"
            sx={{
              color: 'white',
              zIndex: 2,
              ...subTextSx,
            }}
          >
            {t(subText)}
          </Typography>
        </Box>
      )}
    </Paper>
  </Grid>
);

export default ColoredPaper;
