import React from 'react';
import {connect} from 'react-redux'

import requiresLogin from './requires-login';
import {fetchBox, createBox, addVegetable, updateBox, setSelectDisplayBoolean} from '../actions/boxes';
import {fetchVegetables} from '../actions/vegetables';
import BoxContents from './box-contents';


export class BoxPage extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   styleSelectForm: false
    // }

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
      .then(() => {
        this.props.dispatch(setSelectDisplayBoolean())
        // if (this.props.savedBoxContents && this.props.savedBoxContents.length === 8) {
        //   this.setState = ({
        //     styleSelectForm: true
        //   })
        })
    .catch(err => {
      console.log(err);
    });
  }

  onSave = (e) => {
    const date = this.props.match.params.date;
    //map through added vegetables and generate array of box content objects
    const addedVegetables = this.props.unsavedBoxContents.map(vegetable => {
      return vegetable      
    });
    const boxContents = {
      boxContents: addedVegetables
    }
    e.preventDefault();
    this.props.dispatch(updateBox(boxContents, date))
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(addVegetable(this.select.value));
    this.props.dispatch(setSelectDisplayBoolean());
    // if (this.props.unsavedBoxContents.length === 7) {
    //   console.log('is this getting hit?')
    //   this.setState({
    //     styleSelectForm: true,
    //   })
    // }
    console.log('selected:',this.select.value,'added:', this.props.unsavedBoxContents);
  }

  render() {
    const vegetableOptions = [];
    // if no vegetables have been selected provide all vegetable options to user
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

    // if (this.props.unsavedBoxContents.length === 8 || (this.props.savedBoxContents && this.props.savedBoxContents.length === 8)) {
    //     console.log('is this getting hit?')
    //     this.setState({
    //       styleSelectForm: true,
    //     })
    //   }

  return (
    <div className='box-builder'>
      <form className={this.props.selectDisplay ? '' : 'hide-vegetable-selector-form'} 
        onSubmit={this.onSubmit}>
        <label htmlFor='vegetable-selector'>Choose 8 vegetables from the list</label>
        <select className='vegetable-selector' 
          name='vegetable-selector' 
          ref={this.selectRef}>
          {vegetableOptions}
        </select>
        <button type='submit' 
          className='vegetable-select-button' >Add to Box</button>
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
      selectDisplay: state.box.displaySelectForm
  }
};

export default requiresLogin()(connect(mapStateToProps)(BoxPage));

