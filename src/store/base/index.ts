import { combineReducers, createStore, applyMiddleware } from "redux";
import { UserReducer } from "../user/reducer";
import { AuthReducer } from "../auth/reducer";
import thunk from "redux-thunk";

export const allReducers = combineReducers({
  UserState: UserReducer,
  AuthState: AuthReducer,
});

export const store = createStore(allReducers, applyMiddleware(thunk));
