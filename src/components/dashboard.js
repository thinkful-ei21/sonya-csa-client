import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import requiresLogin from './requires-login';
import {clearAuth} from '../actions/auth'
import DateSelector from './date-selector';
import {resetVegetableAddList} from '../actions/boxes';


export class Dashboard extends React.Component {

  logout() {
    if (localStorage.getItem('authToken')) {
      localStorage.removeItem('authToken');
    }
    this.props.dispatch(clearAuth());
  }

  render() {
    if (!this.props.loggedIn) {
     return <Redirect to='/' />
    }

    return(  
      <div>
        <h2>Welcome!</h2>
        <DateSelector />
        <button onClick={() => this.logout()}>Log Out</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
      loggedIn: state.auth.authToken !== null,
      username: state.auth.currentUser.username,
      name: `${currentUser.firstName} ${currentUser.lastName}`
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
