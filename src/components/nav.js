import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {showAboutUs} from '../actions/boxes';

export class Nav extends React.Component {

  // componentDidMount() {
  //   this.props.dispatch(showAboutUs(false));
  // }
  
  onClick = () => {
    this.props.dispatch(showAboutUs(true));
  }

  render() {
   const aboutUsButton = [];
   if (this.props.showAboutUs) {
    return <Redirect to='/aboutus' />
   } else {
    aboutUsButton.push(<button type='button' onClick={() => this.onClick()}>About Us</button>);
   }
    return(
      // eslint-disable-next-line
      <nav role='navigation'>
        <header>
          <h1>Twisted Root Farm</h1>
        </header>
        {aboutUsButton}
      </nav>
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
    
    export default (connect(mapStateToProps)(Nav));
  
  