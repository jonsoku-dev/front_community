import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Studies } from './Study';

export default () => (
  <Switch>
    <Route path="/" exact component={() => <div>main</div>}></Route>
    <Route path="/studies" exact component={Studies}></Route>
    <Redirect to="/" from="*" />
  </Switch>
);
