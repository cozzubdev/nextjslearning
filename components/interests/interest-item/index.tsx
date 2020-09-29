import React, { ReactElement, useCallback } from 'react';
import dynamic from 'next/dynamic';

import { useStyles } from 'hooks/useStyles';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { interestsActions } from 'store/interests/action';

import { TwitchEmbedProps } from 'models/twitch-player';
import { InterestProps } from './type';

const TwitchEmbedPlayer = dynamic<TwitchEmbedProps>(
  () => import('react-twitch-embed').then((mod) => mod.TwitchEmbed),
  {
    ssr: false,
  }
);

export const Interest = ({ data }: InterestProps): ReactElement => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { title, user_name, viewer_count, id } = data;

  const handleClick = useCallback((): void => {
    dispatch(interestsActions.setInterest(data));
  }, []);

  return (
    <Grid item key={id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <TwitchEmbedPlayer
          channel={user_name}
          id={id as string}
          theme='dark'
          muted
          allowFullscreen
          withChat={false}
          width='100%'
          height='240px'
          autoplay={false}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant='h5' component='h2'>
            {title}
          </Typography>
          <Typography>
            {`Streamed by "${user_name}"`}
            <br />
            {`Viewers: ${viewer_count}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' color='primary' onClick={handleClick}>
            Add to favorite
          </Button>
          <Button size='small' color='primary'>
            Edit
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
