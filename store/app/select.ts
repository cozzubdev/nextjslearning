import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { AppData } from './type';
import { State } from '../type';

export const selectAppState = (state: State): AppData => {
  return state.app;
};

export const selectLoginStatus = createSelector(
  selectAppState,
  (state) => state.loginStatus
);

export const useLoginsStatus = (): boolean => useSelector(selectLoginStatus);
