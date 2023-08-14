import axios, { AxiosRequestConfig } from 'axios';
import { useState } from 'react';
import { AuthStatus } from './AuthStatus';
import { useAuth } from './useAuth';

export interface UseLoginOptions {
  errorHandler?: (reason: any) => void;
  apiUrl?: string;
  getUserFromResponse?: ((data: any) => any) | false;
  getJwtTokenFromResponse?: ((data: any) => string) | false;
  actionAxiosOptions?: AxiosRequestConfig;
}

export function useLogin(requestBody: any, options?: UseLoginOptions) {
  // extract options
  const {
    errorHandler = (reason: any) => console.error(reason),
    apiUrl = '/login',
    getUserFromResponse = (data: any) => data?.user,
    getJwtTokenFromResponse = (data: any) => data?.token?.token || data?.token,
    actionAxiosOptions = null,
  } = options || {};

  // extract auth context
  const { setStatus, setUser, setToken, fetchUser, defaultAxiosOptions } =
    useAuth();

  // set up state
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<any>(null);

  // login submit function
  // same logic is also used for register
  const submit = () => {
    setLoading(true);
    return axios
      .post(
        apiUrl,
        requestBody,
        actionAxiosOptions || defaultAxiosOptions || {},
      )
      .then((res) => {
        setStatus(AuthStatus.LoggedIn);
        if (typeof getUserFromResponse === 'function') {
          setUser(getUserFromResponse(res.data));
        } else {
          // if the login api doesn't return user object, fetch user
          fetchUser();
        }
        if (typeof getJwtTokenFromResponse === 'function') {
          setToken(getJwtTokenFromResponse(res.data));
        }
        setErrors(null);
        return res;
      })
      .catch((err) => {
        setErrors(err.response?.data || err.message || 'Unknown error');
        errorHandler && errorHandler(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { submit, loading, errors };
}
