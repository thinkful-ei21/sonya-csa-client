import React from 'react';
import {connect} from 'react-redux';

import requiresLogin from './requires-login';

export class BoxContents extends React.Component {

  render() {
   const vegetableList = [];
   console.log('box.box-content state:', this.props.boxContents);
   console.log(vegetableList, this.props.addedVegetables);
   if (this.props.boxContents) {
    for (let i = 0; i < this.props.boxContents.length; i++) {
      vegetableList.push(<li key={i} className='box-content'>{this.props.boxContents[i]}</li>)
   }
   } else {
     for (let i = 0; i < this.props.addedVegetables.length; i++) {
       vegetableList.push(<li key={i} className='added-vegetable'>{this.props.addedVegetables[i]}</li>)
     }
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
      boxContents: state.box.boxContents,
      box: state.box.pickUpDate,
      addedVegetables: state.box.vegetables
  }
}

export default (requiresLogin()(connect(mapStateToProps)(BoxContents)));