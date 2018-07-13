import React from 'react';
import {connect} from 'react-redux';

import requiresLogin from './requires-login';
import {deleteVegetable, setSelectDisplayBoolean, successMessage} from '../actions/boxes';

export class BoxContents extends React.Component {

  deleteItem = (e) => {
    console.log(e.target.getAttribute('id'));
    this.props.dispatch(deleteVegetable(e.target.getAttribute('id')));
    this.props.dispatch(setSelectDisplayBoolean());
    this.props.dispatch(successMessage(''));
  }

  render() {
  
   const vegetableList = [];
   console.log('savedBoxContents:', this.props.savedBoxContents);
   console.log('rendering box-content');
   if (this.props.savedBoxContents) {
    console.log('rendering savedBoxContents: ', this.props.savedBoxContents);
    for (let i = 0; i < this.props.savedBoxContents.length; i++) {
      vegetableList.push(
        <div key={`${i}-div`}className='saved-box-item'>
          <li key={`${i}-key`} className='box-content'>{this.props.savedBoxContents[i]}</li>
          <button 
            key={`${i}-button`} 
            type='button' 
            aria-label='delete-vegetable-button' 
            className='delete-vegetable-button' 
            id={i} 
            onClick={(e) => this.deleteItem(e)}>
            x
            </button>         
        </div>)
   }
   } else if (this.props.unsavedBoxContents) {
    console.log('rendering unsavedBoxContents: ', this.props.unsavedBoxContents);
     for (let i = 0; i < this.props.unsavedBoxContents.length; i++) {
       vegetableList.push(
         <div key={`${i}-div`} className='unsaved-box-item'>
           <li key={`${i}-li`} className='added-vegetable'>{this.props.unsavedBoxContents[i]}</li>
           <button 
             key={`${i}-button`} 
             type='button' 
             className='delete-vegetable-button' 
             aria-label='delete-vegetable-button' 
             id={i} onClick={(e) => this.deleteItem(e)}>
             x
             </button>
         </div>)
     }
     } else {
       return vegetableList;
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