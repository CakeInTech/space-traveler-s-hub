import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Rocket from '../Components/pages/Rocket';

it('Test Mission component', () => {
  const Rockets = render(
    <Provider store={store}>
      <Router>
        <Rocket />
      </Router>
    </Provider>,
  );
  expect(Rockets).toMatchSnapshot();
});
