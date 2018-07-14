import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { header, h1 } from './App.styles';
import UsersPage from '../../pages/users/UsersPage';
import UserPage from '../../pages/user/UserPage';

export const App = () => (
  <section>
    <header className={header}>
      <h1 className={h1}>Behance User Search</h1>
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={UsersPage} />
        <Route path="/user/:id" component={UserPage} />
      </Switch>
    </main>
  </section>
);

export default withRouter(App);
