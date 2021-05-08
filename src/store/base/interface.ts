import { DefaultRootState } from "react-redux";
import { UserReducer } from "../user/reducer";
import { userState } from "../user/types";

export interface ReduxState extends DefaultRootState {
  userState: userState;
}
