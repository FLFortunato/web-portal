import { combineReducers, createStore, applyMiddleware } from "redux";
import { UserReducer } from "../user/reducer";
import { AuthReducer } from "../auth/reducer";
import thunk from "redux-thunk";
import PostReducer from "../posts/reducer";

export const allReducers = combineReducers({
  UserState: UserReducer,
  AuthState: AuthReducer,
  PostState: PostReducer,
});

export const store = createStore(allReducers, applyMiddleware(thunk));
