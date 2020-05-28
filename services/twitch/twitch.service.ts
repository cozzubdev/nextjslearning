import fetch from 'isomorphic-unfetch';
import { TwitchFollows, TwitchFollow } from 'scenes/interests-scene/type';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getTwitchChannels = async (
  token: string,
  follows: TwitchFollow[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  const reqInit: RequestInit = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Client-ID': 'wwegfo5y2hczsh905atbnyvpt02uyo',
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getToken = async (): Promise<any> => {
  const reqInit: RequestInit = {
    method: 'POST',
  };

  const response = await fetch(
    'https://id.twitch.tv/oauth2/token?client_id=wwegfo5y2hczsh905atbnyvpt02uyo&client_secret=urm8ze0i052eqnyyiar2fbcsoh4g6i&grant_type=client_credentials',
    reqInit
  );

  return response.json();
};

export const getMyFollows = async (token: string): Promise<TwitchFollows> => {
  const reqInit: RequestInit = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Client-ID': 'wwegfo5y2hczsh905atbnyvpt02uyo',
    },
    method: 'GET',
  };

  const response = await fetch(
    'https://api.twitch.tv/helix/users/follows?from_id=163876085 ',
    reqInit
  );

  return response.json();
};
