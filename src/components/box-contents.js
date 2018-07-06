import React from 'react';
import {connect} from 'react-redux';

import requiresLogin from './requires-login';

export class BoxContents extends React.Component {

  // onSave = (e) => {
  //   const boxContents = {};
  //   const date = this.props.match.params.date;
  //   if (this.props.boxContents) {
  //     console.log('this.props.boxContents = ',this.props.boxContents)
  //     boxContents.boxContents = this.props.boxContents
  //     } else {
  //       console.log('this.props.addedVegetables = ',this.props.addedVegetables)
  //      boxContents.boxContents = this.props.addedVegetables
  //     } 
  //   e.preventDefault();
  //   this.props.dispatch(updateBox(boxContents, date))
  // }


  render() {
   const vegetableList = [];
   console.log('box.box-content state:', this.props.savedBoxContents);
   console.log(vegetableList, this.props.unsavedBoxContents);
   if (this.props.savedBoxContentss) {
    for (let i = 0; i < this.props.savedBoxContents.length; i++) {
      vegetableList.push(<li key={i} className='box-content'>{this.props.savedBoxContents[i]}</li>)
   }
   } else {
     for (let i = 0; i < this.props.unsavedBoxContents.length; i++) {
       vegetableList.push(<li key={i} className='added-vegetable'>{this.props.unsavedBoxContents[i]}</li>)
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