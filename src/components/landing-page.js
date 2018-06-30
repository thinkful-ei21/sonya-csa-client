import React from 'react';
import LoginForm from './login-form';

export default function LandingPage(props) {

  return(
    <div className='home'>
      <h2>Build Your CSA Box</h2>
      <LoginForm />
    </div>
  );
}