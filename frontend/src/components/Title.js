import React from 'react';
import {
  Grid,
  Typography,
  Box,
} from '@mui/material';

const Title = ({
  text = '',
  highlightedText = '',
  t = (s) => s,
  component = 'h3',
  variant = 'h2',
}) => (
  <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    sx={{
      mt: 5,
    }}
  >
    <Typography
      variant={variant}
      component={component}
    >
      {t(text)}
      {highlightedText && (
        <Box
          sx={{
            color: 'primary.main',
            display: 'inline-block',
            ml: 1,
          }}
        >
          {t(highlightedText)}
        </Box>
      )}
    </Typography>
  </Grid>
);

export default Title;
