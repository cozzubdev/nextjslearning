import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { createRouterMiddleware } from 'connected-next-router';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import { reducer } from './reducer';
import { Store, State, Actions } from './type';

export const makeStore: MakeStore<State, Actions> = (
  context: Context
): Store => {
  return createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(thunkMiddleware, createRouterMiddleware())
    )
  );
};

export const reduxWrapper = createWrapper(makeStore, {
  debug: true,
});
