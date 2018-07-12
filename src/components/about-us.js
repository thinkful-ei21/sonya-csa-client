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
        <p className='about-us'>
          Twisted Root Farm is a small CSA farm located in the beautiful hill country of 
          central Texas.  We strive to provide our customers with high quality, nutritional 
          vegetables grown using organic methods.  Maintaining the long term health of our
          land and our customers is our mission.
        </p>
        <p className='about-us'>
          Community Supported Agriculture is a unique opportunity to truly connect with and support
          a small farm.  The customer provides the farmer with the capital necessary at the beginning
          of the season and, in return, recieves a weekly share of the farms produce for the season.
          Because our CSA customers are the backbone of our business, we strive to provide them with 
          flexibility in their weekly shares.
        </p>
        <p className='about-us'>
          That's where this app comes in!  Create an account and start setting your box preferences
          for each week.  Simply log in, select the week you want to make your box for, and then 
          choose which 8 vegetables you want for that week.  Once you've selected all 8, save 
          your preferences.  You can always come back later and change your preferences by deleting
          and adding items and then saving again. 
        </p>
        <p className='about-us'>
          Thank you so much for your support.  We could not do what we love if it wasn't for 
          you!  Happy choosing!
        </p>
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