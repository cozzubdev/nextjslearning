import { TwitchData } from 'components/interests/type';

export type InterestsProps = {
  channels: TwitchChannels;
  follows: TwitchFollows;
};

export type TwitchChannels = {
  data: TwitchData[];
};

export type TwitchFollows = {
  data: TwitchFollow[];
};

export type TwitchFollow = {
  from_id: string | number;
  from_name: string;
  to_id: string | number;
  to_name: string;
  followed_at: Date;
};

export type TwitchToken = {
  access_token: string;
  expires_in: number;
  token_type: 'bearer';
};
