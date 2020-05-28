import { Action as ReduxAction, Store as ReduxStore } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { NextPageContext } from 'next';
import { LocationChangeAction } from 'connected-next-router/actions';
import { RouterState } from 'connected-next-router/types';
import { interestsReducer } from './interests/reducer';
import { interestsActions } from './interests/action';

export type State = {
  router: RouterState;
  interests: ReturnType<typeof interestsReducer>;
};

type RouterActions = LocationChangeAction;
type ConfigActions = ActionsUnion<typeof interestsActions>;

export type Actions = RouterActions | ConfigActions;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFunction = (...args: any[]) => any;
type StringMap<T> = { [key: string]: T };

export type Action<T extends string = string, P = void> = P extends void
  ? ReduxAction<T>
  : ReduxAction<T> & Readonly<{ payload: P }>;

export type ActionsUnion<A extends StringMap<AnyFunction>> = ReturnType<
  A[keyof A]
>;

export type Store = ReduxStore<State, Actions> & {
  dispatch: Dispatch;
};

export type Dispatch = ThunkDispatch<State, void, Action>;

export type DispatchAction<T = void> = ThunkAction<
  Promise<T>,
  State,
  void,
  Action
>;

export interface StoreContext extends NextPageContext {
  store: Store;
}
