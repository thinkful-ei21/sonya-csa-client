import React from 'react';
import {connect} from 'react-redux'

import requiresLogin from './requires-login';
import {fetchBox, createBox, addVegetable} from '../actions/boxes';
import {fetchVegetables} from '../actions/vegetables';
import BoxContents from './box-contents';


export class BoxPage extends React.Component {
  constructor(props) {
    super(props);
    this.select = null
    this.selectRef = select => {
       this.select = select
   }
  }
  
  componentDidMount() {
    const date = this.props.match.params.date;
    this.props.dispatch(fetchVegetables());
    this.props.dispatch(fetchBox(date))
    .then(() => {
        if (!this.props.box) {
          //console.log(this.props.box)
          this.props.dispatch(createBox(date))        
        }  
      })
    .catch(err => {
      console.log(err);
    });
  }

  onSave = (e) => {
    e.preventDefault();
    console.log(this.props.vegetables);
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(addVegetable(this.select.value))
    //console.log('selected:',this.select.value,'added:', this.props.addedVegetables);
  }

  render() {
    const vegetableOptions = [];
    // if no vegetables have been selected provide all vegetable option to user
    if (this.props.addedVegetables === []) {
      for (let i = 0; i < this.props.vegetables.length; i++) {
       return vegetableOptions.push(<option key={i} value={this.props.vegetables[i].name}>{this.props.vegetables[i].name}</option>)
      }
     } else {
       //remove already selected vegetables from the list of options
        const remainingChoices = this.props.vegetables.filter((vegetable) => {
         return !(this.props.addedVegetables.includes(vegetable.name))
        })
        for (let i = 0; i < remainingChoices.length; i++) {
          vegetableOptions.push(<option key={i} value={remainingChoices[i].name}>{remainingChoices[i].name}</option>)
        }
    }

  return (
    <div className='box-builder'>
      <form className='vegetable-select-form' 
        onSubmit={this.onSubmit}>
        <label htmlFor='vegetable-selector'>Choose 8 vegetables from the list</label>
        <select className='vegetable-selector' 
          name='vegetable-selector' 
          ref={this.selectRef}>
          {vegetableOptions}
        </select>
        <button type='submit' 
          className='vegetable-select-button' >Add to Box</button>
        <BoxContents />
      </form>
      <button type='submit' onClick={this.onSave}>Save</button>
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
      addedVegetables: state.box.vegetables,
      vegetablesAdd: state.box.vegetables !== [],
      vegetables: state.vegetable.data
  }
};

export default requiresLogin()(connect(mapStateToProps)(BoxPage));

