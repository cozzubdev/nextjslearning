import { ReactElement } from 'react';

import { ContactInfo } from 'components/about/contact/contact-info';

import GoogleMapReact from 'google-map-react';

import {
  Container,
  GridContainer,
  ContactContainer,
  MapContainer,
} from './style';

const defaultCenter = { lat: 50.0851, lng: 36.3444 };
const googleMapKey = {
  key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
};

export const Map = (): ReactElement => {
  return (
    <Container>
      <GridContainer
        container
        direction='column'
        spacing={0}
        alignItems='stretch'
        wrap='nowrap'>
        <ContactContainer item>
          <ContactInfo />
        </ContactContainer>
        <MapContainer item xs={12}>
          <GoogleMapReact
            bootstrapURLKeys={googleMapKey}
            defaultCenter={defaultCenter}
            defaultZoom={11}
          />
        </MapContainer>
      </GridContainer>
    </Container>
  );
};
