import { ReactElement } from 'react';

import Grid from '@material-ui/core/Grid';

import { Icon, Container, IconLabel, NextJsIcon } from './style';

import { SkillsProps } from './type';

export const Skills = ({ skills }: SkillsProps): ReactElement => {
  return (
    <Grid alignItems='center' direction='column' container spacing={0}>
      <h2>Professional Skills</h2>
      <Grid
        container
        direction='row'
        alignItems='stretch'
        justify='space-between'
        spacing={0}>
        {skills?.length > 0 &&
          skills.map((skill) => (
            <Container key={skill.name}>
              {skill.iconClass ? (
                <Icon className={skill.iconClass} />
              ) : (
                <NextJsIcon>
                  <span
                    className='iconify'
                    data-icon='logos-nextjs'
                    data-inline='false'
                  />
                </NextJsIcon>
              )}
              <IconLabel>{skill.name}</IconLabel>
            </Container>
          ))}
      </Grid>
    </Grid>
  );
};
