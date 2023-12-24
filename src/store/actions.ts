import { MAX_TWEETS_LENGTH } from "./../utils/constants";
import { TWEETS_PAGES } from "./../mock";
import { Dispatch } from "redux";

import { ActionTypes } from "./actionTypes";
import { AppThunk, AppAction } from "./types";

import { TWEETS, TWEETS_LOADED } from "../mock";

// Async action using redux-thunk
export const fetchUserData = ({ username }: { username: string }): AppThunk => {
  return async (dispatch: Dispatch<AppAction>) => {
    dispatch({ type: ActionTypes.FETCH_USER_DATA_PENDING });

    try {
      // twitter API
      // GET: /users/by/username/:username

      // loading simulation
      await fetchDataFromApi();

      dispatch({ type: ActionTypes.FETCH_USER_DATA_SUCCESS, payload: { username } });
    } catch (error) {
      dispatch({ type: ActionTypes.FETCH_USER_DATA_FAILURE, payload: error.message });
    }
  };
};

export const fetchUserTweetsData = (offset: number): AppThunk => {
  return async (dispatch: Dispatch<AppAction>, getState) => {
    dispatch({ type: ActionTypes.FETCH_USER_TWEETS_PENDING });

    const userTweets = getState().tweets;

    try {
      // twitter API
      // GET: users/:id/tweets

      const payload = offset === 0 ? TWEETS : [...userTweets, ...TWEETS_LOADED];

      dispatch({ type: ActionTypes.FETCH_USER_TWEETS_SUCCESS, payload: payload });
    } catch (error) {
      dispatch({ type: ActionTypes.FETCH_USER_TWEETS_FAILURE, payload: error.message });
    }
  };
};

// Replace this with your actual asynchronous API call
const fetchDataFromApi = async () => {
  // Simulated API call
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve("Data from API"), 2000);
  });
};

export const logout = (): AppThunk => {
  return async (dispatch: Dispatch<AppAction>) => {
    try {
      dispatch({ type: ActionTypes.LOGOUT_ACTION });
    } catch (error) {
      console.log("error", error);
    }
  };
};
