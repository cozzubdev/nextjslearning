import { InterestsData } from './type';
import { Actions } from '../type';
import { InterestTypes } from './action';

export const interestsInitialState: Readonly<InterestsData> = {
  interests: [],
};

export const interestsReducer = (
  state: InterestsData = interestsInitialState,
  action: Actions
): InterestsData => {
  switch (action.type) {
    case InterestTypes.SET_INTEREST: {
      return {
        ...state,
        interests: [...state.interests, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};
