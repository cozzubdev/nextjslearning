import { Action as ReduxAction, Store as ReduxStore } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { NextPageContext } from 'next';
import { LocationChangeAction } from 'connected-next-router/actions';
import { RouterState } from 'connected-next-router/types';
import { interestsReducer } from './interests/reducer';
import { appReducer } from './app/reducer';
import { interestsActions } from './interests/action';
import { appActions } from './app/action';

export type State = {
  router: RouterState;
  interests: ReturnType<typeof interestsReducer>;
  app: ReturnType<typeof appReducer>;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFunction = (...args: any[]) => any;
type StringMap<T> = { [key: string]: T };

export type ActionsUnion<A extends StringMap<AnyFunction>> = ReturnType<
  A[keyof A]
>;

type RouterActions = LocationChangeAction;

type InterestActions = ActionsUnion<typeof interestsActions>;
type AppActions = ActionsUnion<typeof appActions>;

export type Actions = RouterActions | InterestActions | AppActions;

export type Action<T extends string = string, P = void> = P extends void
  ? ReduxAction<T>
  : ReduxAction<T> & Readonly<{ payload: P }>;

export type Dispatch = ThunkDispatch<State, void, Action>;

export type Store = ReduxStore<State, Actions> & {
  dispatch: Dispatch;
};

export type DispatchAction<T = void> = ThunkAction<
  Promise<T>,
  State,
  void,
  Action
>;

export interface StoreContext extends NextPageContext {
  store: Store;
}
