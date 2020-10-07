import { ReactElement } from 'react';

import Grid from '@material-ui/core/Grid';

import { Work } from './work';

import { Heading, WorkContainer } from './style';

import { ExperienceProps } from './type';

export const Experience = ({ experience }: ExperienceProps): ReactElement => {
  return (
    <>
      <Heading>Experience</Heading>
      <Grid
        alignItems='flex-start'
        wrap='nowrap'
        direction='column'
        container
        spacing={0}>
        <WorkContainer direction='row' spacing={0}>
          {experience &&
            experience.map((work) => <Work key={work?.summary} work={work} />)}
        </WorkContainer>
      </Grid>
    </>
  );
};
