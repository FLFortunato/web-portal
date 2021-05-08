import { GET_ALL_USERS, userState } from "./types";

const initialState: userState = {
  results: [],
};

export const UserReducer = (state: any = initialState, action: any) => {
  const { results, type } = action;

  switch (type) {
    case GET_ALL_USERS:
      return { ...state, results };

    default:
      return state;
  }
};
