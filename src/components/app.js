import React from 'react';
import LandingPage from './landing-page';
import Nav from './nav';

export default class App extends React.Component {
  
  render() {
    return (
      <main>
        <Nav />
        <LandingPage />
      </main>
    )
  }
  }
