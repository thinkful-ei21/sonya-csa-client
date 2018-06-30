import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import LoginForm from './login-form';


export default function LandingPage(props) {

  return(
    <div className='home'>
      <h2>Build Your CSA Box</h2>
      <LoginForm />
      <Link to='/register'>Sign Up!</Link>
    </div>
  );
}