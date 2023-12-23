import { AppState } from "./types";

export const getUseId = (state: AppState) => state.id;

export const getUsername = (state: AppState) => state.username;

export const getIsAuthenticated = (state: AppState) => state.isAuthenticated;

export const getIsLoading = (state: AppState) => state.isLoading;
