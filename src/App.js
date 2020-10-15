import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Main from 'views/Main';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
