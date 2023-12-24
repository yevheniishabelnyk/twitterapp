import { TweetItemType } from "./../models";
import { ActionTypes } from "./actionTypes";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

export interface AppState {
  id: string;
  username: string;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string;
  tweets: TweetItemType[];
}

export interface FetchUserDataPendingAction {
  type: ActionTypes.FETCH_USER_DATA_PENDING;
}

export interface FetchUserDataSuccessAction {
  type: ActionTypes.FETCH_USER_DATA_SUCCESS;
  payload: {
    username: string;
  };
}

export interface FetchUserDataFailureAction {
  type: ActionTypes.FETCH_USER_DATA_FAILURE;
  payload: string;
}

export interface FetchUserTweetsPendingAction {
  type: ActionTypes.FETCH_USER_TWEETS_PENDING;
}

export interface FetchUserTweetsSuccessAction {
  type: ActionTypes.FETCH_USER_TWEETS_SUCCESS;
  payload: TweetItemType[];
}

export interface FetchUserTweetsFailureAction {
  type: ActionTypes.FETCH_USER_TWEETS_FAILURE;
  payload: string;
}

export interface LogoutAction {
  type: ActionTypes.LOGOUT_ACTION;
}

export type AppAction =
  | FetchUserDataPendingAction
  | FetchUserDataSuccessAction
  | FetchUserDataFailureAction
  | FetchUserTweetsPendingAction
  | FetchUserTweetsSuccessAction
  | FetchUserTweetsFailureAction
  | LogoutAction;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, null, AppAction>;
export type AppDispatch = ThunkDispatch<AppState, null, AppAction>;
