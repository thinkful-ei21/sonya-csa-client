import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {showAboutUs} from '../actions/boxes';
import {clearAuth} from '../actions/auth'

export class Nav extends React.Component {

  // componentDidMount() {
  //   this.props.dispatch(showAboutUs(false));
  // }
  
  onClick = () => {
    this.props.dispatch(showAboutUs(true));
  }

  logout() {
    if (localStorage.getItem('authToken')) {
      localStorage.removeItem('authToken');
    }
    this.props.dispatch(clearAuth());
  }


  render() {
   const aboutUsButton = [];
   if (this.props.showAboutUs) {
    return <Redirect to='/aboutus' />
   } else {
    aboutUsButton.push(<button type='button' className='about-us-button' onClick={() => this.onClick()}>About Us</button>);
   }
   
   const logOutButton = [];
   if (this.props.loggedIn) {
     logOutButton.push(<button type='button' className='log-out-button' onClick={() => this.logout()}>Log Out</button>);
   }

    return(
      
      <header>
        <nav role='navigation'>
          <ul>
            <li>{aboutUsButton}</li>
            <li>{logOutButton}</li>
            {/* <li>{dashboard}</li> */}
          </ul>
        </nav>  
        <h1>Twisted Root Farm</h1>
          
      </header>
    )
  }
  }

    const mapStateToProps = state => {
      // const {currentUser} = state.auth;
      return {
          loggedIn: state.auth.authToken !== null,
          // username: state.auth.currentUser.username,
          // name: `${currentUser.firstName} ${currentUser.lastName}`,
          errorMessage: state.box.errorMessage,
          successMessage: state.box.successMessage,
          showAboutUs: state.box.showAboutUs
      }
    };
    
    export default (connect(mapStateToProps)(Nav));
  
  