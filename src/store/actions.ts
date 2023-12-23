import { Dispatch } from "redux";

import { ActionTypes } from "./actionTypes";
import { AppThunk, AppAction } from "./types";

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
