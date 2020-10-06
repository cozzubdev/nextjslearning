import { ReactElement } from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { ContactInfo } from 'components/about/contact/contact-info';

import GoogleMapReact from 'google-map-react';

import { useMapStyles } from 'hooks/useStyles';

const defaultCenter = { lat: 50.0851, lng: 36.3444 };
const googleMapKey = {
  key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
};

export const MapContainer = (): ReactElement => {
  const classes = useMapStyles();

  return (
    <Paper className={classes.container}>
      <Grid
        container
        direction='column'
        spacing={0}
        alignItems='stretch'
        className={classes.gridContainer}>
        <Grid className={classes.contactContainer} item>
          <ContactInfo />
        </Grid>
        <Grid className={classes.mapContainer} item xs={12}>
          <GoogleMapReact
            bootstrapURLKeys={googleMapKey}
            defaultCenter={defaultCenter}
            defaultZoom={11}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
