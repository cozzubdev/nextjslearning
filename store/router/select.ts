import { State } from 'store/type';
import { RouterState } from 'connected-next-router/types';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';

const selectRouterState = (state: State): RouterState => {
  return state.router;
};

const selectCurrentPathname = createSelector(
  selectRouterState,
  (state) => state.location.pathname
);
export const useCurrentPathname = (): string =>
  useSelector(selectCurrentPathname);
