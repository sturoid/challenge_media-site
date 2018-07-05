import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { header, h1 } from './App.styles';
import UsersView from '../../views/users/UsersView';
import UserView from '../../views/user/UserView';

const App = () => (
  <section>
    <header className={header}>
      <h1 className={h1}>Behance User Search</h1>
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={UsersView} />
        <Route exact path="/user/:id" component={UserView} />
      </Switch>
    </main>
  </section>
);

export default withRouter(App);
