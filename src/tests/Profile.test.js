import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/configureStore';
import Profile from '../Components/pages/Profile';

describe('Test for the profile page', () => {
  test('Renders the profile correctly', () => {
    render(
      <React.StrictMode>
        <Router>
          <Provider store={store}>
            <Profile />
          </Provider>
        </Router>
      </React.StrictMode>,
    );
    const profile = screen.getByText(/My Missions/i);
    expect(profile).toBeInTheDocument();
  });
});
