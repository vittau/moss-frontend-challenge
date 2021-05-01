// src/AppRouter.tsx

import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import store from './redux/store';

const AppRouter: FunctionComponent = () => {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Provider>
    </Router>
  );
};

export default AppRouter;
