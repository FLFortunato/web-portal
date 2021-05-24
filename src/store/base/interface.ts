import { DefaultRootState } from "react-redux";
import { authState } from "../auth/types";
import { postsState } from "../posts/types";
import { userState } from "../user/types";

export interface ReduxState extends DefaultRootState {
  UserState: userState;
  AuthState: authState;
  PostState: postsState;
}
