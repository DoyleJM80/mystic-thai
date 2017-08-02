import React, { Component } from 'react';

export default class Contact extends Component {
  constructor() {
    super();
  };
  render() {
    return(
      <div className="contact-container">
        <h1>Hours</h1><hr/>
        <h3>MON: 9am ~ 9pm</h3>
        <h3>TUE: 9am ~ 9pm</h3>
        <h3>WED: 9am ~ 9pm</h3>
        <h3>THU: 9am ~ 9pm</h3>
        <h3>FRI: 9am ~ 11pm</h3>
        <h3>SAT: 9am ~ 11pm</h3>
        <h3>SUN: CLOSED</h3><hr/>
        <h1>Phone Number</h1>
        <h3>864-867-5309 ~ ask for Jenny</h3><hr/>
        <h1>E-Mail</h1>
        <h3>Thaifooooood@thaifood.com</h3>
      </div>
    );
  };
}
