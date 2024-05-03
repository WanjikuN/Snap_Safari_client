import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
  test('renders navbar', () => {
    render(<App />);

    const navbarElement = screen.getByText(/navbar/i);
    expect(navbarElement).toBeInTheDocument();
  });

  test('redirects to /users when value is set', () => {
    render(<App />);

    // Simulate setting value
    userEvent.type(screen.getByRole('textbox'), 'test value');

    // Check if redirected to /users
    const usersPageElement = screen.getByText(/users/i);
    expect(usersPageElement).toBeInTheDocument();
  });


});
