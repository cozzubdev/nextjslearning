import React, { ReactElement, useState, useCallback, ChangeEvent } from 'react';
import { InterestsSearch } from 'components/interests/interests-search';
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
  const [currentChannels, setCurrentChannels] = useState(channels?.data);

  const filterInterests = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCurrentChannels(
      channels?.data.filter((channel) =>
        channel.user_name.includes(e.target.value)
      )
    );
  }, []);

  return (
    <>
      <InterestsSearch handleChange={filterInterests} />
      <InterestList data={currentChannels} />
    </>
  );
};

Interests.getInitialProps = async (): Promise<InterestsProps> => {
  const token = await getToken();
  const follows = await getMyFollows(token.access_token);
  const channels = await getTwitchChannels(token.access_token, follows.data);

  return { channels, follows };
};
