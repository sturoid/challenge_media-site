import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import UsersPage from '../../pages/users/';
import UserPage from '../../pages/user/';
import NavMain from '../../components/NavMain/';

export const App = () => (
  <section>
    <NavMain />
    <main>
      <Switch>
        <Route exact path="/" component={UsersPage} />
        <Route path="/user/:id" component={UserPage} />
      </Switch>
    </main>
  </section>
);

export default withRouter(App);
