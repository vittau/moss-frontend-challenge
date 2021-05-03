import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './App.scss';
import MainLayout from './layout/MainLayout/MainLayout';
import AlbumPage from './pages/AlbumPage/AlbumPage';
import HomePage from './pages/HomePage/HomePage';
import store from './redux/store';

const App: FunctionComponent = () => {
  return (
    <Router>
      <Provider store={store}>
        <ITunesApp />
      </Provider>
    </Router>
  );
};

const ITunesApp = () => {
  const location = useLocation();

  return (
    <MainLayout>
      <SwitchTransition>
        <CSSTransition key={location.key ?? 'initial'} classNames="my-fade" timeout={300}>
          <Switch location={location}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/album/:index" component={AlbumPage} />
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </CSSTransition>
      </SwitchTransition>
    </MainLayout>
  );
};

export default App;
