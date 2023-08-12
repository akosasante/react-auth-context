import React, { useContext } from 'react';
import { AuthContext } from "./AuthContext";
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { AuthStatus } from "./AuthStatus.ts";
import { AuthProvider } from "./AuthProvider";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { useLogin } from "./useLogin.ts";


let axiosMock;
beforeEach(() => {
// This sets the mock adapter on the default instance
  axiosMock = new MockAdapter(axios);
});


test('if login is successful, should be able to grab user name from context and render', async () => {
  const user = {id: 1, name: 'John Smith'}
  const defaultEmail = 'testEmail@example.com';
  const defaultPassword = 'testPassword';

  // at first, fetch user returns 404 and status is not_logged_in
  axiosMock.onGet('/user').reply(404, {message: "User not found"});
  // Mock the POST request to /login
  axiosMock.onPost('/login').reply(200, {user});


  // Create a test component that consumes the Context and does login action
  const TestComponent = () => {
    // In real life the email and password would probably come from form inputs.
    const [email, _setEmail] = React.useState(defaultEmail);
    const [password, _setPassword] = React.useState(defaultPassword);

    const { submit, _errors, _loading } = useLogin({ email, password}, {getJwtTokenFromResponse: false});
    const { status, user } = useContext(AuthContext);

    return (
      <div>
        <p>{status}</p>
        <p>{user?.name}</p>
        <button onClick={submit}>Login</button>
      </div>);
  };

// Wrap the test component with the Context Provider
  const App = () => {
    return (
      <AuthProvider>
        <TestComponent/>
      </AuthProvider>
    );
  };

  await act(async () => {
    render(<App/>);
  });



  // Find and click on the button element
  const button = screen.getByRole('button', {name: /login/i});
  fireEvent.click(button);

  await waitFor(() => {
    expect(screen.getByText(AuthStatus.LoggedIn)).toBeInTheDocument();
    expect(screen.getByText(user.name)).toBeInTheDocument();
  });
});

test('if login is fails, should be able to grab error from context and render', async () => {
  const user = {id: 1, name: 'John Smith'}
  const defaultEmail = 'testEmail@example.com';
  const defaultPassword = 'testPassword';

  // at first, fetch user returns 404 and status is not_logged_in
  axiosMock.onGet('/user').reply(404, {message: "User not found"});
  // Mock the POST request to /login
  axiosMock.onPost('/login').reply(404, {message: 'Invalid Credentials'});


  // Create a test component that consumes the Context and does login action
  const TestComponent = () => {
    // In real life the email and password would probably come from form inputs.
    const [email, _setEmail] = React.useState(defaultEmail);
    const [password, _setPassword] = React.useState(defaultPassword);

    const { submit, errors, _loading } = useLogin({ email, password}, {getJwtTokenFromResponse: false});
    const { status, user } = useContext(AuthContext);

    return (
      <div>
        <p>{status}</p>
        { user && <p>{user?.name}</p> }
        { errors && <p>{JSON.stringify(errors)}</p>}
        <button onClick={submit}>Login</button>
      </div>);
  };

// Wrap the test component with the Context Provider
  const App = () => {
    return (
      <AuthProvider>
        <TestComponent/>
      </AuthProvider>
    );
  };

  await act(async () => {
    render(<App/>);
  });



  // Find and click on the button element
  const button = screen.getByRole('button', {name: /login/i});
  fireEvent.click(button);

  await waitFor(() => {
    expect(screen.getByText(AuthStatus.NotLoggedIn)).toBeInTheDocument();
    expect(screen.getByText('Invalid Credentials', { exact: false })).toBeInTheDocument();
  });
});
