import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { TwitchData } from 'components/interests/type';
import { State } from '../type';
import { InterestsData } from './type';

export const selectProductsState = (state: State): InterestsData => {
  return state.interests;
};

export const selectInterests = createSelector(
  selectProductsState,
  (state) => state.interests
);

export const useInterests = (): TwitchData[] => useSelector(selectInterests);
