import { UserState } from "./../models";

const initialState: UserState = {
  id: "",
  username: "",
  isLoading: false,
  isAuthenticated: false,
  error: null,
};

const rootReducer = (state = initialState, action): UserState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
