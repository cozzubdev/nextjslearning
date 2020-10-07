import { ReactElement } from 'react';

import Grid from '@material-ui/core/Grid';

import { Contact } from 'components/about/contact';
import { Profile } from 'components/about/profile';
import { Skills } from 'components/about/skills';
import { Experience } from 'components/about/experience';

import { getInfo } from 'services/linked-in';

import { useAboutstyles } from 'hooks/useStyles';

import { StoreContext } from 'store/type';
import { AboutProps } from './type';

export const AboutPage = ({ profile }: AboutProps): ReactElement => {
  const classes = useAboutstyles();

  const { basics, skills, work } = profile;

  return (
    <Grid container justify='center' className={classes.content}>
      <Grid
        xs={12}
        sm={12}
        md={12}
        item
        container
        direction='column'
        wrap='nowrap'
        className={classes.padding0}
        lg={12}>
        <Profile basics={basics} />
        <Experience experience={work} />
        <Skills skills={skills} />
        <Contact basics={basics} />
      </Grid>
    </Grid>
  );
};

AboutPage.getInitialProps = async (ctx: StoreContext): Promise<AboutProps> => {
  const { req } = ctx;
  const profile = await getInfo();

  return { profile };
};
