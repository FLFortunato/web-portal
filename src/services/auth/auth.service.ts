import { BaseService } from "../base/base.service";

export const AuthService = () => {
  const { create: login, remove } = BaseService("auth/login");

  const { update: refreshToken } = BaseService("token/refresh");

  return { login, refreshToken, remove };
};
