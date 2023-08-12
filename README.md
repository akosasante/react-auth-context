# Overview

**This is a fork of [@guoyunhe/react-auth](https://github.com/guoyunhe/react-auth).**
This fork was mainly implemented to customize the original library for use with signed-cookie-based authentication.

This repo implements React Context components & hooks for authentication. To be used with `axios` (>= 1.0) and `react-router-dom` (>= 6.0).

## Install

```bash
npm i @akosasante/react-auth-context axios react-router-dom
```

## Usage

1. Wrap your app with `AuthProvider` to be able to use the auth functionality from this library and with `BrowserRouter` to be able to use react-router redirections:

```jsx
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthProvider } from '@guoyunhe/react-auth';

const App = () => {
  return;
  <BrowserRouter>
    <AuthProvider>
      <Switch>
        <Route></Route>
      </Switch>
    </AuthProvider>
  </BrowserRouter>;
};
```
