import React from 'react';
import {Link} from 'react-router-dom';

import {getMondays} from '../mondays';


export default class DateSelector extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       month: '12'
     }
    this.value = null
    this.selectRef = select => {
       this.value = select
   }
  }

  handleChange = (event) => {
    console.log(this.state.month)
    this.setState({
      month: this.value.value
    })
    console.log(this.state.month)
  }
  

  render() {
    //get Mondays for selected month
    const selectedMonth = Number(this.state.month);
    const mondays = getMondays();
    const selectedMondays = mondays.filter(date => date.getMonth() === selectedMonth) 
    //create array of <li> elements for each Monday
    const list = selectedMondays.map((date, index) => {
     return <li key={index}>
        <Link to='/box'>{date.toDateString()}</Link>
     </li>
    });

  return (
    <div>
      <form className='date-selector-form' >
        <select className='date-selector' ref={this.selectRef} onChange={this.handleChange} >
          <option value='12'>Select a Month</option>
          <option value='0'>January</option>
          <option value='1'>February</option>
          <option value='2'>March</option>
          <option value='3'>April</option>
          <option value='4'>May</option>
          <option value='5'>June</option>
          <option value='6'>July</option>
          <option value='7'>August</option>
          <option value='8'>September</option>
          <option value='9'>October</option>
          <option value='10'>November</option>
          <option value='11'>December</option>
        </select>
      </form>
      {list}
    </div>
  )
}
   }
