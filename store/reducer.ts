import { combineReducers, Reducer } from 'redux';
import { routerReducer } from 'connected-next-router';
import { Actions, State } from './type';
import { interestsReducer } from './interests/reducer';
import { appReducer } from './app/reducer';

export const reducer: Reducer<State, Actions> = combineReducers({
  router: routerReducer,
  interests: interestsReducer,
  app: appReducer,
});
