import React from 'react';
import {  
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import {
  Icon,
} from '@iconify/react';
import ErrorPage from '../ErrorPage/ErrorPage';
import useProjectPage from './ProjectPage.logic/useProjectPage';

const ProjectPage = () => {
  const {
    generateAppRoute,
    t,
    id,
    title,
    subtitle,
    mission,
    skillsAcquired,
    details,
    githubLink,
    isMatchingAProject,
  } = useProjectPage() || {};
  return isMatchingAProject
    ? (
      <Grid
        container
        spacing={2}
        direction="column"
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
        >
          {t(title)}
        </Typography>
        <Typography
          component="h2"
          variant="h3"
          align="center"
        >
          {t(subtitle)}
        </Typography>
        <Typography
          component="a"
          href={githubLink}
          target="_blank"
          sx={{
            width: '100vw',
            textAlign: 'center',
            mb: 5,
            mt: 1,
          }}
        >
          {t('See on Github')}
        </Typography>
        <Typography
          component="h3"
          variant="h4"
          component="p"
        >
          {t('Mission')}
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            mb: 5,
          }}
        >
          {t(mission)}
        </Typography>
        <Typography
          component="h3"
          variant="h4"
        >
          {t('Skills acquired')}
        </Typography>
        <List>
          {skillsAcquired.map((skill, index) => (
            <ListItem key={`skill-${index}`}>
              <ListItemIcon>
                <Icon icon="radix-icons:check" />
              </ListItemIcon>
              <ListItemText
                primary={t(skill)}
              />
            </ListItem>
          ))}
        </List>
        <Typography
          component="h3"
          variant="h4"
        >
          {t('Details')}
        </Typography>
        <List>
          {details.map((detail, index) => (
            <ListItem
              key={`detail-${index}`}
              sx={{
                pl: 0,
              }}
            >
              <ListItemText
                primary={t(detail)}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
    )
    : (
      <ErrorPage />
    )
};

export default ProjectPage;
