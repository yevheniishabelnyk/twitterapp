import { UserState, TweetItemType } from "./../models";
import { ActionTypes } from "./actionTypes";
import { AppAction } from "./types";

import uuid from "react-native-uuid";

const initialState: UserState = {
  id: "",
  username: "",
  isLoading: false,
  isAuthenticated: false,
  error: null,
  tweets: [],
};

const rootReducer = (state: UserState = initialState, action: AppAction): UserState => {
  switch (action.type) {
    case ActionTypes.FETCH_USER_DATA_PENDING:
      return { ...state, isLoading: true, error: null };

    case ActionTypes.FETCH_USER_DATA_SUCCESS: {
      const id = uuid.v4() as string;

      return { ...state, id, username: action.payload.username, isAuthenticated: true, isLoading: false, error: null };
    }

    case ActionTypes.FETCH_USER_DATA_FAILURE:
      return { ...state, isAuthenticated: false, isLoading: false, error: action.payload };

    case ActionTypes.FETCH_USER_TWEETS_PENDING:
      return { ...state, isLoading: true, error: null };

    case ActionTypes.FETCH_USER_TWEETS_SUCCESS: {
      return { ...state, tweets: action.payload, isLoading: false, error: null };
    }

    case ActionTypes.FETCH_USER_TWEETS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    case ActionTypes.LOGOUT_ACTION:
      return { ...initialState };

    default:
      return state;
  }
};

export default rootReducer;
