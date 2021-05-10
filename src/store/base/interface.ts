import { DefaultRootState } from "react-redux";
import { authState } from "../auth/types";
import { UserReducer } from "../user/reducer";
import { userState } from "../user/types";

export interface ReduxState extends DefaultRootState {
  UserState: userState;
  AuthState: authState;
}
