import Head from 'next/head';
import Router from 'next/router';
import { ReactElement, useCallback, useState, ChangeEvent } from 'react';

import { useInterests } from 'store/interests/select';
import { TwitchData } from 'components/interests/type';
import { InterestList } from 'components/interests';
import { InterestsSearch } from 'components/interests/interests-search';
import { parseCookies } from 'nookies';
import { StoreContext } from 'store/type';

const Index = (): ReactElement => {
  if (!parseCookies()) Router.push(`/registration`, `/registration`);

  const channels = useInterests() || [];
  const [currentChannels, setCurrentChannels] = useState<TwitchData[]>(
    channels
  );

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

Index.getInitialProps = async (ctx: StoreContext) => {
  const { res, req } = ctx;

  const { loginStatus } = parseCookies(ctx);

  if (Number(loginStatus) === 0) {
    if (res && typeof window === 'undefined') {
      res.writeHead(302, {
        Location: `/registration`,
        'Content-Type': 'text/html; charset=utf-8',
      });
      res.end();
      return {};
    }
  }

  return {};
};
