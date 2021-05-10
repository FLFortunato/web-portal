import { LOGGING_USER, REFRESH_TOKEN } from "./types";

const initialState = {
  payload: null,
  loggedIn: false,
};
export const AuthReducer = (state: any = initialState, action: any) => {
  const { type, loggedIn } = action;
  switch (type) {
    case LOGGING_USER:
      return { ...state, loggedIn };
    case REFRESH_TOKEN:
      return state;
    default:
      return state;
  }
};
