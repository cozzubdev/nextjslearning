import React, { ReactElement, useState, useCallback, ChangeEvent } from 'react';
import { InterestsSearch } from 'components/interests/interests-search';
import { InterestList } from 'components/interests';
import {
  getTwitchChannels,
  getToken,
  getMyFollows,
} from 'services/twitch/twitch.service';
import { NextPage } from 'next';
import { setCookie, parseCookies } from 'nookies';
import { StoreContext } from 'store/type';
import { InterestsProps } from './type';

export const Interests: NextPage<InterestsProps> = ({
  channels,
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

Interests.getInitialProps = async (
  ctx: StoreContext
): Promise<InterestsProps> => {
  const { twitchToken } = parseCookies(ctx);

  if (!twitchToken) {
    const { access_token } = await getToken();
    setCookie(ctx, 'twitchToken', access_token, {});
  }
  const follows = await getMyFollows(twitchToken);
  const channels = await getTwitchChannels(twitchToken, follows.data);

  return { channels, follows };
};
