import { ReactElement, useCallback, useState, ChangeEvent } from 'react';
import Head from 'next/head';
import Router from 'next/router';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { useInterests } from 'store/interests/select';
import { TwitchData } from 'components/interests/type';
import { InterestList } from 'components/interests';
import { InterestsSearch } from 'components/interests/interests-search';
import { parseCookies } from 'nookies';
import { StoreContext } from 'store/type';

const Index = (): ReactElement => {
  const { token } = parseCookies(ctx);
  if (!token) Router.push(`/registration`, `/registration`);

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
        <Container>
          <Grid xs={12} sm={6} md={6}>
            <InterestsSearch handleChange={filterInterests} />
          </Grid>
          <InterestList data={currentChannels} />
        </Container>
      </main>
    </>
  );
};

export default Index;

Index.getInitialProps = async (ctx: StoreContext) => {
  const { res, req } = ctx;

  const { token } = parseCookies(ctx);

  if (!token) {
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
