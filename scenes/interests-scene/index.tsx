import React, { ReactElement } from 'react';

import { InterestList } from 'components/interests';
import {
  getTwitchChannels,
  getToken,
  getMyFollows,
} from 'services/twitch/twitch.service';
import { NextPage } from 'next';
import { InterestsProps } from './type';

export const Interests: NextPage<InterestsProps> = ({
  channels,
  follows,
}: InterestsProps): ReactElement => {
  return <InterestList data={channels?.data} />;
};

Interests.getInitialProps = async (): Promise<InterestsProps> => {
  const token = await getToken();
  const follows = await getMyFollows(token.access_token);
  const channels = await getTwitchChannels(token.access_token, follows.data);

  return { channels, follows };
};
