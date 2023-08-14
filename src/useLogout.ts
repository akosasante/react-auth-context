import axios from 'axios';
import { useState } from 'react';
import { AuthStatus } from './AuthStatus';
import { useAuth } from './useAuth';

export interface UseLogoutOptions {
  errorHandler?: (reason: any) => void;
  apiUrl?: string;
}

export function useLogout(options?: UseLogoutOptions) {
  const {
    errorHandler = (reason: any) => console.error(reason),
    apiUrl = '/logout',
  } = options || {};
  const { setStatus, setUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const submit = () => {
    setLoading(true);
    return axios
      .post(apiUrl)
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
