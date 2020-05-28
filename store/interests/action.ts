import { Action } from 'store/type';
import { createAction } from 'store/action';
import { TwitchData } from 'components/interests/type';

export enum InterestTypes {
  SET_INTEREST = 'interests/SET_INTEREST',
}

export const interestsActions = {
  setInterest: (
    interest: TwitchData
  ): Action<InterestTypes> &
    Readonly<{
      payload: TwitchData;
    }> => createAction(InterestTypes.SET_INTEREST, interest),
};
