import { BaseService } from "../base/base.service";

export const AuthService = () => {
  const { create: login } = BaseService("auth/login");

  const { update: refreshToken } = BaseService("token/refresh");

  return { login, refreshToken };
};
