import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Studies, Study } from './Study';
import { Login, Register } from './Auth';

export default () => (
  <Switch>
    <Route path="/" exact component={() => <div>main</div>}></Route>
    <Route path="/login" exact component={Login}></Route>
    <Route path="/register" exact component={Register}></Route>
    <Route path="/study" exact component={Studies}></Route>
    <Route path="/study/:studyId" exact component={Study}></Route>
    <Route path="/about" exact component={() => <div>about</div>}></Route>
    <Route path="/course" exact component={() => <div>course</div>}></Route>
    <Route path="/contact" exact component={() => <div>contact</div>}></Route>
    <Redirect to="/" from="*" />
  </Switch>
);
