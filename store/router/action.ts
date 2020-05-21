import { DispatchAction } from 'store/type';
import { routerActions } from 'connected-next-router';

export const getSimplePage = (newUrl: string): DispatchAction => {
  return async (dispatch, getState): Promise<void> => {
    const {
      router: {
        location: { pathname },
      },
    } = getState();

    const url = `/${newUrl}`;

    if (pathname !== url) {
      dispatch(routerActions.push(`/${newUrl}`, url));
    }
  };
};
