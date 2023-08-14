# Overview

**This is a fork of [@guoyunhe/react-auth](https://github.com/guoyunhe/react-auth).**
This fork was mainly implemented to customize the original library for use with signed-cookie-based authentication.

This repo implements React Context components & hooks for authentication. To be used with `axios` (>= 1.0) and `react-router-dom` (>= 6.0).

## Install

```bash
npm i akosasante/react-auth-context axios react-router-dom
```

## Usage
**Note:** Instructions here assume you're using react-router v6+, and axios v1.4+

1. Wrap your app with `AuthProvider` to be able to use the auth functionality from this library and with `BrowserRouter` to be able to use react-router redirections:

```jsx
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthProvider } from '@akosasante/react-auth-context';

/**
 * You can configure AuthProvider with the following props:
 * fetchUserInterval: number of milliseconds to wait before automatically trying to fetch the user again (default: 0/disabled)
 * getCurrentUserPath: path to fetch the current user from the backend (default: '/user')
 * loginPath: frontend path to the login page. Used by the `requireAuth` hook and component to redirect the user if they're not logged in (default: '/login')
 * logoutRedirectPath: frontend path to redirect the user to after they've logged out on a protected page (default: '/')
 * defaultAxiosOptions: Axios request config to use in all calls (unless overridden)
 */
const App = () => {
  return;
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route></Route>
      </Routes>
    </AuthProvider>
  </BrowserRouter>;
};
```

2. Use the `useAuth` hook to access the auth functionality:

```jsx
const UserProfile = () => {
  /**
   * user will be undefined if not logged in, otherwise, it will be the return value
   * of the `getUser` function performed by the AuthProvider, or the login/register functions
   * if those were performed
   *
   * status is one of the following:
   * 'not_sure' - Initial value when it hasn't been verified by back-end yet,
   * 'logged_in' - The user has logged in,
   * 'not_logged_in' - Fetch user request happened and confirmed user is not logged in,
   * 'logged_out' - The user has manually logged out.
   **/

  const { user, status } = useAuth();

  return (
    <div>
      <h1>User Profile</h1>
      {status === 'logged_in' ? <p>{user?.name}</p> : <p>Please login</p>}
    </div>
  );
};
```

3. Use the `useLogin`, `useRegister`, and `useLogout` hooks to perform requests to the backend:

```jsx
/**
 * login and register hook functions take an object with the following properties:
 ** - errorHandler: a function that will receive any error from the POST request, you can choose how to handle it
 ** - apiUrl: what endpoint to make the POST request to
 ** - getUserFromResponse: function for extracting the user from the Axios response body (by default it's `responseData => responseData.user`)
 ** - getJwtTokenFromResponse: function for extracting the token if you're using token-based auth from the Axios response body (by default it's `responseData => responseData.token.token || responseData.token`).
 **   If you're not using token-based auth, just set this to `false`
 ** - actionAxiosOptions: An object with any axios request config you want to set like headers (see: https://axios-http.com/docs/req_config).
 *
 * logout hook function just takes errorHandler and apiUrl
 *
 * login and register hooks return:
 ** - submit: function to run the POST call
 ** - loading: boolean to indicate if the POST call is in progress
 ** - errors: Axios error response body, or error message as a string
 *
 * logout handler returns just submit and loading
 **/

const Login = () => {
  const { submit, loading, errors } = useLogin({
    errorHandler: (error) => console.log(error),
    apiUrl: 'http://localhost:8080/api/login',
    getJwtTokenFromResponse: false,
    actionAxiosOptions: {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    },
  });

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submit}>
        <input type="text" name="email" />
        <input type="password" name="password" />
        <button type="submit" disabled={loading}>
          Login
        </button>
      </form>
      {errors && <p>{errors}</p>}
    </div>
  );
};
```

4. Use the `useRequireAuth` hook to redirect users to the login page if they're not logged in:

```jsx
const MyComponent = () => {
  const requireAuth = useRequireAuth();
  const handleClick = () => {
    // requireAuth() will check auth.status to see if user is logged-in
    // if not, they will be redirected with react-router-dom to the path defined in the AuthProvider
    // otherwise, the inside of the if-statement will execute
    if (requireAuth()) {
      // do the thing that only logged-in user is allowed to do
    }
  };

  return (
    <div>
      <h1>My Component</h1>
      <button onClick={handleClick}>
        Action Button (for logged-in users only!)
      </button>
    </div>
  );
};
```

Alternatively, use the RequireAuth component in your router to wrap your component that should only be viewed if logged-in:

```jsx
<BrowserRouter>
  <AuthProvider>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
    </Routes>
  </AuthProvider>
</BrowserRouter>
```
