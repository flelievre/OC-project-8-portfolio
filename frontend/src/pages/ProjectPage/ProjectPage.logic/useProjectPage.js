import {
  useContext,
} from 'react';
import {
  useParams,
} from 'react-router-dom';
import {
  WebAppContext,
} from '../../../contexts';
import {
  PROJECTS_INFOS,
} from '../../../constants';

const useProjectPage = () => {
  const {
    projectId,
  } = useParams();

  const matchingProjectsIndex = PROJECTS_INFOS.findIndex(({ id = '' }) => id === projectId);

  const isMatchingAProject = (matchingProjectsIndex !== -1)

  const projectInfos = isMatchingAProject
    ? PROJECTS_INFOS[matchingProjectsIndex]
    : {};

  const {
    id = '',
    title = '',
    subtitle = '',
    mission = '',
    skillsAcquired = [],
    details = [],
    githubLink = '',
  } = projectInfos;

  const {
    generateAppRoute,
    t,
  } = useContext(WebAppContext);

  return {
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
  };
};

export default useProjectPage;
