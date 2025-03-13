import { AuthAction, IUser } from "../types";

export const login = (user: IUser, token: string): AuthAction => {
  return {
    type: "LOGIN",
    payload: { user, token },
  };
};

export const logout = (): AuthAction => {
  return { type: "LOGOUT" };
};
