import Head from 'next/head';
import React, {
  ReactElement,
  useEffect,
  useCallback,
  useState,
  ChangeEvent,
} from 'react';
import Router from 'next/router';
import { useInterests } from 'store/interests/select';
import { TwitchData } from 'components/interests/type';
import { InterestList } from 'components/interests';
import { InterestsSearch } from 'components/interests/interests-search';

const Index = (): ReactElement => {
  const channels = useInterests() || [];
  const [currentChannels, setCurrentChannels] = useState<TwitchData[]>(
    channels
  );
  let loginStatus: string | null = '';

  useEffect(() => {
    loginStatus = localStorage.getItem('email');
    if (!loginStatus) Router.replace('/registration', 'registration');
  }, []);

  const filterInterests = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCurrentChannels(
      channels?.filter((channel) => channel.user_name.includes(e.target.value))
    );
  }, []);
  return (
    <>
      <Head>
        <meta name='robots' content='noindex, nofollow' />
      </Head>
      <main>
        <>
          <InterestsSearch handleChange={filterInterests} />
          <InterestList data={currentChannels} />
        </>
      </main>
    </>
  );
};

export default Index;
