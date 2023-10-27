import React from 'react';
import '@testing-library/react';
import {render, screen, waitForElementToBeRemoved,} from '@testing-library/react';
import {AuthStatus} from './AuthStatus';
import {AuthProvider} from './AuthProvider';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {useLogin} from './useLogin';
import {useAuth} from './useAuth';
import userEvent from "@testing-library/user-event";

type User = {
  user: {
    id: string;
    name: string;
  };
};

const defaultEmail = 'testEmail@example.com';
const defaultPassword = 'testPassword';
const user = {id: 1, name: 'John Smith'};

let axiosMock: MockAdapter;

const renderComponent = () => {
  // Create a test component that consumes the Context and does login action
  const TestComponent = () => {
    // In real life the email and password would probably come from form inputs.
    const [email, _setEmail] = React.useState(defaultEmail);
    const [password, _setPassword] = React.useState(defaultPassword);

    const {
      submit,
      errors,
      loading,
    } = useLogin({email, password}, {getJwtTokenFromResponse: false});

    const {status, user} = useAuth<User>();

    return (
      <div>
        {status && <p>{status}</p>}
        {user && <p>{user?.user?.name}</p>}
        {errors && <p data-testid="errors">{JSON.stringify(errors)}</p>}
        {loading && <p>{loading}</p>}
        <button onClick={submit}>Login</button>
      </div>
    );
  };

  // Wrap the test component with the Context Provider
  const MyApp = () => {
    return (
      <AuthProvider>
        <TestComponent/>
      </AuthProvider>
    );
  };

  return render(<MyApp/>);
}

beforeEach(async () => {
  // This sets the mock adapter on the default instance
  axiosMock = new MockAdapter(axios);
});

test('if login is successful, should be able to grab user name from context and render', async () => {
  // at first, fetch user returns 404 and status is not_logged_in, after that 200
  axiosMock.onGet('/user').replyOnce(404, {message: 'User not found'})
    .onGet('/user').replyOnce(404, {message: 'User not found'})
    .onGet('/user').reply(200, {user});
  // Mock the POST request to /login
  axiosMock.onPost('/login').reply(200, {user});

  const {getByText, queryByText, queryByTestId} = renderComponent();

  expect(queryByText('loading')).not.toBeInTheDocument();
  expect(queryByText(AuthStatus.LoggedIn)).not.toBeInTheDocument();
  expect(queryByText(user.name)).not.toBeInTheDocument();
  expect(queryByTestId('errors')).not.toBeInTheDocument();

  const clickyUser = userEvent.setup();
  // Find and click on the button element
  const button = await screen.findByRole('button', {name: /login/i});
  await clickyUser.click(button);

  expect(getByText(AuthStatus.LoggedIn)).toBeInTheDocument();
  expect(getByText(user.name)).toBeInTheDocument();
  expect(queryByText('loading')).not.toBeInTheDocument();
  expect(queryByTestId('errors')).not.toBeInTheDocument();
});

test('if login is fails, should be able to grab error from context and render', async () => {
  // at first, fetch user returns 404 and status is not_logged_in
  axiosMock.onGet('/user').reply(404, {message: 'User not found'});
  // Mock the POST request to /login
  axiosMock.onPost('/login').reply(404, {message: 'Invalid Credentials'});

  const {getByText, queryByText, queryByTestId} = renderComponent();

  await waitForElementToBeRemoved(() => screen.getByText(AuthStatus.LoggedIn));
  expect(queryByText(AuthStatus.LoggedIn)).not.toBeInTheDocument();
  expect(queryByText('loading')).not.toBeInTheDocument();
  expect(queryByText(user.name)).not.toBeInTheDocument();
  expect(queryByTestId('errors')).not.toBeInTheDocument();

  const clickyUser = userEvent.setup();
  // Find and click on the button element
  const button = await screen.findByRole('button', {name: /login/i});
  await clickyUser.click(button);

  expect(getByText(AuthStatus.NotLoggedIn)).toBeInTheDocument();
  expect(
    screen.getByText('Invalid Credentials', {exact: false}),
  ).toBeInTheDocument();
  expect(queryByText('loading')).not.toBeInTheDocument();
  expect(queryByText(user.name)).not.toBeInTheDocument();
});
