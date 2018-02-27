//Calculator.js
import React, { Component } from 'react';

class Calculator extends Component {
    handleButtonClick(buttonValue){
        this.props.buttonClicked(buttonValue);

      }
    render() {
        return (

            <button className={this.props.className} onClick={this.handleButtonClick.bind(this,this.props.value)}>{this.props.value}  </button>

        )
    }
}

export default Calculator;