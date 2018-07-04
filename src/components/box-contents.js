import React from 'react';
import {connect} from 'react-redux';

import requiresLogin from './requires-login';

export class BoxContents extends React.Component {

  render() {
   const vegetableList = [];
   console.log(vegetableList, this.props.addedVegetables);
   for (let i = 0; i < this.props.addedVegetables.length; i++) {
     console.log('is this getting hit?')
     vegetableList.push(<li key={i} className='added-vegetable'>{this.props.addedVegetables[i]}</li>)
   }
  return (
    <ul>
    {vegetableList}
    </ul>
  )
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
      loggedIn: state.auth.authToken !== null,
      username: state.auth.currentUser.username,
      name: `${currentUser.firstName} ${currentUser.lastName}`,
      box: state.box.pickUpDate,
      addedVegetables: state.box.vegetables,
  }
}

export default (requiresLogin()(connect(mapStateToProps)(BoxContents)));