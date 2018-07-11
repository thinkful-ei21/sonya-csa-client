import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {showAboutUs} from '../actions/boxes';

export class AboutUs extends React.Component {

  onClick = () => {
    this.props.dispatch(showAboutUs(false))
  }

  render() {
    if (!this.props.showAboutUs) {
      return <Redirect to='/dashboard' />
    }
    return (
      <div className='about-us container'>
        <p className='about-us'>This is how the app works</p>
        <button type='button' onClick={this.onClick}>Got it</button>
      </div>
    )
  }
  }
  

const mapStateToProps = state => {
  return {
      errorMessage: state.box.errorMessage,
      successMessage: state.box.successMessage,
      showAboutUs: state.box.showAboutUs
  }
};

export default (connect(mapStateToProps)(AboutUs));