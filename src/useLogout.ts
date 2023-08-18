import axios, { AxiosRequestConfig } from 'axios';
import { useState } from 'react';
import { AuthStatus } from './AuthStatus';
import { useAuth } from './useAuth';

export interface UseLogoutOptions {
  errorHandler?: (reason: any) => void;
  apiUrl?: string;
  actionAxiosOptions?: AxiosRequestConfig;
}

export function useLogout(options?: UseLogoutOptions) {
  const {
    errorHandler = (reason: any) => console.error(reason),
    apiUrl = '/logout',
    actionAxiosOptions = null,
  } = options || {};
  const { setStatus, setUser, defaultAxiosOptions } = useAuth();
  const [loading, setLoading] = useState(false);
  const submit = () => {
    setLoading(true);
    return axios
      .post(apiUrl, null, actionAxiosOptions || defaultAxiosOptions || {})
      .then((res) => {
        setStatus(AuthStatus.LoggedOut);
        setUser(null);
        return res;
      })
      .catch(errorHandler)
      .finally(() => {
        setLoading(false);
      });
  };
  return { submit, loading };
}
