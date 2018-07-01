import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import LoginForm from './login-form';


export function LandingPage(props) {
  //If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to='/dashboard' />
  }

  return(
    <div className='home'>
      <h2>Build Your CSA Box</h2>
      <LoginForm />
      <Link to='/register'>Sign Up!</Link>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);