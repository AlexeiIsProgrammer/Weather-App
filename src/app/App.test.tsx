import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from '../test';

test('renders learn react link', () => {
  renderWithProviders(<App />);
  const linkElement = screen.getByText(/Sign in/i);
  expect(linkElement).toBeInTheDocument();
});
