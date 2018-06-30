import React from 'react';
import {Route} from 'react-router-dom';
import LandingPage from './landing-page';
import Nav from './nav';
import RegistrationPage from './registration-page';
import Dashboard from './dashboard';

export default class App extends React.Component {
  
  render() {
    return (
      <main>
        <Nav />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/register' component={RegistrationPage} />
        <Route exact path='/dashboard' component={Dashboard} />
      </main>
    )
  }
  }
