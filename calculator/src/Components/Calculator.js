//Calculator.js
import React, { Component } from 'react';
import CalculatorButton from './CalculatorButton';
import CalculatorDisplay from './CalculatorDisplay';

class Calculator extends Component {

  render() {
    return (
      <div className="center">
        <p class="bg-primary"><h1>Calculator</h1></p>
        
        
        <CalculatorDisplay />



        <div>
          <div >
            <CalculatorButton className="btn" value="7" />
            <CalculatorButton className="btn" value="8" />
            <CalculatorButton className="btn" value="9" />
            <CalculatorButton className="btn btn-primary" value="+" />
            
            <div >
              <CalculatorButton className="btn" value="4" />
              <CalculatorButton className="btn" value="5" />
              <CalculatorButton className="btn" value="6" />
              <CalculatorButton className="btn btn-primary" value="-" />
            </div>

            <div >
              <CalculatorButton className="btn" value="1" />
              <CalculatorButton className="btn" value="2" />
              <CalculatorButton className="btn" value="3" />
              <CalculatorButton className="btn btn-primary" value="*" />
            </div>
            <div >
              <CalculatorButton className="btn" value="." />
              <CalculatorButton className="btn" value="0" />
              <CalculatorButton className="btn" value="" />
              <CalculatorButton className="btn btn-primary" value="/" />
            </div>
            <div>
            <CalculatorButton className="btn btn-danger" value="C" />
            <CalculatorButton className="btn btn-success" value="=" />
            </div>
            
          </div>
        </div>
      </div>


    )
  }
}

export default Calculator;