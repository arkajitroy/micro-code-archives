import { Dispatch, ReactNode } from "react";

export interface IUser {
  firstName: string;
  lastName: string;
  role: "SUPER-ADMIN" | "ADMIN" | "USER";
}

export interface AuthState {
  isAuthenticated: boolean;
  user: null | IUser;
  token: null | string;
}

export interface AuthContextProps {
  state: AuthState;
  dispatch: Dispatch<AuthAction>;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export type AuthAction =
  | { type: "LOGIN"; payload: { user: IUser; token: string } }
  | { type: "LOGOUT" };
