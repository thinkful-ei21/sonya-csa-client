import React from 'react';
import {connect} from 'react-redux'

import requiresLogin from './requires-login';

export function BoxPage(props) {
  return (
    <h1>make a new box!</h1>
  )
}
const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
      loggedIn: state.auth.authToken !== null,
      username: state.auth.currentUser.username,
      name: `${currentUser.firstName} ${currentUser.lastName}`,
      protectedData: state.protectedData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(BoxPage));
