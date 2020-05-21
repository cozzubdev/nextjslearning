import { combineReducers, Reducer } from 'redux';
import { routerReducer } from 'connected-next-router';
import { Actions, State } from './type';

export const reducer: Reducer<State, Actions> = combineReducers({
  router: routerReducer,
});
