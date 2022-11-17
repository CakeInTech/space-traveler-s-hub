import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Mission from '../Components/pages/Mission';

it('Test Mission component', () => {
  const tree = render(
    <Provider store={store}>
      <Router>
        <Mission />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
