import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {showAbout} from '../actions/boxes';
import {clearAuth} from '../actions/auth'

export class Nav extends React.Component {

  // componentDidMount() {
  //   this.props.dispatch(showAboutUs(false));
  // }
  
  onClick = () => {
    this.props.dispatch(showAbout(true));
  }

  logout() {
    this.props.dispatch(clearAuth());
    if (localStorage.getItem('authToken')) {
      localStorage.removeItem('authToken');
    }
  }


  render() {
   const aboutButton = [];
   if (this.props.showAbout) {
    return <Redirect to='/about' />
   } else {
    aboutButton.push(<button key='about-button' type='button' className='about-button' onClick={() => this.onClick()}>About Us</button>);
   }
   
   const logOutButton = [];
   if (this.props.loggedIn) {
     logOutButton.push(<button type='button' key='logout-button' className='logout-button' onClick={() => this.logout()}>Log Out</button>);
   }

    return(
      
      <header role='banner'>
        <nav role='navigation'>
          <ul>
            <li>{aboutButton}</li>
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
      return {
          loggedIn: state.auth.authToken !== null,
          errorMessage: state.box.errorMessage,
          successMessage: state.box.successMessage,
          showAbout: state.box.showAbout
      }
    };
    
    export default connect(mapStateToProps)(Nav);
  
  