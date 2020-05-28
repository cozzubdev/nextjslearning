import React, { ReactElement } from 'react';
import { InterestWrapper, InterestTitle, InterestImageWrapper } from './style';
import { InterestProps } from './type';

export const Interest = ({ data }: InterestProps): ReactElement => {
  const { thumbnail_url, title } = data;

  const imageWithSizes = thumbnail_url
    .replace('{width}', '1000')
    .replace('{height}', '1000');

  return (
    <InterestWrapper>
      <InterestImageWrapper>
        <img src={imageWithSizes} alt='twitch_thumbnail' />
      </InterestImageWrapper>
      <InterestTitle>{title}</InterestTitle>
    </InterestWrapper>
  );
};

// game_id: string | number;
// id: string | number;
// language: string;
// started_at: Date;
// tag_ids: [string[]];
// thumbnail_url: string;
// title: string;
// type: string;
// user_id: string | number;
// user_name: string;
// viewer_count: number;
