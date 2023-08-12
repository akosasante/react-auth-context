import React, { useContext } from 'react';
import { AuthContext } from "./AuthContext";
import { render, screen } from '@testing-library/react';
import { AuthStatus } from "./AuthStatus.ts";
import { AuthProvider } from "./AuthProvider";

test('renders the component when wrapped with Context', () => {
  // Create a test component that consumes the Context
  const TestComponent = () => {
    const authContext = useContext(AuthContext);
    return <div><p>HI</p></div>;
  };

// Wrap the test component with the Context Provider
  const App = () => {
    return (
      <AuthProvider value={null}>
        <TestComponent/>
      </AuthProvider>
    );
  };

  render(<App/>);
  expect(screen.getByText('HI')).toBeInTheDocument();
});

test('can fetch the default auth status', () => {
  // Create a test component that consumes the Context
  const TestComponent = () => {
    const ctx  = useContext(AuthContext);
    console.log(ctx)
    return (
      <div>
        <p>{ctx?.status}</p>
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

  render(<App/>);
  expect(screen.getByText(AuthStatus.NotSure)).toBeInTheDocument();
})
