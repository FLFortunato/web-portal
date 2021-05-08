import { UserService } from "../../services/user.service";
import { GET_ALL_USERS } from "./types";

export const getAllUsers = () => {
  return async (dispatch: Function) => {
    try {
      const { data: results } = await UserService().get();

      dispatch({ type: GET_ALL_USERS, results });
    } catch (error) {}
  };
};

export const registerUser = (data: any) => {
  return async (dispatch: Function) => {
    try {
      const create = UserService().create(data);
      dispatch({});
    } catch (error) {}
  };
};
