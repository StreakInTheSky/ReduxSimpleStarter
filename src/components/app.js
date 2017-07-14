import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from './header';
import UserProfile from './profile';
import CurateContainer from './curate';

export default function App(props) {
  return (
    <div className="container">
      <Header />
        {/* TODO: Create browse component to render on home page */}
      <Switch>
        <Route path="/curate" component={CurateContainer} />
        <Route path="/:username" component={UserProfile} />
      </Switch>
    </div>
  );
}
