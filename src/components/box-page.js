import React from 'react';
import {connect} from 'react-redux'

import requiresLogin from './requires-login';
import {fetchBox, createBox, addVegetable, updateBox} from '../actions/boxes';
import {fetchVegetables} from '../actions/vegetables';
import BoxContents from './box-contents';


export class BoxPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      styleCondition: false
    }

    this.select = null
    this.selectRef = select => {
       this.select = select
   }
  }
  
  componentDidMount() {
    const date = this.props.match.params.date;
    //get vegetables for dropdown options
    this.props.dispatch(fetchVegetables());
   
    this.props.dispatch(fetchBox(date))
    .then(() => {
        if (!this.props.box) {
          console.log(this.props.box)
          this.props.dispatch(createBox(date))        
        }  
      })
    .then(() => {
       //if 8 vegetables have already been saved, remove select options
      if (this.props.savedBoxContents !== null && this.props.savedBoxContents.length === 8) {
        this.setState({
          styleCondition: true
        })
      }
    })
    .catch(err => {
      console.log(err);
    });
   
   
    }
  

  onSave = (e) => {
    const boxContents = {};
    const date = this.props.match.params.date;
    if (this.props.savedBoxContents) {
      console.log('this.props.savedBoxContents = ',this.props.savedBoxContents)
      boxContents.boxContents = this.props.savedBoxContents
      } else {
        console.log('this.props.unsavedBoxContents = ',this.props.unsavedBoxContents)
       boxContents.boxContents = this.props.unsavedBoxContents
      } 
    e.preventDefault();
    this.props.dispatch(updateBox(boxContents, date))
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(addVegetable(this.select.value));
    if (this.props.unsavedBoxContents.length === 7) {
      console.log('onSubmit selector toggle', this.state.styleCondition)
      this.setState({
        styleCondition: true
      })
    }
    console.log('selected:',this.select.value,'added:', this.props.unsavedBoxContents);
  }

  render() {
    const vegetableOptions = [];
    // if no vegetables have been selected provide all vegetable option to user
    if (this.props.unsavedBoxContents === []) {
      for (let i = 0; i < this.props.vegetables.length; i++) {
       return vegetableOptions.push(<option key={i} value={this.props.vegetables[i].name}>{this.props.vegetables[i].name}</option>)
      }
     } else {
       //remove already selected vegetables from the list of options
        const remainingChoices = this.props.vegetables.filter((vegetable) => {
         return !(this.props.unsavedBoxContents.includes(vegetable.name))
        })
        for (let i = 0; i < remainingChoices.length; i++) {
          vegetableOptions.push(<option key={i} value={remainingChoices[i].name}>{remainingChoices[i].name}</option>)
        }
    } 


    //const vegetableSelectDisplay = this.props.selectClassName;
  return (
    <div className='box-builder'>
      <form className='vegetable-select-form'
        onSubmit={this.onSubmit}>
        <div className={this.state.styleCondition ? 'hide-vegetable-select' : ''}>
          <label htmlFor='vegetable-selector'>Choose 8 vegetables from the list</label>
          <select 
            name='vegetable-selector' 
            ref={this.selectRef}>
            {vegetableOptions}
          </select>
          <button type='submit' className='vegetable-select-button' >
            Add to Box
          </button>
        </div>
      </form>
        <BoxContents />
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
      savedBoxContents: state.box.savedBoxContents,
      unsavedBoxContents: state.box.unsavedBoxContents,
      vegetables: state.vegetable.data,
      //selectClassName: state.selectDisplayClassName
  }
};

export default requiresLogin()(connect(mapStateToProps)(BoxPage));

