import { ReactElement } from 'react';

import Grid from '@material-ui/core/Grid';

import { Contact } from 'components/about/contact';

import { getInfo } from 'services/linked-in';
import { StoreContext } from 'store/type';
import { useAboutstyles } from 'hooks/useStyles';

export interface AboutProps {
  profileInfo: unknown;
}

export const AboutPage = (): ReactElement => {
  const classes = useAboutstyles();
  return (
    <Grid container justify='center' className={classes.content}>
      <Grid
        xs={12}
        sm={12}
        md={8}
        item
        container
        direction='column'
        className={classes.padding0}
        lg={8}>
        <Contact />
      </Grid>
    </Grid>
  );
};

AboutPage.getInitialProps = async (ctx: StoreContext): Promise<AboutProps> => {
  const { req } = ctx;
  const profileInfo = await getInfo();

  return { profileInfo };
};
