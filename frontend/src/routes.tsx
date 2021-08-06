import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CompaniesList from './pages/CompaniesList';
import Company from './pages/Company';
import UsersList from './pages/UsersList';
import User from './pages/User';
import Post from './pages/Post';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/companies" component={CompaniesList} />
        <Route path="/companies/:id" component={Company} />
        <Route path="/users" component={UsersList} />
        <Route path="/users/:id" component={User} />
        <Route path="/posts/:id" component={Post} />
      </Switch>
    </BrowserRouter>
  );
}
