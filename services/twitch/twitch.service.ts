import fetch from 'isomorphic-unfetch';
import {
  TwitchFollows,
  TwitchFollow,
  TwitchToken,
  TwitchChannels,
} from 'scenes/interests-scene/type';

export const getTwitchChannels = async (
  token: string,
  follows: TwitchFollow[]
): Promise<TwitchChannels> => {
  const reqInit: RequestInit = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Client-ID': process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID!,
    },
    method: 'GET',
  };

  const userId = follows
    .map((follow) => follow.to_id.toString())
    .join('&user_id=');

  const response = await fetch(
    `https://api.twitch.tv/helix/streams?user_id=${userId}`,
    reqInit
  );

  return response.json();
};

export const getToken = async (): Promise<TwitchToken> => {
  const reqInit: RequestInit = {
    method: 'POST',
  };

  const response = await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
    reqInit
  );

  return response.json();
};

export const getMyFollows = async (
  accessToken: string
): Promise<TwitchFollows> => {
  const reqInit: RequestInit = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Client-ID': process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID!,
    },
    method: 'GET',
  };

  const response = await fetch(
    `https://api.twitch.tv/helix/users/follows?from_id=${process.env.NEXT_PUBLIC_TWITCH_USER_ID}`,
    reqInit
  );

  return response.json();
};
