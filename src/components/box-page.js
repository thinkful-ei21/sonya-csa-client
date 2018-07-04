import React from 'react';
import {connect} from 'react-redux'

import requiresLogin from './requires-login';
import {fetchBox, createBox} from '../actions/boxes';
import {fetchVegetables} from '../actions/vegetables';

export class BoxPage extends React.Component {
  
  componentDidMount() {
    const date = this.props.match.params.date;
    this.props.dispatch(fetchVegetables());
    console.log(this.props)
    this.props.dispatch(fetchBox(date))
    .then(() => {
        if (!this.props.box) {
          console.log(this.props.box)
          this.props.dispatch(createBox(date))        
        }  
      })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    const vegetables = [];
    if (this.props.vegetables) {
      for (let i = 0; i < this.props.vegetables.length; i++) {
        vegetables.push(<option key={i} value={this.props.vegetables[i].name}>{this.props.vegetables[i].name}</option>)
      }
    }
   
  return (
    <div className='box-builder'>
      <select className='vegetable-selector'>
        {vegetables}
      </select>
      <button type='submit'>Add to Box</button>
    </div>    
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
      vegetables: state.vegetable.data
  }
};


export default requiresLogin()(connect(mapStateToProps)(BoxPage));
