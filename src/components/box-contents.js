import React from 'react';
import {connect} from 'react-redux';

import requiresLogin from './requires-login';

export class BoxContents extends React.Component {

  render() {
   const vegetableList = [];
<<<<<<< HEAD
   console.log('box.box-content state:', this.props.savedBoxContents);
   console.log(vegetableList, this.props.unsavedBoxContents);
   if (this.props.savedBoxContents) {
    for (let i = 0; i < this.props.savedBoxContents.length; i++) {
      vegetableList.push(<li key={i} className='box-content'>{this.props.savedBoxContents[i]}</li>)
   }
   } else {
     for (let i = 0; i < this.props.unsavedBoxContents.length; i++) {
       vegetableList.push(<li key={i} className='added-vegetable'>{this.props.unsavedBoxContents[i]}</li>)
=======
   console.log('savedBoxContents:', this.props.savedBoxContents);
   console.log('rendering box-content');
   if (this.props.savedBoxContents) {
    for (let i = 0; i < this.props.savedBoxContents.length; i++) {
      console.log('rendering savedBoxContents: ', this.props.savedBoxContents);
      vegetableList.push(<li key={i} className='box-content'>{this.props.savedBoxContents[i]}</li>);
   }
   } else {
     for (let i = 0; i < this.props.unsavedBoxContents.length; i++) {
       console.log('rendering unsavedBoxContents: ', this.props.unsavedBoxContents);
       vegetableList.push(<li key={i} className='added-vegetable'>{this.props.unsavedBoxContents[i]}</li>);
>>>>>>> limit-t-8-choices
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
      savedBoxContents: state.box.savedBoxContents,
      box: state.box.pickUpDate,
      unsavedBoxContents: state.box.unsavedBoxContents
  }
}

export default (requiresLogin()(connect(mapStateToProps)(BoxContents)));