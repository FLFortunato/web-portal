import { BaseService } from "./base/base.service";
import { HttpService } from "./base/http.service";

export const TokenService = () => {
  const logout = (actualToken: string): Promise<void> => {
    return HttpService().post("auth/logout", { token: actualToken });
  };
  return {
    ...BaseService("token"),
    logout,
  };
};
