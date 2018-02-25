//Calculator.js
import React, { Component } from 'react';

class Calculator extends Component {

    render() {
        return (

            <button className={this.props.className}>{this.props.value}</button>

        )
    }
}

export default Calculator;