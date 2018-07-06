import React from 'react';
import {connect} from 'react-redux';

import requiresLogin from './requires-login';

export class BoxContents extends React.Component {
  constructor(props) {
    super(props);

    this.listItem = null;
    this.listItemRef = listItem => {
      this.listItem = listItem
    }
  }


  deleteItem = () => {
    console.log(this.listItem);
    //this.dispatch(deleteVegetableChoice())
  }

  render() {
   const vegetableList = [];
   console.log('savedBoxContents:', this.props.savedBoxContents);
   console.log('rendering box-content');
   if (this.props.savedBoxContents) {
    for (let i = 0; i < this.props.savedBoxContents.length; i++) {
      console.log('rendering savedBoxContents: ', this.props.savedBoxContents);
      vegetableList.push(
        <div key={`div-${i}`} className='saved-box-item'>
          <li key={`li-${i}`} className='box-content' ref={this.listItemRef}>{this.props.savedBoxContents[i]}</li>
          <button key={`button-${i}`} onClick={this.deleteItem}>x</button>
        </div>)
   }
   } else {
     for (let i = 0; i < this.props.unsavedBoxContents.length; i++) {
       console.log('rendering unsavedBoxContents: ', this.props.unsavedBoxContents);
       vegetableList.push(
         <div key={`div-${i}`} className='unsaved-box-item'>
           <li key={`li-${i}`} ref={this.listItemRef} className='added-vegetable'>{this.props.unsavedBoxContents[i]}</li>);
           <button key={`button-${i}`} onClick={this.deleteItem}>x</button>
         </div>)
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