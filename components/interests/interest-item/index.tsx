import React, { ReactElement, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { interestsActions } from 'store/interests/action';
import { InterestWrapper, InterestTitle, InterestImageWrapper } from './style';
import { InterestProps } from './type';

export const Interest = ({ data }: InterestProps): ReactElement => {
  const dispatch = useDispatch();
  const { thumbnail_url, title, user_name, viewer_count } = data;

  const imageWithSizes = thumbnail_url
    .replace('{width}', '500')
    .replace('{height}', '500');

  const handleClick = useCallback((): void => {
    dispatch(interestsActions.setInterest(data));
  }, []);

  return (
    <InterestWrapper onClick={handleClick}>
      <InterestImageWrapper>
        <img src={imageWithSizes} alt='twitch_thumbnail' />
      </InterestImageWrapper>
      <InterestTitle>{title}</InterestTitle>
      <InterestTitle>{`Streamed by "${user_name}"`}</InterestTitle>
      <InterestTitle>{`Viewers: ${viewer_count}`}</InterestTitle>
    </InterestWrapper>
  );
};
