/*
  Created by François LELIEVRE ©
*/

/* [+] Community imports */
import React from 'react';

/* [+] MaterialUI imports */
import {
  Box,
  Slide,
  Typography,
} from '@mui/material';

/* [+] assets imports */
import usePageResponsiveTitle from './PageResponsiveTitle.logic/usePageResponsiveTitle';

const PageResponsiveTitle = () => {
  const {
    pageTitleRef,
    scrollToComponentTop,
    isPageAtTop,
    isMobile,
    pageTitle,
  } = usePageResponsiveTitle();

  return (
    <Box
      sx={{
        p: '10px 10px 10px 20px',
        flexGrow: 1,
        width: 0,
      }}
    >
      <Box
        ref={pageTitleRef}
        onClick={scrollToComponentTop}
      >
        <Slide
          direction="up"
          in={!isPageAtTop}
          mountOnEnter
          unmountOnExit
          container={pageTitleRef.current}
          timeout={{ enter: 200, exit: 75 }}
        >
          <Typography
            align="center"
            sx={{
              cursor: 'pointer',
              fontSize: isMobile ? '1em' : '1.5em',
              paddingRight: isMobile ? '0em' : '6em',
              paddingLeft: isMobile ? '2.5em' : '0em',
              fontWeight: '600',
            }}
          >
            {pageTitle}
          </Typography>
        </Slide>
      </Box>
    </Box>
  );
};

export default PageResponsiveTitle;
