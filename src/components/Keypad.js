// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component  {
 
    constructor(){
        super();

        this.handleEvent = this.handleEvent.bind(this)
    
    }
  handleEvent() {
    console.log('Entering password...');
  }
 
  render() {
    
    return (
    <input type="password" onKeyUp={this.handleEvent}></input>
    )
    
  }

}

module.exports = Keypad;