import { AuthService } from "../../services/auth/auth.service";
import { LOGGING_USER, REFRESH_TOKEN } from "./types";

export const loginUser = (user: any) => {
  return async (dispatch: Function) => {
    try {
      const logged = await AuthService().login(user);
      await localStorage.setItem("@token", logged.data.access_token);
      const isValid = logged?.data?.access_token?.length > 0;
      dispatch({ type: LOGGING_USER, loggedIn: isValid });
    } catch (error) {}
  };
};

export const refreshToken = (oldToken: string) => {
  return async (dispatch: Function) => {
    try {
      const refreshToken = await AuthService().refreshToken(oldToken);

      localStorage.setItem("@token", refreshToken.data);
      dispatch({ type: REFRESH_TOKEN });
    } catch (error) {}
  };
};
