import {
  ReactElement,
  useState,
  useCallback,
  ChangeEvent,
  useRef,
} from 'react';
import { NextPage } from 'next';
import { setCookie, parseCookies } from 'nookies';

import { StoreContext } from 'store/type';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { useStyles } from 'hooks/useStyles';

import { InterestsSearch } from 'components/interests/interests-search';
import { InterestList } from 'components/interests';

import { getTwitchChannels, getToken, getMyFollows } from 'services/twitch';

import { InterestsProps } from './type';

export const Interests: NextPage<InterestsProps> = ({
  channels,
}: InterestsProps): ReactElement => {
  const [currentChannels, setCurrentChannels] = useState(channels?.data);

  const input = useRef<HTMLInputElement>();

  const filterInterests = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCurrentChannels(
      channels?.data?.filter((channel) =>
        channel.user_name.includes(e.target.value)
      )
    );
  }, []);

  const handleButtonSearch = useCallback(() => {
    input?.current?.focus();
  }, []);

  const classes = useStyles();

  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth='xl'>
          <Typography
            component='h1'
            variant='h2'
            align='center'
            color='textPrimary'
            gutterBottom>
            Album layout
          </Typography>
          <Typography
            variant='h5'
            align='center'
            color='textSecondary'
            paragraph>
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don&apos;t simply skip over it entirely.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify='center'>
              <Grid item>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleButtonSearch}>
                  Start search interests...
                </Button>
              </Grid>
              <Grid item>
                <Button variant='outlined' color='primary'>
                  Secondary action
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>

      <InterestsSearch handleChange={filterInterests} inputRef={input} />
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
