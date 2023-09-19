import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '../../test/index';

import SignButton from '.';

test('render buttons', async () => {
  const signButtonProps = {
    setEvents: () => {},
  };

  renderWithProviders(<SignButton {...signButtonProps} />);

  const signIn = await screen.findByText('Sign in');
  expect(signIn).toBeInTheDocument();

  fireEvent.click(signIn);

  const signOut = await screen.findByText('Sign out');
  expect(signOut).toBeInTheDocument();
});

test('click sign in button', async () => {
  const signButtonProps = {
    setEvents: () => {},
  };

  renderWithProviders(<SignButton {...signButtonProps} />);

  const signIn = await screen.findByText('Sign in');

  fireEvent.click(signIn);
});

test('click sign out button', async () => {
  const signButtonProps = {
    setEvents: () => {},
  };

  renderWithProviders(<SignButton {...signButtonProps} />);

  const signIn = await screen.findByText('Sign in');

  fireEvent.click(signIn);

  const signOut = await screen.findByText('Sign out');

  fireEvent.click(signOut);
});
