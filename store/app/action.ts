import { Action } from 'store/type';
import { createAction } from 'store/action';

export enum AppTypes {
  SET_LOGIN_STATUS = 'app/SET_LOGIN_STATUS',
}

export const appActions = {
  setLogin: (
    status: boolean
  ): Action<AppTypes> &
    Readonly<{
      payload: boolean;
    }> => createAction(AppTypes.SET_LOGIN_STATUS, status),
};
