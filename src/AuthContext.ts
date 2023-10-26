import { createContext } from 'react';
import { AuthStatus } from './AuthStatus';
import { AxiosRequestConfig } from 'axios';

export interface AuthContextValue<U = unknown> {
  status: AuthStatus;
  setStatus: (_status: AuthStatus) => void;
  user: U | null;
  setUser: (_user: U | null) => void;
  token: string | null;
  setToken: (_token: string | null) => void;
  fetchUser: () => void;
  loginPath: string;
  logoutRedirectPath: string;
  defaultAxiosOptions?: AxiosRequestConfig;
  logMsg: (msg: string, ...rest: any[]) => void;
}

export const AuthContext = createContext<AuthContextValue>({
  status: AuthStatus.NotSure,
  setStatus: () => null,
  user: null,
  setUser: () => null,
  token: null,
  setToken: () => null,
  fetchUser: () => null,
  loginPath: '/login',
  logoutRedirectPath: '/',
  defaultAxiosOptions: undefined,
  logMsg: () => null,
});
