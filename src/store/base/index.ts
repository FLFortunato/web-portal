import { combineReducers, createStore, applyMiddleware } from "redux";
import { UserReducer } from "../user/reducer";
import thunk from "redux-thunk";

export const allReducers = combineReducers({
  UserReducer,
});

export const store = createStore(allReducers, applyMiddleware(thunk));
