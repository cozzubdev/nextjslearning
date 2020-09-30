import { AppData } from './type';
import { Actions } from '../type';
import { AppTypes } from './action';

export const appInitialState: Readonly<AppData> = {
  loginStatus: false,
};

export const appReducer = (
  state: AppData = appInitialState,
  action: Actions
): AppData => {
  switch (action.type) {
    case AppTypes.SET_LOGIN_STATUS: {
      return {
        ...state,
        loginStatus: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
