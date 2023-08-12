import axios, {AxiosRequestConfig} from 'axios';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { AuthContext } from './AuthContext';
import { AuthStatus } from './AuthStatus';
import useLocalStorage from "./useLocalStorage";
import React from 'react';

export interface AuthProviderProps {
  /** Child elements */
  children: ReactNode;
  /** Inverval timeout (ms) to verify authentication status. 0 (disabled) by default. */
  fetchUserInterval?: number;
  /** Route path to get current user */
  getCurrentUserPath?: string;
  /** Route path to login page */
  loginPath?: string;
  /** Where to redirect after logout from a protected page */
  logoutRedirectPath?: string;
  /** Axios request config to use in all calls (unless overridden) */
  defaultAxiosOptions?: AxiosRequestConfig;
}

export function AuthProvider({
  children,
  fetchUserInterval = 0,
  getCurrentUserPath = '/user',
  loginPath = '/login',
  logoutRedirectPath = '/',
  defaultAxiosOptions = {}
}: AuthProviderProps) {
  const promiseRef = useRef<Promise<any>>();
  const [status, setStatus] = useLocalStorage('auth_status', AuthStatus.NotSure);
  const [user, setUser] = useLocalStorage<any>('auth_user', null);
  const [token, setToken] = useLocalStorage<string | null>('auth_token', null);
  const [shouldFetchUser, setShouldFetchUser] = useState(0);

  if (token) {
    axios.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  const fetchUser = useCallback(() => {
    promiseRef.current = axios
      .get(getCurrentUserPath, defaultAxiosOptions)
      .then((res) => {
        setStatus(AuthStatus.LoggedIn);
        setUser(res.data);
      })
      .catch((reason) => {
        console.error(reason)
        setStatus(AuthStatus.NotLoggedIn);
      });
  }, []);

  // Fetch user on demand
  useEffect(() => {
    fetchUser();
  }, [fetchUser, shouldFetchUser]);

  // Fetch user interval
  useEffect(() => {
    let timer = 0;
    if (fetchUserInterval > 0) {
      timer = window.setInterval(fetchUser, Math.max(fetchUserInterval, 3000));
    }
    return () => {
      clearInterval(timer);
    };
  }, [fetchUser, fetchUserInterval]);

  if (status === AuthStatus.NotSure && promiseRef.current) {
    throw promiseRef.current; // Trigger suspense
  }

  return (
    <AuthContext.Provider
      value={{
        status,
        setStatus,
        user,
        setUser,
        token,
        setToken,
        fetchUser: () => setShouldFetchUser((prev) => prev + 1),
        loginPath,
        logoutRedirectPath,
        defaultAxiosOptions
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
