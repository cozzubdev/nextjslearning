import { ReactElement } from 'react';

import Grid from '@material-ui/core/Grid';
import { Heading, WorkContainer } from 'components/about/experience/style';

import { Project } from './project';

import { ProjectsProps } from './type';

export const Projects = ({ projects }: ProjectsProps): ReactElement => {
  return (
    <>
      <Heading>Projects</Heading>
      <Grid alignItems='flex-start' wrap='nowrap' container spacing={0}>
        <WorkContainer spacing={0}>
          {projects?.length > 0 &&
            projects.map((project) => (
              <Project key={project?.url} project={project} />
            ))}
        </WorkContainer>
      </Grid>
    </>
  );
};
