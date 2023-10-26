import axios, { AxiosRequestConfig } from 'axios';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { AuthContext } from './AuthContext';
import { AuthStatus } from './AuthStatus';
import useLocalStorage from './useLocalStorage';
import React from 'react';

export interface AuthProviderProps {
  /** Child elements */
  children: ReactNode;
  /** Interval timeout (ms) to verify authentication status. 0 (disabled) by default. */
  fetchUserInterval?: number;
  /** Route path to get current user */
  getCurrentUserPath?: string;
  /** Route path to login page */
  loginPath?: string;
  /** Where to redirect after logout from a protected page */
  logoutRedirectPath?: string;
  /** Axios request config to use in all calls (unless overridden) */
  defaultAxiosOptions?: AxiosRequestConfig;
  /** Log level, or null if you want to suppress logs from this library */
  logLevel?: 'debug' | 'info' | 'warn' | 'error' | null;
}

export function AuthProvider({
  children,
  fetchUserInterval = 0,
  getCurrentUserPath = '/user',
  loginPath = '/login',
  logoutRedirectPath = '/',
  defaultAxiosOptions = {},
  logLevel = null,
}: AuthProviderProps) {
  const logMsg = useCallback(
    (message: string, ...rest: any[]) => {
      if (logLevel) {
        console[logLevel](`[react-auth-context]: ${message}`, ...rest);
      }
    },
    [logLevel],
  );

  const promiseRef = useRef<Promise<unknown>>();

  const [status, setStatus] = useLocalStorage(
    'auth_status',
    AuthStatus.NotSure,
    logMsg,
  );
  const [user, setUser] = useLocalStorage<any>('auth_user', null, logMsg);
  const [token, setToken] = useLocalStorage<string | null>(
    'auth_token',
    null,
    logMsg,
  );
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
        logMsg(reason);
        setStatus(AuthStatus.NotLoggedIn);
      });
  }, [defaultAxiosOptions, getCurrentUserPath, setStatus, setUser]);

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

  // console.log("HAS STATUS CHANGED? : ", status)

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
        defaultAxiosOptions,
        logMsg,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
