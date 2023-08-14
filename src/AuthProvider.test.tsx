import { act, render, screen } from '@testing-library/react';
import { AuthStatus } from './AuthStatus';
import { AuthProvider } from './AuthProvider';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { useAuth } from './useAuth';
import React from 'react';

type User = {
  user: {
    id: string,
    name: string
  }
}

const renderAppWithStatusAndUser = () => {
  // Create a test component that consumes the Context
  const TestComponent = () => {
    const { status, user } = useAuth<User>();
    return (
      <div>
        <p>{status}</p>
        <p>{user?.user?.name}</p>
      </div>
    );
  };

  // Wrap the test component with the Context Provider
  const App = () => {
    return (
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );
  };

  return render(<App />);
};

const renderAppWithStatus = () => {
  // Create a test component that consumes the Context
  const TestComponent = () => {
    const { status } = useAuth();
    return (
      <div>
        <p>{status}</p>
      </div>
    );
  };

  // Wrap the test component with the Context Provider
  const App = () => {
    return (
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );
  };

  return render(<App />);
};

let axiosMock: MockAdapter;
beforeEach(() => {
  // This sets the mock adapter on the default instance
  axiosMock = new MockAdapter(axios);
});

test('renders the component when wrapped with Context', async () => {
  axiosMock
    .onGet('/user')
    .reply(200, { users: [{ id: 1, name: 'John Smith' }] });

  // Create a test component that consumes the Context
  const TestComponent = () => {
    const _authContext = useAuth();
    return (
      <div>
        <p>HI</p>
      </div>
    );
  };

  // Wrap the test component with the Context Provider
  const App = () => {
    return (
      <AuthProvider >
        <TestComponent />
      </AuthProvider>
    );
  };

  await act(async () => {
    render(<App />);
  });
  expect(screen.getByText('HI')).toBeInTheDocument();
});

test('if no user is found on initial render, set status to not-logged-in', async () => {
  axiosMock.onGet('/user').reply(404, { message: 'User not found' });

  await act(async () => {
    renderAppWithStatus();
  });
  expect(screen.getByText(AuthStatus.NotLoggedIn)).toBeInTheDocument();
});

test('if user is found on initial render, set status to logged in', async () => {
  axiosMock.onGet('/user').reply(200, { user: { id: 1, name: 'John Smith' } });

  await act(async () => {
    renderAppWithStatus();
  });
  expect(screen.getByText(AuthStatus.LoggedIn)).toBeInTheDocument();
});

test('if a different getUser path is provided, use that instead', async () => {
  axiosMock
    .onGet('/showCurrentUser')
    .reply(200, { user: { id: 1, name: 'John Smith' } });

  // Create a test component that consumes the Context
  const TestComponent = () => {
    const { status } = useAuth();
    return (
      <div>
        <p>{status}</p>
      </div>
    );
  };

  // Wrap the test component with the Context Provider
  const App = () => {
    return (
      <AuthProvider getCurrentUserPath={'/showCurrentUser'}>
        <TestComponent />
      </AuthProvider>
    );
  };

  await act(async () => {
    render(<App />);
  });
  expect(screen.getByText(AuthStatus.LoggedIn)).toBeInTheDocument();
  const request = axiosMock.history.get[0];
  expect(request.url).toBe('/showCurrentUser');
});

test('if axios options are passed in, use them', async () => {
  axiosMock.onGet('/user').reply(200, { user: { id: 1, name: 'John Smith' } });

  // Create a test component that consumes the Context
  const TestComponent = () => {
    const { status } = useAuth();
    return (
      <div>
        <p>{status}</p>
      </div>
    );
  };

  // Wrap the test component with the Context Provider
  const App = () => {
    const customAxiosRequestOptions = { headers: { 'My-Header': 'My-Value' } };
    return (
      <AuthProvider defaultAxiosOptions={customAxiosRequestOptions}>
        <TestComponent />
      </AuthProvider>
    );
  };

  await act(async () => {
    render(<App />);
  });
  expect(screen.getByText(AuthStatus.LoggedIn)).toBeInTheDocument();
  const request = axiosMock.history.get[0];
  expect(request.headers).toMatchObject({ 'My-Header': 'My-Value' });
});

test('if fetch user is successful, should be able to grab user name from context and render', async () => {
  const user = { id: 1, name: 'John Smith' };
  axiosMock.onGet('/user').reply(200, { user });

  await act(async () => {
    renderAppWithStatusAndUser();
  });
  expect(screen.getByText(AuthStatus.LoggedIn)).toBeInTheDocument();
  expect(screen.getByText(user.name)).toBeInTheDocument();
});
